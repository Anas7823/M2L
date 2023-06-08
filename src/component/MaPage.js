import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import '../style/MaPage.css';

function MaPage() {

    const [utilisateurs, setUsers] = useState([]);
    let { IdCompte } = useParams();


    async function getUsers() {
        let res = await axios.get('http://localhost:8000/utilisateur/' + IdCompte);
        console.log(IdCompte);
        console.log(res.data)
        setUsers(res.data[0])
    }

    useEffect(() => {
        getUsers();
    }, []);


    const [modification, setModification] = useState(false);

    // Fonction pour modifier un User
    const ModifUser = async (user, event) => {
        try {
        const idUser = user.id;
        axios.put(`http://localhost:8000/utilisateur/${idUser}`, user);
        console.log('User modifié avec succès');
        setModification(true); // Mettre à jour l'état de la modification
        } catch (error) {
        console.error('Erreur lors de la modification de l\'user :', error);
        }
    };
  const ValidModifUser = (event) => {
    // Construire un objet de données pour la requête avec seules les valeurs non vides
    const data = {
      id: event.target.id.value
    };
    data.mdp = event.target.mdp.value;
    
    ModifUser(data);
  };
    return (
        <div className="MaPage">
            <h1>Mon profil</h1>
            <div className="container">
                <div className="mesInfos">
                    <h2>Mes informations</h2>
                <div className="photo">
                    <img src={utilisateurs.CompteAdmin  ? "https://raymanpc.com/wiki/images/1/15/Admin.png" : "https://www.w3schools.com/howto/img_avatar.png"} alt="Avatar" className="avatar" />
                        <h3>
                            <p className="pseudo">Bienvenue <b>{utilisateurs.NomCompte} !</b></p>
                        </h3>
                </div>
                    <div className="infos">
                        <h5>
                            <p>Adresse-mail: {utilisateurs.MailCompte}</p>
                        </h5>
                        <h6>
                            <p>Adresse-postal: {utilisateurs.AdresseCompte}</p>
                        </h6>
                        <h6 style={{color:"red"}}>
                            Modifier mon mot de passe:
                            <form onSubmit={ValidModifUser}>
                                <input type="hidden" name="id" value={utilisateurs.IdCompte} />
                                <input type="text" name="mdp" placeholder="Nouveau mot de passe" />
                                <input type="submit" value="Modifier" />
                                <p style={{color:"green"}}>{modification ? "mot de passe modifié !" : ""}</p>
                            </form>
                        </h6>
                    </div>
                    {utilisateurs.CompteAdmin ? 
                    <h6>Vous êtes administrateur.
                    <br/> Page Admin <Link to="/gestproduit"> produit</Link> et <Link to="/Administration">compte</Link></h6> 
                    : 
                    <h6>Merci d'être parmis nos clients</h6>}
                </div>
            </div>
        </div>
    );
}

export default MaPage;
