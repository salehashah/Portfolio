import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route  path = "/" element = {<Home/>}/>
    <Route  path = "/about" element = {<About/>}/>
    <Route  path = "/services" element = {<Services/>}/>
    <Route  path = "/contact" element = {<Contact/>}/>
    <Route path= "*" element = {<Navigate to = "/"/>}/>
    </Routes> 
    <Footer/>
    </div>
  );
}

export default App;
