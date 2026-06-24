import { Checkout } from './pages/CheckoutPage';
import  CheckoutTwo  from "./pages/CheckoutTwo";
import './App.css'
import { HomePage } from './pages/Homepage'
import {Routes, Route} from 'react-router'
import { Orders } from './pages/Orders';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout2" element={<CheckoutTwo />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App
