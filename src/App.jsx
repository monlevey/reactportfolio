import './App.css';
import {
          BrowserRouter,
          Routes,
          Route,
        } from "react-router-dom"; 
import Home from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Header from './layouts/header';
import Footer from './layouts/footer';
;


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
