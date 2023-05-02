import '../style/Contact.css';
import telephone from "../assets/telephone.gif"
import mail from "../assets/mail.gif"


function Contact(){
    return<div className= "Contact" >
        <div className='Titre-contact'>
            <h1>Vous souhaitez nous contacter ?</h1>
        </div>
        <div className='Element-contact'>
            <span className='Element-contact1'> <img alt='' src= {telephone} height={'50px'}></img><h3>01.32.45.76.90</h3></span>
            <span className='Element-contact2'> <img alt='' src={mail} height={'50px'}></img><h3>M2L-association@gmail.com</h3></span>
        </div>
        <div className='iframe'>
            <iframe className="myFrame" title="myFrame"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95428125684!2d2.276823949135167!3d48.858833535430044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1673010670944!5m2!1sfr!2sfr"></iframe>
        </div>
    </div>
}

export default Contact;