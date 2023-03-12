import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './Components/Shared/NavBar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
