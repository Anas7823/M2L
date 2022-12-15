//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Contact.css';

function Contact(){
	return <contact className='contact'>


        <div class="container">
        <div class="row header">
            <h1>CONTACTEZ NOUS ! &nbsp;</h1>
            <h3>Vous avez une question à propos de l'association, ou vous souhaitez un renseignement. Nous tâcherons de vous repondre via ce formulaire !</h3>
        </div>
        <div class="row body">
            <form action="#">
            <ul>
                <li>
                <p class="left">
                    <label for="first_name">Nom</label>
                    <input type="text" name="first_name" placeholder="John" />
                </p>
                <p class="pull-right">
                    <label for="last_name">Prénom</label>
                    <input type="text" name="last_name" placeholder="Smith" />      
                </p>
                </li>
                
                <li>
                <p>
                    <label for="email">Adresse mail <span class="req">*</span></label>
                    <input type="email" name="email" placeholder="john.smith@gmail.com" />
                </p>
                </li>        
                <li><div class="divider"></div></li>
                <li>
                <label for="comments">Commentaire :</label>
                <textarea cols="46" rows="3" name="comments"></textarea>
                </li>
                
                <li>
                <input class="btn btn-submit" type="submit" value="Submit" />
                <small>ou pressée <strong>Entrée</strong></small>
                </li>
                
            </ul>
            </form>  
        </div>
        </div>
    </contact>
}

export default Contact;