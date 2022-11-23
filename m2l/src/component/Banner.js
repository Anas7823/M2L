import '../style/Banner.css';
import * as React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Banner(){
	return <div className='banner'>
        <Link to='/'>
            <img src={``} alt="" className='logo'/>
        </Link>
        <h1>M2L</h1>
        <div className='ProduitNav'>
            <Link to=''>
                <h4 className='elementNav'>Produit</h4>
            </Link>
            <Link to=''>
                <h4 className='elementNav'>Panier</h4>
            </Link>
            <Link to=''>
                <h4 className='elementNav'> Contact </h4>
            </Link>
            <Link to=''>
                <div className='bouton'>
                    <Button variant="info">Connexion</Button>{' '}
                </div>          
            </Link>
        </div>
    </div> 
}

export default Banner;