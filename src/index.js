// Environnement React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// composants React
import Header from "./ComponentsReact/Header";
import Footer from "./ComponentsReact/Footer";

// Pages
import Home from "./Pages/Home";
import Apropos from "./Pages/PageaPropos";
import AnnonceLogement from "./Pages/AnnonceLogement";
import Error from "./Pages/Error/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/AnnonceLogement/Apropos" element={<Apropos />} />
        <Route path="/AnnonceLogement/:id" element={<AnnonceLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
