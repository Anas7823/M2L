import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import bal from '../assets/ballon-de-basket.jpg'
import poubelle from '../assets/trash-solid.svg'
import '../style/AdminProduit.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function AdminUser() {
const [produits, setProduits] = useState([]);

async function getProduit() {
  let res = await axios.get('http://localhost:8000/sports')
  console.log(res.data)
  setProduits(res.data)
}

useEffect(() => {
  getProduit();
}, []);

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

return (
  <>
    <div className="AdminProduct">
      <h1 style={{margin: "20px", marginBottom:"50px", fontFamily:"fantasy"}}>Administration des Produits</h1>    
      <h1  style={{marginBottom:"100px"}}>Produits de FootBall:</h1>
      <CardGroup className="lesProduits">
          {filterProduitsFootball().map((produit, index) => (
            <div key={index}>
              <img src={bal} class='img-card' variant="top" style={{height: '50%'}}/>
              <div>
                {produit.NomProduit}
                Coût: {produit.PrixProduit}   €
                <br/>
                <Button variant="danger"><b>-</b></Button>
                <Button variant="primary"><b>+</b></Button>
                <Button variant="danger"><b><img src={poubelle} style={{height: '15px'}}/></b></Button>
              </div>
            </div>
          ))}            
      </CardGroup>

      <h1 style={{marginBottom:"100px"}}>Produits de BasketBall:</h1>
      <CardGroup className="lesProduits">
        {filterProduitsBasket().map((produit, index) => (
          <div key={index}>
            <img src={bal} class='img-card' variant="top" style={{height: '50%'}}/>
            <div>
              {produit.NomProduit}
              Coût: {produit.PrixProduit} €
              <br/>
              <Button variant="danger"><b>-</b></Button>
              <Button variant="primary"><b>+</b></Button>
              <Button variant="danger"><b><img src={poubelle} style={{height: '15px'}}/></b></Button>
            </div>
          </div>
        ))}            
      </CardGroup>

      <h1 style={{marginBottom:"100px"}}>Produits de Squash:</h1>
      <CardGroup className="lesProduits">
        {filterProduitsSquash().map((produit, index) => (
          <div key={index}>
            <img src={bal} class='img-card' variant="top" style={{height: '50%'}}/>
            <div>
              {produit.NomProduit}
              Coût: {produit.PrixProduit} €
              <br/>
              <Button variant="danger"><b>-</b></Button>
              <Button variant="primary"><b>+</b></Button>
              <Button variant="danger"><b><img src={poubelle} style={{height: '15px'}}/></b></Button>
            </div>
          </div>
          ))}
      </CardGroup>
  </div>
  </>
);
}
