import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './Components/Shared/NavBar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import Price from './Components/Pricing/Price';
import Contact from './Components/Contact/Contact';
import BlogGrid from './Components/Blog/BlogGrid';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Service/> */}
      {/* <Price/> */}
      {/* <Contact/> */}
      <BlogGrid/>
      <Footer/>
    </div>
  );
}

export default App;
