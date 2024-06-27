import {  useContext } from "react"
import { CartContext } from "../../App"
import { Link } from "react-router-dom"
import "./index.css"

const CartSummary = (props) => {
    const {cartArray} = useContext(CartContext)
    const pricesesArray = cartArray.map((each) => Number((each.price).slice(1,)))
    console.log(props.children)
    const totalAmount = pricesesArray.reduce((previous,next) => previous + next,0 )
    
    return (
        <div className="summary-card">
            <h2 className={props.children === undefined ? "summary-heading" : "summary-heading-nomal"}>Order Summary</h2>
            {props.children === undefined && <ul className="cart-summary-ul-list">
                {cartArray.map((eachProduct) => <li key={eachProduct.isbn13} className="order-summary-list-item">
            <figure className="order-summary-figure">
                <img className="order-summary-figure-image" src={eachProduct.image} alt={eachProduct.title}/>
                <figcaption className="order-summary-figure-caption">{eachProduct.title}</figcaption>
            </figure>
            <p>{eachProduct.price}</p>
            
        
        </li>)}</ul>}
            <hr/>
            <div className="summary-amount">
                {props.children !== undefined ? <p> Amount Payble: <br/>
                (inclusive of all taxes) </p> : <p>Total</p> }
                <p className="amount">{totalAmount.toFixed(2)}</p>
            </div>
            {props.children !== undefined && <Link to="/checkout">
            <button className="procced-button">Procced</button>
            </Link>}
            
        </div>
    )
}

export default CartSummary