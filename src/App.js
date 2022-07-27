import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"
import Blog from "./Components/Blog/Blog"
import Navbar from "./Components/Navbar/Navbar"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/portfolio"  element={<Portfolio/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/blog"  element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
