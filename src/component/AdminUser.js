import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import '../style/Admin.css'

export default function AdminUser() {
  const [Id,SetId] = useState();
  const [Nom, setNom] = useState("");
  const [Mdp, setMdp] = useState("");
  const [Find, setFind] = useState(2);
  const [Mail, setMail] = useState("");
  const [Admin, setAdmin] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [NomRecherche, setNomRecherche] = useState("");
  const [chargement, setChargement] = useState(true)

  // MODE RECHERCHE 
  useEffect(() => {
    async function getData() {
      let res = await axios.get(`http://localhost:8000/utilisateur/${Find}`);
      console.log(res.data[0]);
      setNom(res.data[0].NomCompte)
      setMdp(res.data[0].MdpCompte);
      setMail(res.data[0].MailCompte);
      setAdmin(res.data[0].CompteAdmin);
      setAdresse(res.data[0].AdresseCompte);
      SetId(res.data[0].IdCompte)
      setChargement(false)
    }

    getData();
  }, [Find]);

  const Typename = (event) => {
    setNomRecherche(event.target.value);
  };

  const Search = () => {
    if (NomRecherche !== "") setFind(NomRecherche);
  };

  const Suppr = async() => {
      await axios.delete(`http://localhost:8000/utilisateur/${Find}`)
  }

  const Modifier = async (e)=>{
    console.log(Admin)
    e.preventDefault()
    console.log(e.target)
    let res = await axios.put(`http://localhost:8000/utilisateur/${Id}`, {
      nom : e.target[0].value,
      mdp : e.target[1].value,
      admin : e.target[3].checked,
      mail : e.target[2].value,
      adress : e.target[4].value
    });
  }

  if(!chargement){


  return (
    <>
      <div className="back">
        <div className="card adminUser">
          <input type="text" onChange={Typename} value={NomRecherche} /> <br/>
          <Button variant="primary" onClick={Search}>Chercher</Button>
          <Button variant="danger" onClick={Suppr}>Supprimer</Button><br/><br/>
          <form onSubmit={Modifier}>
          Nom:<br/>
          <input type="text" defaultValue={Nom} id='nom'/><br/>
          Mot de passe: <br/>
          <input type="text" defaultValue={Mdp} id='mdp'/><br/>
          Mail: <br/>
          <input type="email" defaultValue={Mail} id='mail'/><br/>
          Admin:<br/>
          <input type="checkbox" defaultChecked={Admin == 1 ?  1 : 0} id='admin'/><br/>
          Adresse: <br/>
          <input type="text" defaultValue={Adresse} id='adress'/><br/>
          <input type="submit" value="Modifier" />
          </form>
        </div>
      </div>
    </>
  );
}
else{
  return(
    <>
      chargement....
    </>
  )
}

}
