import {Link} from "react-router-dom"
import Header from "../Header"

import "./index.css"

const Home = () =>  <div>
    <Header />
    <div className="home-sub-container">    
        <h1 className="home-heading"> Book Store</h1>
        <p className="home-description">Bookstore was founded in 1992 with a simple yet passionate mission. To positively impact the world throught the power of reading and learing. Right form our first store in Mumbai to the 92 stores across 32 cities today. we have continued to serve and nurture our comminity of readers for over 3 decedes.</p>
        <p className="home-description">As India's leading bookstore retailer. we champain books and nourish a love for the  ritten word through a rich, handpicked collection covering numerous topics. Our stores are thoughtfully designed with interiors that inspire and relax, allowing quiet spaces to help you discover great books.</p>
        <Link to="/books">
        <button className="explore-button"> Explore Books</button>
        </Link>
    </div>

</div>

export default Home