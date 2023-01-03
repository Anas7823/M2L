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
          <div className='achat'>
            <h3>Prix: 33€</h3> <Button variant="dark">Acheter</Button>
          </div>
        </div>
      </div>
    </div>
    )
  }

  export default Panier;