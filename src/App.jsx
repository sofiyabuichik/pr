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
  const banks = [
    {
      name: 'БеларусБанк',
      description: 'Крупнейшій банк страны',
      image: '/img/belarusbank_logo.jpg',
      id: 1,
    },
    {
      name: 'Альфа Банк',
      description: 'Chash',
      image: '/img/alfa.png',
      id: 2,
    },
    {
      name: 'Банк 3',
      description: 'lorem12 ',
      image: '/img/belarusbank_logo.jpg',
      id: 3,
    },
    {
      name: 'Альфа Банк',
      description: 'Chaasdasdsh',
      image: '/img/belarusbank_logo.jpg',
      id: 4,
    },
    {
      name: 'БеларусБанк',
      description: 'Chas sdf sdf sdfh',
      image: '/img/belarusbank_logo.jpg',
      id: 5,
    }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home banksArray={banks}/>}/>
            <Route exact path="/banks" element={<Banks banksArray={banks}/>}/>
            <Route exact path="/chashback" element={<Chashbek/>}/>
            <Route exact path="/rassrochka" element={<Rassrochka/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
