import '../style/LeProduit.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import sport from '../assets/ballon-de-basket.jpg'

import axios from "axios";
import React, { useEffect, useState} from "react";


function LeProduit(){
    
const [Produits,setProduits] = useState([]);
async function getProduit(){
    let res = await axios.get('http://localhost:8000/produit/:id')
    console.log(res.data)
    setProduits(res.data)
}

useEffect(() => {getProduit()},[]);

return(
<div className="LeProduit">
    <div className='produitContenue'>
        <div className='produitImage'>
            <div className='imagePrincipal'>
                <img className="" src={sport}/>
            </div>
            <div className='sous-img'>
                <img className='petiteImg' src={sport} alt=''/>
                <img className='petiteImg' src={sport} alt=''/>
                <img className='petiteImg' src={sport} alt=''/>
            </div>
        </div>
        <div className='produitInfo'>
            <h1>{Produits.NomProduit}</h1>
            <hr/>
            <h3>{Produits.PrixProduit}</h3>
            <br/>
            <br/>
            <br/>
            <hr/>
            <hr/>
            <h3 className='etatStock'>Etat Stock</h3>
            <Button variant="success" className='btnAchat'><b>Ajouter au panier </b></Button>
        </div>
    </div>
</div>
)}

export default LeProduit;
