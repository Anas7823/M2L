import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Carousel from 'react-bootstrap/Carousel';
import banniereBasketball from "../assets/banniere-basketball.jpg"
import banniereFootball from "../assets/banniere-football.jpg"
import banniereSquash from "../assets/banniere-squash.jpg"

import ballonFoot from "../assets/ballon-de-foot.jpg"
import ballonBasket from "../assets/ballon-de-basket.jpg"
import raquetteSquash from "../assets/raquette-squash.jpg"

import '../style/Sports.css';

function Sports(props){ 
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
  },
]

return (<div className="produit">
    <div className="titreProduit">
        <h1>Articles trier par sport :</h1>
    </div>
      <Carousel>
        {Sports.map((sport, index) => (
          <Carousel.Item>
            <Link to={"/produit/" + sport.idProduit}>
                    <img className="d-block w-100" src={sport.banniere} alt={ sport.numSlide + " slide"}/>
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
      <Card>
        <Card.Img variant="top" src={ballonFoot} />
        <Card.Body>
          <Card.Title>Ballon de foot: Champions league CNSTZX®</Card.Title>
          <Card.Text>
            <h4>Coût: 42 €</h4>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ballonBasket} />
        <Card.Body>
          <Card.Title>Ballon de basquette: NBA Team Tribute</Card.Title>
          <Card.Text>
            <h4>Coût: 28.10€</h4>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={raquetteSquash} />
        <Card.Body>
          <Card.Title>Raquette de squash: Prince Hyper Pro 550</Card.Title>
          <Card.Text>
            <h4>Coût: 157.60 €</h4>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    <div className="titreProduit">
        <h1>Listes de tout les articles :</h1>
    </div>

    {Sports.map((sport, index) => (
      <MDBContainer fluid className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="3">
            <MDBCard className="text-black">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                position="top"
                alt="Apple Computer"
              />
              <MDBCardBody>
                <div className="text-center">
                  <MDBCardTitle>{Sports.nom}</MDBCardTitle>
                  <p className="text-muted mb-4">Apple pro display XDR</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Pro Display XDR</span>
                    <span>$5,999</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Pro stand</span>
                    <span>$999</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Vesa Mount Adapter</span>
                    <span>$199</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Total</span>
                  <span>$7,197.00</span>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    ))}   
          
</div>
)};

export default Sports
