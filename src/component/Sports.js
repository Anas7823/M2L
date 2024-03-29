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

// trier des panier gérer ici

const [triOption, setTriOption] = useState("");

const [produitsTries, setProduitsTries] = useState([]);

const trierParNom = () => {
  const produitsTriés = [...Produits].sort((a, b) => {
    return a.NomProduit.localeCompare(b.NomProduit);
  });
  setProduitsTries(produitsTriés);
  setTriOption("nom");
};

const trierParPrix = () => {
  const produitsTriés = [...Produits].sort((a, b) => {
    return parseFloat(a.PrixProduit) - parseFloat(b.PrixProduit);
  });
  setProduitsTries(produitsTriés);
  setTriOption("prix");
};

const trierParDefault = () => {
  setTriOption("");
};

return (<div className="produit">
    <div className="titreProduit">
        <h1>Articles trier par sport :</h1>
    </div>
      <Carousel>
        {Sports.map((sport, index) => (
          <Carousel.Item>
            <Link to={"/Sport/" + sport.nom}>
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
          <Card.Title>Sport: <b>{produit.nom}</b></Card.Title>
          <Card.Text>
            <h4>Coût: {produit.prix} €</h4>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      ))}
      
    </CardGroup>

    <div className="titreProduit">
        <h1>Listes de tout les articles :</h1>
    </div> 
    <div className="toutArticles">
    <Button variant="" onClick={trierParNom} style={{margin:"0 2vh 2vh auto", outline:"1px solid"}}>Trier par nom</Button>
    <Button variant="" onClick={trierParPrix} style={{margin:"0 2vh 2vh auto", outline:"1px solid"}}>Trier par prix</Button>
    <Button variant="" onClick={trierParDefault} style={{margin:"0 2vh 2vh auto", outline:"1px solid"}}>Trier par défaut</Button>
      <div className="card-grid">
      {triOption === "nom" && produitsTries.length > 0 ? (
        produitsTries.map((produit, index) => (
          <Card key={index}>
          <Card.Img className='img-card' variant="top" src={produit.ImageProduit } style={{maxHeight:'100%', maxWidth:'100%'}}/>
          <Card.Body>
            <Card.Title className="cardTitle">{produit.NomProduit}</Card.Title>
            <Card.Text style={{display:"flex"}}>
              <h4 className="coutProduit" >Coût: {produit.PrixProduit} €</h4> 
            </Card.Text>
              <Link to={'/produit/' + produit.IdProduit}>
                <Button variant="primary"><b>Plus d'info</b></Button>
              </Link>
              {produit.StockProduit > 0 ? (
                <Button variant="success" className='btnAchatSports' onClick={() => ajouter(produit)}><b>Acheter</b></Button>
              ) : (
                <Button variant="danger" className='btnAchatSports' disabled><b>Indisponible</b></Button>
              )}
          </Card.Body>
        </Card>
        ))
      ) : triOption === "prix" && produitsTries.length > 0 ? (
        produitsTries.map((produit, index) => (
          <Card key={index}>
          <Card.Img className='img-card' variant="top" src={produit.ImageProduit } style={{maxHeight:'100%', maxWidth:'100%'}}/>
          <Card.Body>
            <Card.Title className="cardTitle">{produit.NomProduit}</Card.Title>
            <Card.Text style={{display:"flex"}}>
              <h4 className="coutProduit" >Coût: {produit.PrixProduit} €</h4> 
            </Card.Text>
              <Link to={'/produit/' + produit.IdProduit}>
                <Button variant="primary"><b>Plus d'info</b></Button>
              </Link>
              {produit.StockProduit > 0 ? (
                <Button variant="success" className='btnAchatSports' onClick={() => ajouter(produit)}><b>Acheter</b></Button>
              ) : (
                <Button variant="danger" className='btnAchatSports' disabled><b>Indisponible</b></Button>
              )}
          </Card.Body>
        </Card>
        ))
      ) : (
        Produits.map((produit, index) => (
          <Card key={index}>
          <Card.Img className='img-card' variant="top" src={produit.ImageProduit } style={{maxHeight:'100%', maxWidth:'100%'}}/>
          <Card.Body>
            <Card.Title className="cardTitle">{produit.NomProduit}</Card.Title>
            <Card.Text style={{display:"flex"}}>
              <h4 className="coutProduit" >Coût: {produit.PrixProduit} €</h4> 
            </Card.Text>
              <Link to={'/produit/' + produit.IdProduit}>
                <Button variant="primary"><b>Plus d'info</b></Button>
              </Link>
              {produit.StockProduit > 0 ? (
                <Button variant="success" className='btnAchatSports' onClick={() => ajouter(produit)}><b>Acheter</b></Button>
              ) : (
                <Button variant="danger" className='btnAchatSports' disabled><b>Indisponible</b></Button>
              )}
          </Card.Body>
        </Card>
        ))
      )}
      </div>
    </div>
</div>
)};

export default Sports
