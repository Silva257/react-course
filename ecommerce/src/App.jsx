import { Checkout } from './pages/CheckoutPage';
import  CheckoutTwo  from "./pages/CheckoutTwo";
import './App.css'
import { HomePage } from './pages/Homepage'
import {Routes, Route} from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout2" element={<CheckoutTwo />} />
      </Routes>
    </>
  );
}

export default App
