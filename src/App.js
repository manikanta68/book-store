import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import './App.css';

export const CartContext = createContext(null)

function App() {
  const [cartArray, setCartArray] = useState([])
  return (
    <Router>
      <CartContext.Provider value={{cartArray,setCartArray}}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </CartContext.Provider>
    </Router>
  )
}

export default App;
