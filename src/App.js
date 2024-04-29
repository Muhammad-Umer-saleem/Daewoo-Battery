import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css"
import Home from './pages/Home';
import Products from './pages/Products';
import BatterySelector from './pages/BatterySelector';
import ContactUs from './pages/ContactUs';
import DealersNetwork from './pages/DealersNetwork';
import Footer from './component/Footer';
import About from "./pages/about/About";

function App() {
  return (

    <Router>

    <Navbar /> 
            
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/battery-selector" element={<BatterySelector />} /> 
        <Route path="/contact-us" element={<ContactUs />} />  
        <Route path="/dealers-network" element={<DealersNetwork />} />  
        {/* temporary route */}
        <Route path="/about" element={<About />} />  

      </Routes>
      <Footer /> 
      
    </Router>

  );
}

export default App;
