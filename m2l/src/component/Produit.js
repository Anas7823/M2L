import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import '../style/Produit.css';

function Produit(){ 

return (<div className="produit">

    <div className="titreProduit">
        <h1>Articles trier par sport :</h1>
    </div>

<Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://us-metro.org/wp-content/uploads/2022/06/banniere-basketball-usmt-1500x704-1.jpg" alt="First slide"/>
        <Carousel.Caption>
          <h3>Basketball</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="http://www.footballtipz.com/wp-content/uploads/2015/12/Football-Tips-Wallpaper.jpg" alt="Second slide"/>

        <Carousel.Caption>
          <h3>Football</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://www.bestgame-squash.com/produits/machtt2-p.jpg" alt="Third slide"/>

        <Carousel.Caption>
          <h3>Squaqh</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* Rajouter un card grid bootstrap pour afficher les meilleurs articles en bas */}
</div>
);
}

export default Produit
