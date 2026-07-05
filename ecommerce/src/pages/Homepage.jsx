import { Header } from "./Header";
// import './App.css'
import "./HomePage.css";
//import { products } from "../products"
import { Products } from "./products";

export function HomePage() {

  fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

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
