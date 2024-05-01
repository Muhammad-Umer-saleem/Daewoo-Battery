import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
import "./App.css"
import Navbar from "./component/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import BatterySelector from "./pages/batterySelector/BatterySelector";
import ContactUs from "./pages/contactUs/ContactUs";
import DealersNetwork from "./pages/dealersnetwork/DealersNetwork";
import Footer from "./component/Footer"
function App() {
  return (

    <Router>

    <Navbar /> 
            
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/battery-selector" element={<BatterySelector />} /> 
        <Route path="/contact-us" element={<ContactUs />} />  
        <Route path="/dealers-network" element={<DealersNetwork />} />  
        {/* temporary route */}
        {/* <Route path="/about" element={<About />} />   */}

      </Routes>
      <Footer /> 
      
    </Router>

  );
}

export default App;
