import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

import './App.css';

function App() {
  return (
   <Router>
   <Routes>
     <Route path="/" element={<Home/>}  />
     <Route path="/books" element={<BookList/>}  />
     <Route path="/books/:id" element={<BookDetails/>}  />
     <Route path="/cart" element={<Cart/>}  />
     <Route path="/checkout" element={<Checkout/>}  />
     <Route path="*" element={<NotFound/>}  />
   </Routes>
   </Router>
  )
}

export default App;
