import '../style/Panier.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const prixPanier = document.querySelector("#prix-panier");
// const prixTva = document.querySelector("#prix-tva");
// const prixTotal = document.querySelector("#prix-total");


// const articles = document.querySelectorAll("#list-articles > li");

// // créer la fonction pour pouvoir l'utiliser quand on veut !
// const reloadDesPrix = () => {
//     prixPanier.innerText=0;
//     articles.forEach((article) => {
//         const quantity = article.querySelector(".article-quantity").innerText;
//         const price = article.querySelector(".article-price").innerText;
//         prixPanier.innerText = parseFloat(prixPanier.innerText) + parseFloat(quantity) * parseFloat(price);
//     })
//     prixTva.innerText = parseFloat(prixPanier.innerText) * 0.15;
//     prixTotal.innerText = parseFloat(prixPanier.innerText) + parseFloat(prixTva.innerText);
// }
// reloadDesPrix()

// articles.forEach((article) => {
//     const boutonDelete = article.querySelector(".delete");
//     boutonDelete.onclick = () => effacer(article);
// })

// const effacer = (article) => {
//     // Récupérer la quantité
//     let quantitee = parseInt(article.querySelector(".article-quantity").innerText)
//     // La soustraire de 1
//     quantitee--
//     // Afficher la quantite
//     article.querySelector(".article-quantity").innerText = quantitee
//     // Gérer la disparition des quantité <=0
//     if (quantitee <= 0){
//         article.remove()
//     }
//     // Mettre à jour le panier !
//     reloadDesPrix()
// }

function Panier(){
    return( 
        <div classNameName="panier">        
        <div className="col-6 col-lg-6">
          <ul className="list-group" id="list-articles">
              <li className="list-group-item">
                <div className="row">
                  <div className="col-2">
                    <img src="" width="50" height="50"/>
                  </div>
                  <div className="col-7">
                    Lego architecture <br/>
                    <strong>New York City</strong><br/>
                    Quantite: <span className="article-quantity">1</span>
                  </div>
                  <div className="col-3 text-right">
                    <span className="article-price">49.99</span> EU
                  </div>
                </div>
                <div className="text-right">
                  <button className="btn btn-outline-danger delete"><i className="fas fa-trash-alt"></i> Supprimer</button>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-2">
                    <img src="" width="50" height="50"/>
                  </div>
                  <div className="col-7">
                    Lego architecture <br/>
                    <strong>Londres</strong><br/>
                    Quantite: <span className="article-quantity">3</span>
                  </div>
                  <div className="col-3 text-right">
                    <span className="article-price">49.99</span> EU
                  </div>
                </div>
                <div className="text-right">
                  <button className="btn btn-outline-danger delete"><i className="fas fa-trash-alt"></i> Supprimer</button>
                </div>
              </li>
          </ul>
        </div>

        <div className="col-6 col-lg-6">
          <h2>Panier</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Prix du Panier</td>
                <td><span id="prix-panier">0</span> EU</td>
              </tr>
              <tr>
                <td>TVA (15%)</td>
                <td ><span id="prix-tva">0</span> EU</td>
              </tr>
              <tr>
                <th>Total</th>
                <th> <span id="prix-total">0</span> EU</th>
              </tr>
              <tr>
                <td></td>
                <td><button className="btn btn-primary">Acheter <i className="fas fa-check"></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Panier;