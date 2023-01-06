import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PageProduit.css';
import { useParams } from 'react-router-dom';

import ballonFoot from "../assets/ballon-de-foot.jpg"
import ballonBasket from "../assets/ballon-de-basket.jpg"
import raquetteSquash from "../assets/raquette-squash.jpg"


function Produit(props){
const Produits = [
    {
        idProduit: 1,
        typeProduit:"Ballon",
        nom: "NBA Team Tribute",
        prix: "28.10€",
        img: ballonFoot,
    },
    {
        idProduit: 2,
        typeProduit:"Chaussure",
        nom: "test 2",
        prix: "239.99€",
        img: ballonBasket,
    },
    {
        idProduit: 3,
        typeProduit:"Ballon",
        nom: "test 3",
        prix: "### €",
        img: raquetteSquash,
    },
    {
        idProduit: 4,
        typeProduit:"Ballon",
        nom: "test 4",
        prix: "### €",
        img: ballonFoot,
    }
]

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
                            <h5 class="text-uppercase mb-0" id="nom">{produit.nom}</h5>
                            <h1 class="main-heading mt-0" id="prix">{produit.prix}</h1>
                        </div>
                    </div>
                    <div class="image">
                        <img src={produit.img} width="150"/>
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
