import '../style/LeProduit.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import sport from '../assets/ballon-de-basket.jpg'
import {useParams } from 'react-router-dom';

import axios from "axios";
import React, { useEffect, useState} from "react";


function LeProduit(){
    
const [Produits,setProduits] = useState([]);
let { IdProduit } = useParams();

async function getProduit(){
    let res = await axios.get('http://localhost:8000/produit/'+IdProduit)
    console.log(IdProduit);
    console.log(res.data)
    setProduits(res.data[0])
}

useEffect(() => {getProduit()},[]);

return(
<div className="LeProduit">
    <div className='produitContenue'>
        <div className='produitImage'>
            <div className='imagePrincipal'>
                <img className="" src={sport}/>
            </div>
            {/* <div className='sous-img'>
                <img className='petiteImg' src={sport} alt=''/>
                <img className='petiteImg' src={sport} alt=''/>
                <img className='petiteImg' src={sport} alt=''/>
            </div> */}
        </div>
        <div className='produitInfo'>
            <h1>{Produits.NomProduit}</h1>
            <hr/>
            <h3>{Produits.PrixProduit} €</h3>
            <br/>
            <br/>
            <br/>
            <hr/>
            <hr/>
            <h3 className={Produits.StockProduit > 0 ? 'enStock' : 'pasDeStock'}>{Produits.StockProduit > 0 ? 'En Stock' : 'Pas de Stock'}</h3>
            <Button variant={Produits.StockProduit > 0 ? "success" : "danger"} className='btnAchat'><b>{Produits.StockProduit > 0 ? 'Ajouter au panier' : 'Indisponible'} </b></Button>
        </div>
    </div>
</div>
)}
 
export default LeProduit;
