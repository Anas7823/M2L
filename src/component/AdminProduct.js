import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import '../style/Admin.css'

export default function AdminUser() {
const [produits, setProduits] = useState([]);

async function getProduit() {
  let res = await axios.get('http://localhost:8000/sports')
  console.log(res.data)
  setProduits(res.data)
}

// Fonction de filtrage des produits pour le football
function filterProduitsFootball() {
  return produits.filter(produit => produit.IdSport === 1);
}

// Fonction de filtrage des produits pour le basket
function filterProduitsBasket() {
  return produits.filter(produit => produit.IdSport === 2);
}

// Fonction de filtrage des produits pour le squash
function filterProduitsSquash() {
  return produits.filter(produit => produit.IdSport === 3);
}

useEffect(() => {
  getProduit();
}, []);

return (
  <>
    <div className="AdminProduct">
      <h1>Administration des Produits</h1>    
      <h1>Produits de FootBall:</h1>
      <div>
          {filterProduitsFootball().map((produit, index) => (
            <div key={index}>
              {/* <Card.Img class='img-card' variant="top"/> */}
              <div>
                {produit.NomProduit}
                
                Coût: {produit.PrixProduit} €
                
                <Link to={'/produit/' + produit.IdProduit}>
                  <Button variant="primary"><b>+</b></Button>
                </Link>
                <Button variant="danger" className=''><b>-</b></Button>
              </div>
            </div>
          ))}            
      </div>

      <h1>Produits de BasketBall:</h1>
      <div>
        {filterProduitsBasket().map((produit, index) => (
          <div key={index}>
            {/* <Card.Img class='img-card' variant="top"/> */}
            <div>
              {produit.NomProduit}
              
              Coût: {produit.PrixProduit} €
              
              <Link to={'/produit/' + produit.IdProduit}>
                <Button variant="primary"><b>+</b></Button>
              </Link>
              <Button variant="danger" className=''><b>-</b></Button>
            </div>
          </div>
        ))}            
      </div>

      <h1>Produits de Squash:</h1>
      <div>
      {filterProduitsSquash().map((produit, index) => (
        <div key={index}>
          {/* <Card.Img class='img-card' variant="top"/> */}
          <div>
            {produit.NomProduit}
            Coût: {produit.PrixProduit} €
            <Link to={'/produit/' + produit.IdProduit}>
              <Button variant="primary"><b>+</b></Button>
            </Link>
            <Button variant="danger" className=''><b>-</b></Button>
          </div>
        </div>
        ))}
      </div>
  </div>
  </>
);
}
