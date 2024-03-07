// Environnement React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom'

// styles
import index from '../src/Styles/index.scss';


// composants React
import App from './App';
import Home from '../src/ComponentsReact/Home'
import Error from "../src/ComponentsReact/Error/index"
import Header from './ComponentsReact/Header';
import Apropos from './ComponentsReact/PageaPropos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Header/>
    {/* <App /> */}
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Apropos" element={<Apropos />} />
  <Route path="*" element={<Error />} />
  </Routes>
 
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

