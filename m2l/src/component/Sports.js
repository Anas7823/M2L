import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Carousel from 'react-bootstrap/Carousel';
import banniereBasketball from "../assets/banniere-basketball.jpg"
import banniereFootball from "../assets/banniere-football.jpg"
import banniereSquash from "../assets/banniere-squash.jpg"

import ballonFoot from "../assets/ballon-de-foot.jpg"
import ballonBasket from "../assets/ballon-de-basket.jpg"
import raquetteSquash from "../assets/raquette-squash.jpg"

import axios from "axios";
import React, { useState} from "react";

import '../style/Sports.css';

import CardProduit from "../component/CardProduit.js"

function Sports(){ 
const Sports = [
  {
    idProduit: 1,
    nom: "BasketBall" , 
    banniere: banniereBasketball,
    numSlide: "First"
  },
  {
    idProduit: 2,
    nom: "FootBall" , 
    banniere: banniereFootball,
    numSlide: "Second"
  },
  {
    idProduit: 3,
    nom: "Squash" , 
    banniere: banniereSquash,
    numSlide: "Third"
  }
]
const [Produits,setProduits] = useState([]);
async function getProduit(){
  let res = await axios.get('http://localhost:8000/sports')
  console.log(res.data)
  setProduits(res.data)
}

getProduit()

return (<div className="produit">
    <div className="titreProduit">
        <h1>Articles trier par sport :</h1>
    </div>
      <Carousel>
        {Sports.map((sport, index) => (
          <Carousel.Item>
            <Link to={"/produit/" + sport.idProduit}>
              <div className="imgCaroussel">
                    <img className="d-block w-100" src={sport.banniere} alt={ sport.numSlide + " slide"}/>
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
      {Produits.map((produit) =>(
      <Card>
        <Card.Img variant="top" src={ballonFoot} />
        <Card.Body>
          <Card.Title>{produit.NomProduit}</Card.Title>
          <Card.Text>
            <h4>Coût: {produit.PrixProduit} €</h4>
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
      <CardGroup>
        {Sports.map((sport, index) => (
          <CardProduit produit={sport}/>
        ))}   
      </CardGroup>
    </div>
          
</div>
)};

export default Sports
