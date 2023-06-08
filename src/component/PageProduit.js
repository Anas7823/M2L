// Page de tout les produits d'un sport 

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PageProduit.css';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ballonFoot from "../assets/ballon-de-foot.jpg"
import ballonBasket from "../assets/ballon-de-basket.jpg"
import raquetteSquash from "../assets/raquette-squash.jpg"

import axios from "axios";
import React, { useEffect, useState} from "react";

function Produit(props){
const [Produits,setProduits] = useState([]);
let { NomSport } = useParams();

async function getProduit(){
  let res = await axios.get('http://localhost:8000/sport/'+NomSport)
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


const { idProduit } = useParams() 
console.log("page charger");

return (
    <div className="pageProduit">
        <div className='card-gridProduits' style={{alignItems: "stretch"}}>
        {Produits.map((produit) => (
            <div className="contenueProduit">
                <div className="card p-3">
                    <div className="d-flex justify-content-between align-items-center "> 
                      <div className="mt-2">
                              <h5 className="text-uppercase mb-0" id="nom" style={{position: "absolute", width:"50%"}}>{produit.NomProduit}</h5>
                          <div className="mt-5">
                              <br/>
                              <h1 className="main-heading mt-5" id="prix">{produit.PrixProduit}€</h1>
                          </div>
                      </div>
                      <div className="image">
                          <img src={produit.ImageProduit} style={{width:'150px'}}/>
                      </div>    
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    {/* <p>A great option weather you are at office or at home. </p> */}
                    {produit.StockProduit > 0 ? (
                      <button className="btn btn-success" onClick={() => ajouter(produit)}>Acheter</button>
                    ) : (
                      <button className="btn btn-danger" disabled> Indisponible </button>
                    )}
                    <br/>
                    <Link to={'/produit/' + produit.IdProduit}>
                      <Button variant="primary" style={{width: '100%'}} ><b>Plus d'info</b></Button>
                    </Link>
                </div>
            </div> 
        ))}
        </div>
</div>
)};

export default Produit
