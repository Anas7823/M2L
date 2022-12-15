import '../style/Banner.css';
import * as React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Banner(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

	return <div className='banner'>
        <div className='ProduitNav'>
            <Link to='/'>
                <h1 className='elementNav'>M2L</h1>
            </Link>
            <Link to='/Produit'>
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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Adresse e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="addresse@mail.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mot de passe:</Form.Label>
              <Form.Control type='password' placeholder='mot-de-passe'/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <Link to='/Inscription'>
            Inscription
          </Link>
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Connexion
          </Button>
        </Modal.Footer>
      </Modal>    
        </div>
    </div> 
}

export default Banner;