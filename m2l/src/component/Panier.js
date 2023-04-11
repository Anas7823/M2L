import '../style/Panier.css';
import React, { useState, useEffect } from "react";
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
  const [cartItems, setCartItems] = useState([]);

  // Récupération des articles dans le local storage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  // Ajout d'un article au panier
  const ajouter = (item) => {
    const exist = cartItems.find((x) => x.idProduit === item.idProduit);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.idProduit === item.idProduit ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      console.log('test qty = 1');
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
      console.log('test qty = 1');
    }
  };

  // Retrait d'un article du panier
  const retirer = (item) => {
    const exist = cartItems.find((x) => x.idProduit === item.idProduit);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.idProduit !== item.idProduit));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.idProduit === item.idProduit ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // Calcul du prix total
  const totalPrix = cartItems.reduce(
    (acc, item) => acc + parseInt(item.prix) * item.qty,
    0
  );

  // Enregistrement des articles dans le local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      {Produits.map((produit) =>(
        <button onClick={() =>ajouter(produit)}>+</button>
      ))}
      {cartItems.length === 0 ? (
        <div>Le panier est vide.</div>
      ) : (
        cartItems.map((produit) => (
          <div className='produitPanier'>
            <div className='img' style={{backgroundImage: `url${produit.image}`}}>
              <img src={produit.image}></img>
            </div>
            <div className='panierNomProduit'>
              <h1>{produit.nom}</h1>
              <p>{produit.vendeur}</p>
  
              <br/><br/>
            
              <div className="quantité">
                <button onClick={() =>retirer(produit)}>-</button>
                <div>{produit.qty}</div>
                <button onClick={() =>ajouter(produit)}>+</button>
              </div>
            
              <div className='infoAchat'>
                <h4>Prix: <b>{produit.prix}</b></h4>
              </div>
            </div>
          </div>
        ))
      )}
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
          <h3 className='prix-total'>Prix Total:{totalPrix}€
          </h3>
        </div>
        <Button variant="success">Acheter</Button>
      </div> 

    </div>
  );
};


  
export default Panier;