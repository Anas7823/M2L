import '../style/Banner.css';
import axios from "axios"
import { Link } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from 'react';
import ResultRecherche from './ResultRecherche'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import m2lLogo from '../assets/m2l-logo.jpeg';

function Banner(){    
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      getUserInfo(); // Récupérer les informations de l'utilisateur après la fermeture de la modal
    };
    const handleShow = () => setShow(true);


    // Code pour la recherche 
    
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = (event) => {
      event.preventDefault();
      // Effectuer l'action de recherche ici, si nécessaire
    };
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
    
    // Initialize with the appropriate value or leave it empty if you'll set it later
    const [userId, setUserId] = useState(localStorage.getItem('userId')); // Récupérer l'ID de l'utilisateur depuis le localStorage 
    const [user, setUser] = useState(null);

    // Fonction pour enregistrer les informations de l'utilisateur dans le localStorage
    const storeUserInfo = (userId) => {
      localStorage.setItem('userId', userId);
    };

    // Fonction pour supprimer les informations de l'utilisateur du localStorage
    const removeUserInfo = () => {
      localStorage.removeItem('userId');
    };


      // Fonction pour récupérer les informations de l'utilisateur
      const getUserInfo = async () => {
        try {
          const response = await axios.get('http://localhost:8000/utilisateur/' + userId); // Remplacez userId par l'ID de l'utilisateur connecté
          const userData = response.data[0];
          console.log("userdata:", userData);
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData)); // Enregistrer les informations de l'utilisateur dans le localStorage
        } catch (error) {
          console.error(error);
        }
      };

  useEffect(() => {
    if (userId) {
      getUserInfo();
    }
  }, [userId]);

  const Connecter = async (e) => {
    e.preventDefault();
    const mail = e.target.elements.email.value;
    const mdp = e.target.elements.mdp.value;
    console.log(mail, mdp);
  
    try {
      const response = await axios.post(`http://localhost:8000/login`, {
        mail: mail,
        mdp: mdp
      });
      const { userId } = response.data; // Assuming the user ID is included in the response data
      setUserId(userId);
      storeUserInfo(userId); // Enregistrer l'ID de l'utilisateur dans le localStorage
      console.log(userId);
      alert(`Connexion réussie !`);
    } catch (error) {
      alert('Adresse e-mail ou mot de passe incorrect.');
      console.error(error);
    }
  };

  const Deconnexion = async () => {
    try {
      await axios.post('http://localhost:8000/logout');
      removeUserInfo(); // Supprimer les informations de l'utilisateur du localStorage lors de la déconnexion
      setUserId(null);
      setUser(null);
      alert('Déconnexion réussie');
    } catch (error) {
      console.error(error);
      alert('Une erreur s\'est produite lors de la déconnexion');
    }
  };
        
    
    return <div className='banner'>
    <div className='ProduitNav'>
        <Link to='/'>
            <img title="M2L" className='elementNav m2lLogo' src={m2lLogo}></img>
        </Link>
        <Link to='/Sports'>
            <h4 className='elementNav'>Produit</h4>
        </Link>
        <Link to='/Panier'>
            <h4 className='elementNav'>Panier</h4>
        </Link>
        <Link to='/Contact'>
            <h4 className='elementNav'> Contact </h4>
        </Link>
        {user && user.CompteAdmin ? (
          <>
            <Link to={'/GestProduit'}>
              <h4 className='elementNav'>GestProduit</h4>
            </Link>
            
            <Link to={'/Administration'}>
              <h4 className='elementNav'>Administration</h4>
            </Link>
          </>
        ) : (
          <></>
        )}
        <Form className="d-flex" onSubmit={handleSearch}>
        <Form.Control style={user && user.CompteAdmin ? { width: '20rem' } : { width: '50rem' }}

          name="search"
          type="search"
          placeholder="Search"
          className="me-2 barreRecherche"
          aria-label="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button variant="outline-primary">Rechercher</Button>
      </Form> <br/>
      <ResultRecherche searchQuery={searchQuery}/>
      {user ? (
        <>
          <Link to={'/Mon-compte/' + user.IdCompte}>
            <h4  style={{marginLeft:'9vw'}} className='elementNav'>{user.NomCompte} </h4>
          </Link>
          <Button variant="danger" className='btn-deconnexion' onClick={Deconnexion}>
            Déconnexion
        </Button>
        </>
        
      ) : (
        <Button variant="primary" className='btn-connexion' onClick={handleShow}>
          Connexion
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={Connecter}>
            <Form.Group className="mb-3" controlId="mail">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="adresse@mail.com"
                autoFocus
                name="email"
              />
            </Form.Group>
            <Form.Group
              controlId="mdp"
              className="mb-3"
            >
              <Form.Label>Mot de passe:</Form.Label>
              <Form.Control
                type="password"
                placeholder="mot-de-passe"
                name="mdp"
              />
            </Form.Group>
            <Modal.Footer>

            <Button variant="secondary" onClick={handleClose}>
              <Link to='/Inscription'>
                Inscription
              </Link>
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" className='btn-connexion' type="submit">
              Connexion
            </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>    
    </div>
</div> 
}

export default Banner;