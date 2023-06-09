import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import poubelle from '../assets/trash-solid.svg'
import '../style/Admin.css'

export default function AdminUser() {
const user = JSON.parse(localStorage.getItem('user'));
const [users, setUsers] = useState([]);

async function getUser() {
  let res = await axios.get('http://localhost:8000/utilisateur')
  console.log(res.data)
  setUsers(res.data)
}

useEffect(() => {
  getUser();
}, []);

// Fonction pour SUPPRIMER un user
const DelUser = async (user) => {
  try {
    const idUser = user.IdCompte; // Récupérer l'ID du compte 
    console.log(idUser);
    await axios.delete(`http://localhost:8000/utilisateur/${idUser}`);
    console.log("id:" + idUser + "supprimer");
    // La requête a été envoyée avec succès
    console.log('Compte supprimer avec succès');
  } catch (error) {
    // Gérez les erreurs qui se produisent lors de l'envoi de la requête
    console.error('Erreur lors de la suppression du compte :', error);
  }
};

// Fonction pour créer un user
const NewUser = async (user) => {
  try {
    await axios.post(`http://localhost:8000/utilisateur`, user);
    // La requête a été envoyée avec succès
    console.log('user créer avec succès');
  } catch (error) {
    // Gérez les erreurs qui se produisent lors de l'envoi de la requête
    console.error('Erreur lors de la création du user :', error);
  }
};
const ValidNewUser = (event) => {
  event.preventDefault();
  const data = {
    nom: event.target.nom.value,
    mdp: event.target.mdp.value,
    admin: event.target.admin.value,
    mail: event.target.mail.value,
    adress: event.target.adresse.value,
  };
  NewUser(data);
};

// Fonction pour modifier un User
const ModifUser = async (user, event) => {
  try {
    const idUser = user.id;
    axios.put(`http://localhost:8000/utilisateur/${idUser}`, user);
    console.log('User modifié avec succès');
  } catch (error) {
    console.error('Erreur lors de la modification de l\'user :', error);
  }
};
const ValidModifUser = (event) => {
  // Construire un objet de données pour la requête avec seules les valeurs non vides
  const data = {
    id: event.target.id.value
  };
  data.nom = event.target.nom.value;
  data.mdp = event.target.mdp.value;
  data.admin = event.target.admin.value;
  data.mail = event.target.mail.value;
  data.adresse = event.target.adresse.value;
  ModifUser(data);
};

  // Vérifier si l'utilisateur est connecté et a le rôle d'administrateur
  if (!user || !user.CompteAdmin == 1) {
    // Rediriger l'utilisateur vers une autre page ou afficher un message d'erreur
    return (
      <div className="AdminProduct">
        Votre statut : {user.CompteAdmin == 1 ? "Admin":"Client"} <br/>
        <p>Vous n'êtes pas autorisé à accéder à cette page</p>
      </div>
    )
  }else{
    return (
        <div className="adminUser">
          <div>
            <h1>Administration des utilisateurs</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Pseudo</th>
                  <th>Mot de passe</th>
                  <th>Admin</th>
                  <th>Mail</th>
                  <th>Adresse</th>
                  <th>Administration</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.IdCompte}>
                    <td>{user.IdCompte}</td>
                    <td>{user.NomCompte}</td>
                    <td>{user.MdpCompte}</td>
                    <td>{user.CompteAdmin ? 'Oui' : 'Non'}</td>
                    <td>{user.MailCompte}</td>
                    <td>{user.AdresseCompte}</td>
                    <td>
                      <Button variant="danger" key={user.IdCompte} onClick={() => DelUser(user)}><img src={poubelle} style={{height: '15px'}}/></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <div style={{display:'flex'}}>
          <form className="modifUser" onSubmit={ValidNewUser}>
            <h1>Créer un utilisateur</h1>
             NomCompte:<br/>
              <input type="text" placeholder="nouvelle valeur" id="nom" name="nom" /> <br/>
              MdpCompte:<br/>
              <input type="text" placeholder="nouvelle valeur" id="mdp" name="mdp" /> <br/>
              CompteAdmin:<br/>
              <input type="text" placeholder="nouvelle valeur (1=oui)" id="admin" name="admin" /> <br/>
              MailCompte:<br/>
              <input type="text" placeholder="nouvelle valeur" id="mail" name="mail" /> <br/>
              AdresseCompte:<br/>
              <input type="text" placeholder="nouvelle valeur" id="adresse" name="adresse" /> <br/>
              <button type="submit">Créer</button>
            </form>
  
            <form className="modifUser" onSubmit={ValidModifUser}>
            <h1>Modifier un utilisateur</h1>
              IdCompte:<br/>
              <input type="text" placeholder="id actuel" id="id" name="id" /> <br/>
              NomCompte:<br/>
              <input type="text" placeholder="nouvelle valeur" id="nom" name="nom" /> <br/>
              MdpCompte:<br/>
              <input type="text" placeholder="nouvelle valeur" id="mdp" name="mdp" /> <br/>
              CompteAdmin:<br/>
              <input type="text" placeholder="nouvelle valeur (1=oui)" id="admin" name="admin" /> <br/>
              MailCompte:<br/>
              <input type="text" placeholder="nouvelle valeur" id="mail" name="mail" /> <br/>
              AdresseCompte:<br/>
              <input type="text" placeholder="nouvelle valeur" id="adresse" name="adresse" /> <br/>
              <button type="submit">Modifier</button>
            </form>
          </div>
        </div>
    );
  }

  }
  
