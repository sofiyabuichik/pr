import './App.css';
import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom/index';
import Home from './Pages/Home';
import Banks from './Pages/Banks';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/banks" element={<Banks/>}/>
            {/*<Route exact path="/chashback" element={<Chashbek/>}/>*/}
            {/*<Route exact path="/rassrochka" element={<Rassrochka/>}/>*/}
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
