import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inspection from "./pages/Inspection";
import Inspection2 from "./pages/Inspection2";
import Inspection3 from "./pages/Inspection3";
import Inspection4 from "./pages/Inspection4";
import Inscription from "./pages/authentification/Inscription";
import Connexion from "./pages/authentification/Connexion";
import Reinitialisation from "./pages/authentification/Reinitialisation";
import Nouveau from "./pages/authentification/Nouveau";
import SpecialisteHero from "./pages/Specialiste";
import DevenirSpecialiste from "./pages/DevenirSpecialiste"; 
import ConditionsGenerales from "./pages/ConditionsGenerales";
import DemandesEnCours from "./pages/demande/DemandesEnCours"; 
import DemandesValidees from "./pages/demande/DemandesValidees";
import DemandesAnnulees from "./pages/demande/DemandesAnnulees";
import DemandesEnAttentes from "./pages/demande/DemandesEnAttentes";
import ModifierProfil from "./pages/profil/ModifierProfil";
import Securite from "./pages/profil/Securite";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/reinitialisation" element={<Reinitialisation />} />
        <Route path="/nouveau" element={<Nouveau />} />
        <Route path="/specialiste" element={<SpecialisteHero />} />
        <Route path="/devenir-specialiste" element={<DevenirSpecialiste />} />
        <Route path="/conditions-generales" element={<ConditionsGenerales />} />
         <Route path="/demandes" element={<DemandesEnCours />} />
        <Route path="/demandes-validees" element={<DemandesValidees />} />
        <Route path="/demandes-annulees" element={<DemandesAnnulees />} />
        <Route path="/demandes-en-attentes" element={<DemandesEnAttentes/>}/>
         <Route path="/modifier-profil" element={<ModifierProfil />} />
         <Route path="/securite" element={<Securite />} />
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/inspection2" element={<Inspection2 />} />
        <Route path="/inspection3" element={<Inspection3 />} />
        <Route path="/Inspection4" element={<Inspection4/>}/>

        
      </Routes>
    </Router>
  );
}

export default App;
