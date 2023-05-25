import '../style/ResultRecherche.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ResultRecherche = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/rechercher?search=${searchQuery}`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className='ResultRecherche'>
      {searchQuery.length > 0 ? (
        <div className={searchQuery.length > 0 ? 'Resultaffiche' : ' ' }>
            <ul>
              {products.map((produit) => (
              <Link to={'/produit/' + produit.IdProduit}>
                <li key={produit.IdProduit}>{produit.NomProduit}</li>
              </Link>
              ))}
            </ul>
          </div>
      ) : 
      (
        <></>
      )}
    </div>
    
  );
};

export default ResultRecherche;
