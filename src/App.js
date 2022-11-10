import './App.css';
import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from '../node_modules/react-router-dom/index';

function App() {
  return (
    <div style={{display: 'flex', height: 'max-content'  ,width: "90vw", flexDirection: "column", alignItems: "center"}}>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  );
}

export default App;
