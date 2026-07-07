import { Header } from "./Header";
import "./HomePage.css";
import { Products } from "./products";


export function HomePage({cart}) {

  /* fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    }) 
    .then((data) => {
      console.log(data);
    });*/
   
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
