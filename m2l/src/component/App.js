import Banner from './Banner';
import Footer from './Footer';
import Accueil from './Accueil';
import Sports from './Sports';
import PageProduit from './PageProduit';
import Contact from "./Contact"
import Panier from './Panier'
import Inscription from './Inscription';
import AdminUser from './AdminUser'
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

        <Route path='/Administration' element={<AdminUser/>}>
        </Route>
        
        <Route path="/"element={<Accueil/>}>
        </Route>

        <Route path="/Sports" element={<Sports/>}>
        </Route>

        <Route path='/Produit/:idProduit' element={<PageProduit/>}>
        </Route>

        <Route path='/Panier' element={<Panier/>}>
        </Route>
        
        <Route path='/Mon-compte'>
        </Route>
        
        <Route path='/Inscription' element={<Inscription/>}>
        </Route>

        <Route path='/Contact' element={<Contact/>}>
        </Route>

        <Route path="Mentions-legales">
        </Route>

      </Routes>
      
      <Footer/>
    </div>
  )

}

export default App;
