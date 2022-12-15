import '../style/Inscription.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Inscription(){
    return <div className="Inscription">

        <div className='formulaire'>                
            <h1>Création d'un compte</h1>

            <Form.Group className="mb-3" controlId="nom">
                <Form.Label>Nom du compte</Form.Label>
                <Form.Control type="text" placeholder="Entrer votre Nom/Pseudo" />
                <Form.Text className="text-muted">
                    Nous ne partagerons jamais vos informations avec quelqu'un d'autre sans votre consentement.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mail">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control type="email" placeholder="Entrer votre adresse mail" />
                <Form.Text className="text-muted">
                    Nous ne partagerons jamais vos informations avec quelqu'un d'autre sans votre consentement.
                </Form.Text>
            </Form.Group>

        <Form.Group className="mb-3" controlId="mdp">
            <Form.Label>Mot-de-passe</Form.Label>
            <Form.Control type="password" placeholder="mot-de-passe"/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Valider
        </Button>

      </div>
    </div>

}

export default Inscription