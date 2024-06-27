import { useContext } from "react";
import { CartContext } from "../../App";
import { MdDelete } from "react-icons/md";
import "./index.css"


const CartItem = (props) => {
    console.log(props)
    const {cartArray,setCartArray} = useContext(CartContext)
    const {itemDetails} = props 
    const {image,title,price,isbn13} = itemDetails
    const onClickDelete = () => {
         const updatedArray = cartArray.filter((item) =>  item.isbn13 !== isbn13)
         setCartArray(updatedArray)
    }
      return (
        <li className="cart-list-item">
            <figure className="figure-container">
                <img className="cart-list-item-image" src={image} alt={title}/>
                <figcaption>{title}</figcaption>
            </figure>
            <div className="delete-container">
                <p>{price}</p>
                <button onClick={onClickDelete} className="cart-item-delete-button">Remove</button>
                <MdDelete  className="delete-icon"/>

            </div>
        
        </li>
      )
}

export default CartItem