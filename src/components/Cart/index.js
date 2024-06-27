import { useContext } from "react"
import { Link } from "react-router-dom"
import Header from "../Header/index.js"
import CartItem from "../CartItem/index.js"
import { CartContext } from "../../App.js"
import CartSummary from "../CartSummary/index.js"
import "./index.css"

const Cart = () => {
    const { cartArray } = useContext(CartContext)
    return <div>
        <Header />
        <div className="cart-container">
            <h2>My Bag</h2>
            <div>
                {cartArray.length === 0 ? <div className="empty-cart">
                    <p>You Have No Items In Your Cart</p>
                    <Link to="/books">
                        <button className="continue-shopping-button">Continue Shopping</button>
                    </Link>
                </div> : 
                 <div className="cart-items-details-container">
                    <ul className="cart-ul-list">
                        {cartArray.map(((eachCartItem) => <CartItem key={eachCartItem.isbn13} itemDetails={eachCartItem} />))}
                    </ul>
                    <CartSummary>{cartArray}</CartSummary> 
                  </div>
                }

            </div>
        </div>
    </div>
}

export default Cart