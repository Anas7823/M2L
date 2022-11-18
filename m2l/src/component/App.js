import Banner from './Banner';
import Footer from './Footer';
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
        <Route path="/">
        </Route>

        <Route path="/Produit">
        </Route>

        <Route path='/Produit/:idProduit'>
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
