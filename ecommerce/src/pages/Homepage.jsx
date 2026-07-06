import { Header } from "./Header";
import "./HomePage.css";
import { Products } from "./products";
// import { useEffect } from "react";
// import axios from "axios"

export function HomePage() {

  /* fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    }) 
    .then((data) => {
      console.log(data);
    });*/

  /* useEffect(()=>{
    axios.get("http://localhost:3000/api/products").then((response) => {
      console.log(response.data);
    });
  }, []) */
   
 
  return (
    <>
      <title>Homepage</title>

      <Header />

      <div className="home-page">
        <div className="products-grid">
         
          <Products />

        </div>
      </div>
    </>
  );
}
