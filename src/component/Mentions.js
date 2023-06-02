import '../style/Mentions.css';

function Mentions(props){
    let theme= props.mode
    return <div className={`mentions ${theme}`}> 
            <h1>Mentions légales</h1>
            <br></br>
            <p>Le site Internet M2L est édité par la société M2L SARL, dont le numéro SIRET est le : 000 000 000 00000.</p>
            <h1>Autres informations</h1>
            <h2>Propriété intellectuelle</h2>
            <p>
                L’ensemble des éléments composant le site M2L tel que les textes, images, photographies, dessins, logos, marques, bases de données, vidéos, logiciels etc, <br></br>
                sont la propriété exclusive de M2L SARL ou du ou des tiers à qui ils appartiennent. <br></br>
                L’utilisateur s’interdit d’y porter une atteinte quelconque. <br></br>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de M2L SARL. <br></br>
                Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. <br></br>
                Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. <br></br>
                En outre, les propriétaires des contenus copiés pourraient intenter une action en justice à votre encontre. <br></br>
            </p>
            <h2>Hyperliens</h2><br></br>
            <p>Les utilisateurs et les visiteurs peuvent mettre un hyperlien sans autorisation préalable, en direction de la page d’accueil du site internet M2L.</p>
            <h2>Informatiques et libertés</h2> <br></br>
            <p>
                Les données recueillies sur le site sont destinées à l’usage de M2L SARL à des fins de gestion administrative et ne font l’objet d’aucune communication à des tiers. <br></br>
                Conformément à la loi informatique et libertés, l’utilisateur dispose d’un droit d’accès, de modification ou de suppression des données le concernant sur simple demande à l’adresse suivante: contact@M2L.fr. <br></br>
                Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel) relative à l'informatique, aux fichiers et aux libertés, 
                ce site a fait l'objet d'une déclaration sous le numéro 2036010 auprès de la Commission nationale de l'informatique et des libertés (www.cnil.fr). <br></br>
            </p>
            <h2>Cookies</h2> <br></br>
            <p>
                Chez M2L nous n'utilisons pas de cookies destinés à récolter des statistiques de vos visites ou de connaitre vos préférences vestimentaires... Nous préférons les manger ! <br></br>
                C'est pourquoi nous ne vous envoyons pas de cookie lors de votre navigation sur notre site. <br></br>
                Hop, nous retournons à nos fourneaux :) <br></br>
            </p>

            <h2>
                Responsabilité
            </h2><br></br>
            <p>
                Les informations contenues sur ce site sont aussi précises que possible, et le site est mis à jour à différentes périodes de l’année, 
                mais peut toutefois contenir des inexactitudes ou des omissions. <br></br>
                M2L SARL ne saurait garantir l’exactitude, la complétude et l’actualité des informations diffusées sur son site. <br></br>
                Les informations fournies le sont à titre indicatif. <br></br>
                L’utilisateur reconnaît utiliser les informations sur le site sous sa responsabilité exclusive. <br></br>
            </p>
            <h2>Loi applicable</h2><br></br>
            <p> Le présent site est soumis à la loi française.</p>
            <h6>© 2023 M2L</h6><br></br>


        </div>
}

export default Mentions;