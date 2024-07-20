import { useEffect, useState } from "react"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Header from "../Header/index.js"
import BookItem from "../BookItem/index.js"
import { ThreeDots } from 'react-loader-spinner'
import "./index.css"


const apiStatusConstants = {
    initial: "INITIAL",
    inprogress: "IN_PROGRESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

const BookList = () => {
    const [userInput, setUserInput] = useState("new")
    const [buttonClick, setButtonClick] = useState(false)
    const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        data: null,
        errorMsg: null
    })
    const [sliderValues,setSliderValues] = useState([0,20])
    useEffect(() => {
        setApiResponse((prevState) => ({ ...prevState, status: apiStatusConstants.inprogress }))
        const url = `https://api.itbook.store/1.0/search/${userInput}`;
        const request = async () => {
            const response = await fetch(url)
            if (response.ok) {
                const booksData = await response.json()
                const updateBooks = booksData.books.map((eachBook) => ({
                    ...eachBook,
                    price: Math.ceil(eachBook.price.slice(1,))
                }))
                setApiResponse((prevState) => ({ ...prevState, status: apiStatusConstants.success, data: updateBooks }))
            } else {
                setApiResponse((prevState) => ({ ...prevState, status: apiStatusConstants.failure }))
            }
            setUserInput("")
        }

        request()
    }, [buttonClick])

    const onChangeUserInput = (event) => {
        setUserInput(event.target.value)
        setSliderValues([2,50])
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
        const filteredBooks = data.filter((each) => sliderValues[0] <= each.price && sliderValues[1] >= each.price)
        return <div className="books-sucess-view-top-container">
         <div className="books-container-sucess-view">
            <div className="price-container">
                <p className="price-range-name">Price: $<span className="rupe-icon">{sliderValues[0]}</span> -  $<span className="rupe-icon">{sliderValues[1]}</span></p>
                <Slider range min={0} max={150} defaultValue={sliderValues} step={2} onChange={(value) => setSliderValues(value)} className="range-slider" />
            
            </div>
            <div className="books-list-sucess-container">
                <h2 className="books-heading">Books</h2>
                <ul className="ul-books-list">{filteredBooks.map((eachBook) => <BookItem key={eachBook.isbn13} bookDetails={eachBook} />)}</ul>
            </div>
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

    return (<div className="books-list-bg-container">
        <Header />
        <div>
            <div className="search-bar-container">
                <div className="search-container">
                    <input placeholder="Search by title" value={userInput} type="text" onChange={onChangeUserInput} className="input" />
                    <button onClick={onClickSearch} className="search-button">Search</button>
                </div>
            </div>
            <div>
                {renderBooksFromResponse()}
            </div>

        </div>

    </div>)
}

export default BookList