import '../style/Panier.css';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import img from '../assets/foot/F100_RESIST_1.avif'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

function Panier(){

  const [cartItems, setCartItems] = useState([]);

  const [Produits,setProduits] = useState([]);
    async function getProduit(){
    let res = await axios.get('http://localhost:8000/sports')
    console.log(res.data)
    setProduits(res.data)
  }

  // Récupération des articles dans le local storage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  // Ajout d'un article au panier
  const ajouter = (item) => {
    const exist = cartItems.find((x) => x.IdProduit === item.IdProduit);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.IdProduit === item.IdProduit ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log('test qty = 1');
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
      console.log('test qty = 1');
    }
  };

  // Retrait d'un article du panier
  const retirer = (item) => {
    const exist = cartItems.find((x) => x.IdProduit === item.IdProduit);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.IdProduit !== item.IdProduit));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.IdProduit === item.IdProduit ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // Calcul du prix total
  const totalPrix = cartItems.reduce(
    (acc, item) => acc + parseInt(item.PrixProduit) * item.qty,
    0
  );

  // Enregistrement des articles dans le local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div style={{height: "80vh"}}>
      {cartItems.length === 0 ? (
        <div> <h1>Le panier est vide. </h1> </div>
      ) : (
        cartItems.map((produit) => (
          <div className='produitPanier'>
            <div className='img' style={{backgroundImage: `url${produit.image}`}}>
              <img src={produit.image}></img>
            </div>
            <div className='panierNomProduit'>
              <h1>{produit.NomProduit}</h1>
              <p>{produit.vendeur}</p>
  
              <br/><br/>
            
              <div className="quantité">
                <button onClick={() =>retirer(produit)}>-</button>
                <div>{produit.qty}</div>
                <button onClick={() =>ajouter(produit)}>+</button>
              </div>
            
              <div className='infoAchat'>
                <h4>Prix: <b>{produit.PrixProduit}</b></h4>
              </div>
            </div>
          </div>
        ))
      )}
      <div className='achat'>
        <h1>Total:</h1>
        {cartItems.map((produit)=> (
          
        <>  {/* résoud l'erreur:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? */}
          <p> <h5> {produit.NomProduit}:  {produit.PrixProduit}€</h5></p>
          <hr/>
        </>
          ))}

        <hr/>
        <div>
          <h3 className='prix-total'>Prix Total:{totalPrix}€
          </h3>
        </div>
        <Button variant="success">Acheter</Button>
      </div> 

    </div>
  );
};


  
export default Panier;