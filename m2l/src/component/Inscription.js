import '../style/Inscription.css'

function Inscription(){
    return <div className="Inscription">
        <h1>Création d'un compte</h1>
        <div className='connexion'>
           <div className="nomPrenom">
            <div className="Nom">
                <label>Nom:</label>
                <input id="name" type="text" class="form-control" placeholder="Nom"></input>
            </div>
            <div className="Prenom">
                <label>Prénom:</label>
                <input id="firstname" type="text" class="form-control" placeholder="Prenom"></input>
            </div>
           </div>
        </div>
    </div>

}

export default Inscription