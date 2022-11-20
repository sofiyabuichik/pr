import './App.css';
import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom/index';
import Home from './Pages/Home';
import Chashbek from './Pages/Chashbek';
import Rassrochka from './Pages/Rassrochka';
import Banks from './Pages/Banks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/banks" element={<Banks/>}/>
            <Route exact path="/chashbek" element={<Chashbek/>}/>
            <Route exact path="/rassrochka" element={<Rassrochka/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
