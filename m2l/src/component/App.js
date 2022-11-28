import Banner from './Banner';
import Footer from './Footer';
import Accueil from './Accueil';
import Produit from './Produit';
import PageProduit from './PageProduit';
import { useState } from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return(
    
    <div>
      <Banner/>

      <Routes>
        <Route path="/"element={<Accueil/>}>
        </Route>

        <Route path="/Produit" element={<Produit/>}>
        </Route>

        <Route path='/Produit/:idProduit' element={<PageProduit/>}>
        </Route>

        <Route path='/Panier'>
        </Route>
        
        <Route path='/Mon-compte'>
        </Route>

        <Route path='/Contact'>
        </Route>

        <Route path="Mentions-legales">
        </Route>

      </Routes>
      
      <Footer/>
    </div>
  )

}

export default App;
