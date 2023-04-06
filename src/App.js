import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './Components/Shared/NavBar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import About from './Components/About/About';
import Service from './Components/Services/Service';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      {/* <About/> */}
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
