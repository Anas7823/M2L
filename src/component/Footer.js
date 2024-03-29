import '../style/Footer.css';
import * as React from "react";
import { Link } from "react-router-dom";

function Footer(){
	return <footer className='footer'>
            <h4>
                Compléments d'informations :
            </h4>
            <ul className="liste">
                <li> numéro : 01 32 45 76 90</li>
                <li> site officiel: <Link to="/">M2L</Link></li>
                <Link to='/MentionsLegales'>
                    <li> all right reserved</li>
                </Link>
            </ul>
    </footer>
}

export default Footer;