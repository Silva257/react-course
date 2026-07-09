import { Checkout } from "./pages/CheckoutPage";
//import  CheckoutTwo  from "./pages/CheckoutTwo";
import "./App.css";
import { HomePage } from "./pages/Homepage";
import { Routes, Route } from "react-router";
import { Orders } from "./pages/Orders";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/cart-items").then((response) => {
  //     setCart(response.data);
  //   });
  // }, []);

  useEffect(() => {
    const getCartData = async ()=> {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    }
    getCartData()
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        {/* <Route path="/checkout2" element={<CheckoutTwo cart={cart} />} /> */}
        <Route path="/orders" element={<Orders cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
