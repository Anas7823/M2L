import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/Accueil.css';



function Accueil(){
return <div className='accueil'>
        <Card className="text-center">
            <Card.Header>Bienvenue sur le site e-commerce de M2L</Card.Header>
                <Card.Body>
                    <Card.Title>Information</Card.Title>
                    <Card.Text>
                        Notre site e-commerce est un site caritatif. 
                        C'est-à-dire qu'aucun des revenus ne seront perçus par notre entreprise,
                        Ils serviront de dons pour les personnes en nécessités
                    </Card.Text>
                    <Link to='/Produit'>
                        <Button variant="primary">Produit</Button>
                    </Link>
                </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    </div> 
}

export default Accueil;
