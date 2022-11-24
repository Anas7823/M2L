import '../style/Banner.css';
import * as React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Banner(){
	return <div className='banner'>
        <div className='ProduitNav'>
            <Link to='/'>
                <h1 className='elementNav'>M2L</h1>
            </Link>
            <Link to='/Produit'>
                <h4 className='elementNav'>Produit</h4>
            </Link>
            <Link to='/Panier'>
                <h4 className='elementNav'>Panier</h4>
            </Link>
            <Link to='/Contact'>
                <h4 className='elementNav'> Contact </h4>
            </Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 barreRecherche"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
            <Link to=''>
                <div className='bouton'>
                    <Button variant="info">Connexion</Button>{' '}
                </div>          
            </Link>
        </div>
    </div> 
}

export default Banner;