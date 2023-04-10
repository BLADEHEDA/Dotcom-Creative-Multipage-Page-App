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
import BlogDetails from './Components/Blog/BlogDetails';
// import {BrowserRouter,Route} from  "react-router-dom";
import { BrowserRouter,  Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
     
      <Routes>   
     
      {/* <NavBar/> */}
      <Route path='/' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Services' element={<Service/>} />
      <Route path='Price' element={<Price/> } />
      <Route path='Contact' element={<Contact/> } />
      <Route path='Blog' element={<BlogGrid/>} />
      <Route path='Blog1' element={<BlogDetails/>} />
      {/* <Route path='About' element={<About/>} /> */}
      
      {/* <Footer/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
