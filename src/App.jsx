import './App.css';
import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom/index';
import PageHome from './Pages/PageHome';
import PageBanks from './Pages/PageBanks';
import PageCashback from "./Pages/PageCashback";
import PageInstantment from "./Pages/PageInstantment";
import CardForm from "./Components/CardForm/CardForm";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<PageHome/>}/>
            <Route exact path="/banks" element={<PageBanks/>}/>
            <Route exact path="/cashback" element={<PageCashback/>}/>
            <Route exact path="/cashback/:id" element={<CardForm/>}/>
            <Route exact path="/installment" element={<PageInstantment/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
