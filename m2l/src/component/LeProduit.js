import '../style/LeProduit.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import sport from '../assets/ballon-de-basket.jpg'

function LeProduit(){
return(<div className="LeProduit">   
    <div className='produitContenue'>
        <div className='produitImage'>
            <div className='imagePrincipal'>
                <img className="" src={sport} style={{}}/> 
            </div>
            <div className='imageSecondaire'>
                a b c
            </div>
        </div>          
        <div></div>
    </div>
</div>
)}
export default LeProduit;