import '../style/Footer.css';
import * as React from "react";
import { Link } from "react-router-dom";

function Footer(){
	return <footer className='footer'>
            <h4>
                Compléments d'informations :
            </h4>
            <ul className="liste">
                <li> numéro : </li>
                <li> site officiel: IPSSI</li>
                <Link to='/MentionsLegal'>
                    <li> all right reserved</li>
                </Link>
            </ul>
    </footer>
}

export default Footer;