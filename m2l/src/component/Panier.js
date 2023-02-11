import '../style/Panier.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import img from '../assets/foot/F100_RESIST_1.avif'
import 'bootstrap/dist/css/bootstrap.min.css';

function Panier(){
  const Produits = [
    {
        idProduit: 1,
        typeProduit:"Ballon",
        nom: "NBA Team Tribute",
        prix: "28.10€",
        vendeur:'Amazon',
        image:img,
    },
    {
        idProduit: 2,
        typeProduit:"Chaussure",
        nom: "test 2",
        prix: "239.99",
        vendeur:'Amazon',
        image:img,
    },
    {
        idProduit: 3,
        typeProduit:"Ballon",
        nom: "test 3",
        prix: "245.89 ",
        vendeur:'Amazon',
        image:img,
    },
    {
        idProduit: 4,
        typeProduit:"Ballon",
        nom: "test 4",
        prix: "155.89 ",
        vendeur:'Amazon',
        image:img,
    }
]

/* Représente la quantité  */
let [count, setCount] = useState(0);

function incrementCount() {
  count = count + 1;
  setCount(count);
}
function decrementCount() {
  count = count - 1;
  setCount(count);
}
/* Représente la quantité  */

let [total, setTotal] = useState(0);

function calculPanier() {
    let total = Produits.reduce((accumulator, produit) => { /* Calcul le total et récupère prix du tableau Produits sous forme de int */
      return accumulator + parseFloat(produit.prix.replace(/[^\d.-]/g, ''));
    }, 0);
    total = total * count;
    setTotal(total)
}

  return(
    <div className="panier">   
    <Button onClick={calculPanier}>5</Button> bouton temporaire qui sert a actualiser le panier
      {Produits.map((produit)=> (

        <div className='produitPanier'>
        <div className='img' style={{backgroundImage: `url${produit.image}`}}>
          <img src={produit.image}></img>
        </div>
          <div className='panierNomProduit'>
          <h1>{produit.nom}</h1>
          <p>{produit.vendeur}</p>

          <br/>
          <br/>
          
          <div className="quantité">
            <button onClick={decrementCount}>-</button>
            <div>{count}</div>
            <button onClick={incrementCount}>+</button>
          </div>
          
          <div className='infoAchat'>
            <h4>Prix: <b>{produit.prix}</b></h4> <Button variant="danger">Supprimer</Button>
          </div>
        </div>
      </div>
      ))}
      
      <div className='achat'>
        <h1>Total:</h1>
        {Produits.map((produit)=> (
          
        <>  {/* résoud l'erreur:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? */}
          <p> <h5> {produit.nom}:  {produit.prix}€</h5></p>
          <hr/>
        </>
          ))}

        <hr/>
        <div>
          <h3 className='prix-total'>Prix Total:{total}€
          </h3>
        </div>
        <Button variant="success">Acheter</Button>
      </div> 

    </div>
    )   
  }
  
export default Panier;