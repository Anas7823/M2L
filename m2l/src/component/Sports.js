import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';
import banniereBasketball from "../assets/banniere-basketball.jpg"
import banniereFootball from "../assets/banniere-football.jpg"
import banniereSquash from "../assets/banniere-squash.jpg"

import ballonFoot from "../assets/ballon-de-foot.jpg"
import ballonBasket from "../assets/ballon-de-basket.jpg"
import raquetteSquash from "../assets/raquette-squash.jpg"

import axios from "axios";
import React, { useEffect, useState} from "react";

import '../style/Sports.css';


import Panier from "./Panier";

function Sports(){ 
const Sports = [
  {
    idSport: 1,
    nom: "BasketBall", 
    banniere: banniereBasketball,
    numSlide: "First",
    prix: 24.99,
    img: ballonBasket,
  },
  {
    idSport: 2,
    nom: "FootBall" , 
    banniere: banniereFootball,
    numSlide: "Second",
    prix: 28.99,
    img: ballonFoot,
  },
  {
    idSport: 3,
    nom: "Squash", 
    banniere: banniereSquash,
    numSlide: "Third",
    prix: 44.59,
    img: raquetteSquash,
  }
]
const [Produits,setProduits] = useState([]);
async function getProduit(){
  let res = await axios.get('http://localhost:8000/sports')
  console.log(res.data)
  setProduits(res.data)
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

return (<div className="produit">
    <div className="titreProduit">
        <h1>Articles trier par sport :</h1>
    </div>
      <Carousel>
        {Sports.map((sport, index) => (
          <Carousel.Item>
            <Link to={"/Sport/" + sport.idSport}>
              <div className="imgCaroussel">
                    <img className="d-block w-100" style={{ background: `center url(${sport.banniere})`, height:'70vh', backgroundSize:'cover' }}/> 
              </div>
                    <Carousel.Caption>
                      <h3>{sport.nom}</h3>
                    </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

    <div className="titreProduit">
        <h1>Liste des meilleurs ventes :</h1>
    </div>

  <CardGroup>
      {Sports.map((produit) =>(
      <Card>
        <Card.Img variant="top" src={produit.img} />
        <Card.Body>
          <Card.Title>{produit.nom}</Card.Title>
          <Card.Text>
            <h4>Coût: {produit.prix} €</h4>
            {/* <button onClick={ajouter(produit)}>Ajouter au Panier</button> */}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      ))}
      
    </CardGroup>

    <div className="titreProduit">
        <h1>Listes de tout les articles :</h1>
    </div> 
    <div className="toutArticles">
      <div className="card-grid">
        {Produits.map((produit, index) => (
          <Card key={index}>
            <Card.Img class='img-card' variant="top" src={ballonFoot} />
            <Card.Body>
              <Link to={'/Sport/unique/' + produit.IdProduit}>
                <Card.Title>{produit.NomProduit}</Card.Title>
              </Link>
              <Card.Text style={{display:"flex"}}>
                <h4>Coût: {produit.PrixProduit} €</h4> 
                <Button variant="success" className='btnAchatSports' onClick={() => ajouter(produit)}><b>Acheter</b></Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>


    {/* <div className="toutArticles">
    <CardGroup>
        {Sports.map((sport, index) => (
          <CardProduit produit={sport}/>
        ))}   
      </CardGroup>
    </div>   */}
          {cartItems.length === 0 ? (
        <div>Le panier est vide.</div>
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
                <div>{produit.qty}</div>
              </div>
            
              <div className='infoAchat'>
                <h4>Prix: <b>{produit.PrixProduit}</b></h4>
              </div>
            </div>
          </div>
        ))
      )}
</div>
)};

export default Sports
