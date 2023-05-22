import '../style/Banner.css';
import axios from "axios"
import * as React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import m2lLogo from '../assets/m2l-logo.jpeg';

function Banner(){
  const Connecter = async (e) => {
    e.preventDefault();
    const mail = e.target.elements.email.value;
    const mdp = e.target.elements.mdp.value;
    console.log(mail, mdp);
    let res = await axios.post(`http://localhost:8000/login`, {
      mail: mail,
      mdp: mdp
    });
    alert(`Connexion réussie !`);
  };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 barreRecherche"
          aria-label="Search"
        />
        <Button variant="outline-primary">Rechercher</Button>
      </Form>
        <Button variant="primary" className='btn-connexion' onClick={handleShow}>
          Connexion
        </Button>

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