import '../style/Inscription.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Inscription(){
    return <div className="Inscription">
        <h1>Création d'un compte</h1>
        {/* <div className='connexion'>
           <div className="nomPrenom">
            <div className="Nom">
                <label>Nom:</label>
                <input id="name" type="text" class="form-control" placeholder="Nom"></input>
            </div>
            <div className="Prenom">
                <label>Prénom:</label>
                <input id="firstname" type="text" class="form-control" placeholder="Prenom"></input>
            </div>
           </div>
        </div> */}
        <Form.Group className="mb-3" controlId="nom">
            <Form.Label>Nom du compte</Form.Label>
            <Form.Control type="text" placeholder="Entrer votre Nom" />
            <Form.Text className="text-muted">
                Nous ne partagerons jamais vos informations avec quelqu'un d'autre.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mail">
            <Form.Label>Adresse mail</Form.Label>
            <Form.Control type="email" placeholder="Entrer votre adresse mail" />
            <Form.Text className="text-muted">
                Nous ne partagerons jamais vos informations avec quelqu'un d'autre.
            </Form.Text>
        </Form.Group>

      <Form.Group className="mb-3" controlId="mdp">
        <Form.Label>Mot-de-passe</Form.Label>
        <Form.Control type="password" placeholder="mot-de-passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Valider
      </Button>
    </div>

}

export default Inscription