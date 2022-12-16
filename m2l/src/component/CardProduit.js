import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../style/CardProduit.css';

import image from "../assets/ballon-de-basket.jpg"


function CardProduit({produit}){
    return(
        <div className="CardProduit">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{produit.nom}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="btn-produit"></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardProduit;