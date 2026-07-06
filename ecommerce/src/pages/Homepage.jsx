import { Header } from "./Header";
import "./HomePage.css";
import { Products } from "./products";
 import { useEffect, useState} from "react";
 import axios from "axios"

export function HomePage() {

  const [cart, setCart] = useState([]);

  /* fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    }) 
    .then((data) => {
      console.log(data);
    });*/

   useEffect(()=>{
    axios.get("http://localhost:3000/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }) 
   
 
  return (
    <>
      <title>Homepage</title>

      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
         
          <Products />

        </div>
      </div>
    </>
  );
}
