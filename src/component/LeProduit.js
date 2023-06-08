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

const [cartItems, setCartItems] = useState([]);

// Récupération des articles dans le local storage
useEffect(() => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  if (cartItems) {
    setCartItems(cartItems);
  }
}, []);

const ajouter = (produit) => {
    const produitExistant = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = produitExistant.findIndex((item) => item.IdProduit === produit.IdProduit);
  
    if (itemIndex === -1) {
      produitExistant.push({ ...produit, qty: 1 });
    } else {
      produitExistant[itemIndex].qty += 1;
    }
  
    localStorage.setItem("cartItems", JSON.stringify(produitExistant));
    setCartItems(produitExistant);
  };

return(
<div className="LeProduit">
    <div className='produitContenue'>
        <div className='produitImage'>
            <div className='imagePrincipal'>
                <img className="" src={Produits.ImageProduit}/>
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
            {Produits.StockProduit > 0 ? (
                  <Button variant="success" className='btnAchat' onClick={() => ajouter(Produits)} ><b>Ajouter au panier</b></Button>
                ) : (
                  <Button variant="danger" className='btnAchat' disabled><b>Indisponible</b></Button>
                )}
        </div>
    </div>
</div>
)}
 
export default LeProduit;
