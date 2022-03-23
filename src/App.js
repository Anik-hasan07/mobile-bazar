import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from"./components/Home";
import './assets/style.css';





import './App.css';
import ContactUs from "./components/ContactUs";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import ProductSingle from "./components/Products/ProductSingle";

function App() {
  return (
    <div className="App">
    
<BrowserRouter>
<Header/>
  <Routes>
    <Route path="/" element={<Product/>}/>
      
    <Route path="/home" element={<Home/>} />
    <Route path="/contact-us" element={<ContactUs/>} />
    <Route path="/products" element={<Product/>} />
    <Route path="/products/:id" element={<ProductSingle/>} />
      
  </Routes>
</BrowserRouter>
  
  </div>

  );
}

export default App;
