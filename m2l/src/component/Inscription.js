import '../style/Inscription.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Inscription(){
    return <div className="Inscription">

        <div className='formulaire'>                
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

      </div>
    </div>

}

export default Inscription