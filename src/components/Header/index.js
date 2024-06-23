import { Link } from "react-router-dom"
import { FaBook, FaShoppingBag } from "react-icons/fa";


import "./index.css"

const Header = () => {
    return (<header className="header-bg">
        <nav className="nav-bar">
            <Link to="/" className="nav-link">
                <div className="logo-contianer">
                    <div className="logo">B</div>
                    <h1 className="book-store-name">BookStore</h1>
                </div>
            </Link>

            <ul className="nav-items-container">
                <Link to="/books" className="nav-link">
                    <li className="icon-container">
                        <FaBook className="icon" />
                        <span className="icon-name">Book List</span>
                    </li>
                </Link>

                <Link to="/cart" className="nav-link">
                    <li className="icon-container">
                        <FaShoppingBag className="icon" />
                        <span className="icon-name">Cart</span>
                    </li>
                </Link>


            </ul>


        </nav>
    </header>)
}

export default Header