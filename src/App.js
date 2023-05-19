import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Product from "./Components/Product/Product";
import { ProductsContext } from "./Components/Shared/ProductsContext";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const api = "https://fakestoreapi.com/products";
  const apiLimited = `https://fakestoreapi.com/products?limit=`;
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    axios.get(api).then((res) => {
      if (res.status === 200) {
        setAllProducts(res.data);
      }
    });  
  })

  return (
    <>
      <ProductsContext.Provider value={{ api, allProducts, apiLimited, cartProducts, setCartProducts }}>
        <Router>
          <Header />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-us" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
