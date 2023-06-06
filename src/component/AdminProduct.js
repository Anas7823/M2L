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

// Fonction pour créer un produit
const NewProduit = async (produit) => {
  try {
    await axios.post(`http://localhost:8000/produit`, produit);
    // La requête a été envoyée avec succès, effectuez les actions supplémentaires si nécessaire
    console.log('Produit créer avec succès');
  } catch (error) {
    // Gérez les erreurs qui se produisent lors de l'envoi de la requête
    console.error('Erreur lors de la création du produit :', error);
  }
};
const ValidNewProduit = (event) => {
  const produit = {
    nom: event.target.nom.value,
    prix: event.target.prix.value,
    stock: event.target.stock.value,
    idSport: event.target.idSport.value,
  };
  NewProduit(produit);
};

// Fonction pour modifier un produit
const ModifProduit = async (produit, event) => {
  try {
    const idProduit = produit.id;
    axios.put(`http://localhost:8000/produit/${idProduit}`, produit);
    console.log('Produit modifié avec succès');
  } catch (error) {
    console.error('Erreur lors de la modification du produit :', error);
  }
};

const ValidModifProduit = (event) => {
  // Construire un objet de données pour la requête avec seules les valeurs non vides
  const data = {
    id: event.target.id.value
  };
  data.nom = event.target.nom.value;
  data.prix = event.target.prix.value;
  data.stock = event.target.stock.value;
  data.idSport = event.target.idSport.value;
  ModifProduit(data);
};


// Fonction pour ajouter un produit
const AjouterProduit = async (produit) => {
  try {
    const idProduit = produit.IdProduit; // Récupérer l'ID du produit
    await axios.put(`http://localhost:8000/addproduit/${idProduit}`);
    console.log("id:" + idProduit + " Stock:" + produit.StockProduit);
    // La requête a été envoyée avec succès, effectuez les actions supplémentaires si nécessaire
    console.log('Produit ajouté avec succès');
  } catch (error) {
    // Gérez les erreurs qui se produisent lors de l'envoi de la requête
    console.error('Erreur lors de l\'ajout du produit :', error);
  }
};

// Fonction pour enlever UN produit
const SoustraireProduit = async (produit) => {
  try {
    const idProduit = produit.IdProduit; // Récupérer l'ID du produit
    await axios.put(`http://localhost:8000/substractproduit/${idProduit}`);
    console.log("id:" + idProduit + " Ancien Stock:" + produit.StockProduit);
    // La requête a été envoyée avec succès, effectuez les actions supplémentaires si nécessaire
    console.log('Produit soustrait avec succès');
  } catch (error) {
    // Gérez les erreurs qui se produisent lors de l'envoi de la requête
    console.error('Erreur lors de la soustration du produit :', error);
  }
};

// Fonction pour SUPPRIMER un produit
const DelProduit = async (produit) => {
  try {
    const idProduit = produit.IdProduit; // Récupérer l'ID du produit
    await axios.delete(`http://localhost:8000/delproduit/${idProduit}`);
    console.log("id:" + idProduit + " Ancien Stock:" + produit.StockProduit);
    // La requête a été envoyée avec succès, effectuez les actions supplémentaires si nécessaire
    console.log('Produit supprimer avec succès');
  } catch (error) {
    // Gérez les erreurs qui se produisent lors de l'envoi de la requête
    console.error('Erreur lors de la suppression du produit :', error);
  }
};

return (
  <>
    <div className="AdminProduct">
      <h1 style={{margin: "20px", marginBottom:"50px", fontFamily:"fantasy"}}>Administration des Produits</h1>    
      
      <div style={{display:"flex", justifyContent:"center"}}>
        <div className="NewProduit" style={{height:"50vh"}}>
          <h1>Ajouter un produit: </h1> <br/>
          <img src={bal} className='img-card' variant="top" style={{height: '100px', marginBottom:'20px'}}/>
          <div>
            <form onSubmit={ValidNewProduit}>
              Nom: 
              <input type="text" id="nom" placeholder="Nom du produit" name="nom"></input> 
              <br/>
              Coût: 
              <input type="text" id="prix" placeholder="Prix du produit" name="prix"></input>
              <br/>
              Stock: 
              <input type="text" id="stock" placeholder="Stock du produit" name="stock"></input>
              <br/>
              SportID: 
              <input type="text" id="idSport" placeholder="Id sport" name="idSport"></input>
              <br/>
              <Button variant="primary" type="submit"><b>Ajouter</b></Button>
            </form>

          </div>
        </div>
        
        <div className="ModifProduit" style={{height:"50vh"}}>
          <h1>Modifier un produit: </h1> <br/>
          <img src={bal} className='img-card' variant="top" style={{height: '100px', marginBottom:'20px'}}/>
          <div>
            <form onSubmit={ValidModifProduit}>
              Id:
              <input type="text" id="id" placeholder="id actuel" name="id"/> <br/>
              Nom: 
              <input type="text" id="nom" placeholder="Nouveau nom" name="nom"/> 
              <br/>
              Coût: 
              <input type="text" id="prix" placeholder="Nouveau prix" name="prix"/>
              <br/>
              Stock: 
              <input type="text" id="stock" placeholder="Nouveau stock" name="stock"/>
              <br/>
              SportID: 
              <input type="text" id="idSport" placeholder="Id sport à remplacé" name="idSport"/>
              <br/>
              <Button variant="primary" type="submit"><b>Ajouter</b></Button>
            </form>

          </div>
        </div>
      </div>

      <h1  style={{marginBottom:"100px"}}>Produits de FootBall: (id:1)</h1>
      <CardGroup className="lesProduits">
          {filterProduitsFootball().map((produit, index) => (
            <div key={index}>
              <img src={bal} className='img-card' variant="top" style={{height: '50%'}}/>
              <div>
                {produit.NomProduit} (id:{produit.IdProduit} ) <br/>
                Coût: {produit.PrixProduit}   €
                <br/>
                Stock: {produit.StockProduit}
                  <input style={{display:"none"}} name="id" defaultValue ={produit.IdProduit} readonly/>
                <br/>
                <Button variant="danger"  key={produit.IdProduit} onClick={() => SoustraireProduit(produit)}><b>-</b></Button> {/* Fonction fléchée permet d'avoir "produit" en paramètre */}
                <Button variant="primary" key={produit.IdProduit} onClick={() => AjouterProduit(produit)}><b>+</b></Button>
                <Button variant="danger"  key={produit.IdProduit} onClick={() => DelProduit(produit)}><b><img src={poubelle} style={{height: '15px'}}/></b></Button>
              </div>
            </div>
          ))}          
      </CardGroup>

      <h1 style={{marginBottom:"100px"}}>Produits de BasketBall: (id:2)</h1>
      <CardGroup className="lesProduits">
        {filterProduitsBasket().map((produit, index) => (
          <div key={index}>
            <img src={bal} className='img-card' variant="top" style={{height: '50%'}}/>
            <div>
              {produit.NomProduit} (id:{produit.IdProduit} ) <br/>
              Coût: {produit.PrixProduit} €
              <br/>
              Stock: {produit.StockProduit}
              <input style={{display:"none"}} name="id" defaultValue ={produit.IdProduit}/>
              <br/>
              <Button variant="danger"  key={produit.IdProduit} onClick={() => SoustraireProduit(produit)}><b>-</b></Button> {/* Fonction fléchée permet d'avoir "produit" en paramètre */}
              <Button variant="primary" key={produit.IdProduit} onClick={() => AjouterProduit(produit)}><b>+</b></Button>
              <Button variant="danger"  key={produit.IdProduit} onClick={() => DelProduit(produit)}><b><img src={poubelle} style={{height: '15px'}}/></b></Button>
            </div>
          </div>
        ))}            
      </CardGroup>

      <h1 style={{marginBottom:"100px"}}>Produits de Squash: (id:3)</h1>
      <CardGroup className="lesProduits">
        {filterProduitsSquash().map((produit, index) => (
          <div key={index}>
            <img src={bal} className='img-card' variant="top" style={{height: '50%'}}/>
            <div>
              {produit.NomProduit} (id:{produit.IdProduit} ) <br/>
              Coût: {produit.PrixProduit} €
              <br/>
              Stock: {produit.StockProduit}
              <input style={{display:"none"}} name="id" defaultValue ={produit.IdProduit}/>
              <br/>
              <Button variant="danger"  key={produit.IdProduit} onClick={() => SoustraireProduit(produit)}><b>-</b></Button> {/* Fonction fléchée permet d'avoir "produit" en paramètre */}
              <Button variant="primary" key={produit.IdProduit} onClick={() => AjouterProduit(produit)}><b>+</b></Button>
              <Button variant="danger"  key={produit.IdProduit} onClick={() => DelProduit(produit)}><b><img src={poubelle} style={{height: '15px'}}/></b></Button>            </div>
          </div>
          ))}
      </CardGroup>
  </div>
  </>
);
}
