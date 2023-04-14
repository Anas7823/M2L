import '../style/LeProduit.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import sport from '../assets/ballon-de-basket.jpg'

function LeProduit(){
return(<div className="LeProduit">
    <div className='produitContenue'>
        <div className='produitImage'>
            <div className='imagePrincipal'>
                <img className="" src={sport}/>
            </div>
            <div className='sous-img'>
                <img className='petiteImg' src={sport} alt=''/>
                <img className='petiteImg' src={sport} alt=''/>
                <img className='petiteImg' src={sport} alt=''/>
            </div>
        </div>
        <div className='produitInfo'>
            <h1>Titre</h1>
            <hr/>
            <h3>Prix: ####€ </h3>
            <br/>
            <br/>
            <br/>
            <hr/>
            <hr/>
            <h3 className='etatStock'>Etat Stock</h3>
            <Button variant="success" className='btnAchat'><b>Ajouter au panier </b></Button>
        </div>
    </div>
</div>
)}

export default LeProduit;
