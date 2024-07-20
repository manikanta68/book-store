import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { ThreeDots } from 'react-loader-spinner'
import { CartContext } from "../../App.js"
import Header from "../Header/index.js"
import "./index.css"
import { LiaOilCanSolid } from "react-icons/lia"

const apiStatusConstants = {
    initial: "INITIAL",
    inprogress: "IN_PROGRESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

const BookDetails = () => {
    const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        data: null,
        errorMsg: null
    })
    const [buttonClick, setButtonClick] = useState(false)
    const { cartArray, setCartArray } = useContext(CartContext)
    const params = useParams()
    const { id } = params

    useEffect(() => {
        setApiResponse((prevState) => ({ ...prevState, status: apiStatusConstants.inprogress }))
        const url = `https://api.itbook.store/1.0/books/${id}`;
        const request = async () => {
            const response = await fetch(url)
            if (response.ok) {
                const bookData = await response.json()
                const updateBookData = {...bookData,price: Math.ceil(bookData.price.slice(1,))}
                setApiResponse((prevState) => ({ ...prevState, status: apiStatusConstants.success, data: updateBookData }))
            } else {
                setApiResponse((prevState) => ({ ...prevState, status: apiStatusConstants.failure }))
            }
        }

        request()
    }, [buttonClick])

    const onClickAdd = () => {
        const { data } = apiResponse
        const isItemFind = cartArray.find(item => item.isbn13 === data.isbn13)
        if (isItemFind === undefined) {
            setCartArray((preavState) => [...preavState, data])
        }

    }

    const onClickSearch = () => {
        setButtonClick((prevState) => !prevState)
    }

    const renderLoadingView = () => {
        return (<div className="loading-container">
            <ThreeDots color="#0b69ff" height={70} width={80} />
        </div>)
    }

    const renderSuccessView = () => {
        const { data } = apiResponse
        return <div className="details-container">
            <figure className="figure-details">
                <img src={data.image} alt={data.title} className="figure-image" />
                <figcaption className="figure-captions">
                    <h1 className="book-title">{data.title}</h1>
                    <p className="sub-headings">Author: <span className="span">{data.authors}</span></p>
                    <p className="sub-headings">Pages: <span className="span"> {data.pages} </span></p>
                    <p className="sub-headings">rating: <span className="span">{data.rating} </span></p>
                    <p className="sub-headings" >Publish Year: <span className="span">{data.year} </span></p>
                    <p className="sub-headings">Publisher: <span className="span">{data.publisher} </span></p>
                    <p className="sub-headings">Price: <span className="span"> ${data.price}.00 </span></p>
                    <button onClick={onClickAdd} className="add-button">Added</button>
                </figcaption>
            </figure>
            <div className="product-description">
                <hr />
                <h2>Product Description</h2>
                <p>{data.desc}</p>
            </div>
        </div>


    }

    const renderFailureView = () => {
        return <div className="failureViewContainer">
            <img
                src="https://res.cloudinary.com/djszohdjt/image/upload/v1706552284/alert-triangle_alvbje.png"
                alt="failure view"
                className="failure-image"
            />
            <p className="failure-text">Something went wrong. Please try again</p>
            <button className="retryButton" onClick={onClickSearch} type="button">
                Try Again
            </button>
        </div>
    }

    const renderBooksFromResponse = () => {
        const { status } = apiResponse
        switch (status) {
            case apiStatusConstants.inprogress:
                return renderLoadingView()
            case apiStatusConstants.success:
                return renderSuccessView()
            case apiStatusConstants.failure:
                return renderFailureView()
            default:
                break;
        }
    }

    return (<div>
        <Header />
        <div>

            <div>
                {renderBooksFromResponse()}
            </div>

        </div>

    </div>)
}

export default BookDetails