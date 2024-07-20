import { Link } from "react-router-dom"
import "./index.css"

const BookItem = (props) =>  {
    
    const {bookDetails} = props
    return <li>
            <Link to= {`/books/${bookDetails.isbn13}`} className="nav-link">
            <figure className="fig">
                  <img src={bookDetails.image} alt={bookDetails.title} className="figure"/>
                  <figcaption className="figcaption">{bookDetails.title}</figcaption>
                  <p className="description">{bookDetails.subtitle}</p>
                  <p className="price">${bookDetails.price}.00</p>
             </figure>
             </Link>
           </li>
}

export default BookItem