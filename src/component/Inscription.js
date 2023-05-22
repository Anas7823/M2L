import '../style/Inscription.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import * as React from "react";
import { useState } from 'react';

function Inscription(){
    const [estInscrit, setEstInscrit] = useState(false);
    const Valider = async (e)=>{
        e.preventDefault()
        console.log(e.target)

        let res = await axios.post(`http://localhost:8000/utilisateur`, {
          nom : e.target[0].value,
          mdp : e.target[3].value,
          mail : e.target[1].value,
          adress : e.target[2].value
        });
        setEstInscrit(true);
      }

    return <div className="Inscription">
      {estInscrit && (
        <div
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px',
          }}
        >
          Merci de votre inscription !
        </div>
      )}
        <form className='formulaire' onSubmit={Valider}>                
            <h1>Création d'un compte</h1>

        <Form.Group className="mb-3" controlId="nom">
            <Form.Label>Nom du compte</Form.Label>
            <Form.Control type="text" placeholder="Pseudonyme"/>
            <Form.Text className="text-muted">
                Nous ne partagerons jamais vos informations avec quelqu'un d'autre sans votre consentement.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mail">
            <Form.Label>Adresse e-mail</Form.Label>
            <Form.Control type="email" placeholder="exemple@gmail.com"/>
            <Form.Text className="text-muted">
                Nous ne partagerons jamais vos informations avec quelqu'un d'autre sans votre consentement.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="adress">
                <Form.Label>Adresse de livraison</Form.Label>
                <Form.Control type="text" placeholder="1 rue exemple d'adresse"/>
                <Form.Text className="text-muted">
                    Nous ne partagerons jamais vos informations avec quelqu'un d'autre sans votre consentement.
                </Form.Text>
            </Form.Group>

        <Form.Group className="mb-3" controlId="mdp">
            <Form.Label>Entrer votre Mot-de-passe</Form.Label>
            <Form.Control type="password" placeholder="mot-de-passe"/>
            <Form.Text className="text-muted">
                    Ne partagez jamais votre mot-de-passe avec quelqu'un. Nous ne vous demanderons jamais votre mot de passe par e-mail ou téléphone.
            </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Valider
        </Button>

      </form>
    </div>

}

export default Inscription