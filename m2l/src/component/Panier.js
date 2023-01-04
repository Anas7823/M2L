import '../style/Panier.css';
import Button from 'react-bootstrap/Button';
import img from '../assets/foot/F100_RESIST_1.avif'
import 'bootstrap/dist/css/bootstrap.min.css';

function Panier(){
  return( 
    <div className="panier">    
      <div className='produitPanier'>
        <div className='img' style={{backgroundImage: `url${img}`}}>
          <img src={img}></img>
        </div>
        <div className='produit'>
          <h1>Nom produit</h1>
          <p>Nom du vendeur</p>

          <br/>
          <br/>
          <br/>
          <div className='infoAchat'>
            <h3>Prix: 33€</h3> <Button variant="danger">Supprimer</Button>
          </div>
        </div>
      </div>
      
      <div className='achat'>
        <h1>Total:</h1>
        <p> <h5> NomProduit:  33€</h5></p>

        <hr/>
        <hr/>
        <div>
          <h3>Prix Total: 33€</h3>
        </div>
        <Button variant="success">Acheter</Button>
      </div> 

    </div>
    )
  }

  export default Panier;