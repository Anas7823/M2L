// Page de tout les produits d'un sport 

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PageProduit.css';
import { useParams } from 'react-router-dom';

import ballonFoot from "../assets/ballon-de-foot.jpg"
import ballonBasket from "../assets/ballon-de-basket.jpg"
import raquetteSquash from "../assets/raquette-squash.jpg"

import axios from "axios";
import React, { useEffect, useState} from "react";

function Produit(props){

const [Produits,setProduits] = useState([]);
async function getProduit(){
  let res = await axios.get('http://localhost:8000/sports/:sport')
  console.log(res.data)
  setProduits(res.data)
}

useEffect(() => {getProduit()},[]);


const { idProduit } = useParams() 
console.log("page charger");

return (<div className="pageProduit">
        {Produits.map((produit)=>(
        <div className="contenueProduit">
            <div class="card p-3">
                <div class="d-flex justify-content-between align-items-center ">
                    <div class="mt-2">
                        <h4 class="text-uppercase" id="sport">{produit.typeProduit}</h4>
                        <div class="mt-5">
                            <h5 class="text-uppercase mb-0" id="nom">{produit.nomProduit}</h5>
                            <h1 class="main-heading mt-0" id="prix">{produit.prixProduit}</h1>
                        </div>
                    </div>
                    <div class="image">
                        <img src="" width="150"/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <p>A great option weather you are at office or at home. </p>
                <button class="btn btn-primary">Acheter</button>
            </div>
        </div> 
        ))}
</div>
)};

export default Produit
