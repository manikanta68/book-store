import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import Header from "../Header"
import { CartContext } from "../../App.js"
import CartSummary from "../CartSummary/index.js"
import "./index.css"

const Checkout = () => {
  const {cartArray} = useContext(CartContext)
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [address, setAddress] = useState("")
  const [addressError, setAddressError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [popup, setPopup] = useState(false)




  const onFormValidation = (event) => {
    event.preventDefault()

    if (name === "") {
      setNameError("Please Enter Name")
    } else {
      setNameError("")
    }
    if (address === "") {
      setAddressError("Please Enter Address")
    } else {
      setAddressError("")
    }
    if (email === "") {
      setEmailError("Please Enter Email")
    } else {
      setEmailError("")
    }
    if (phone === "") {
      setPhoneError("Please Enter PhoneNumber")
    }
    else if (phone.length !== 10) {
      setPhoneError("Please Enter valid PhoneNumber")
    }
    else {
      setPhoneError("")
    }

    if ((nameError === "" && name !== "") && (addressError === "" && address !== "") && (emailError === "" && email !== "") && (phoneError === "" && phone !== "")) {
      console.log("OK")
      setPopup((prevState) => !prevState)
    }
  }

  const onChangeName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const onChangeAddress = (event) => {
    console.log(event.target.value)
    setAddress(event.target.value)
  }

  const onChangeEmail = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const onChangePhone = (event) => {
    console.log(event.target.value)
    setPhone(event.target.value)
  }

  const onClickBack = () => {
    setPopup((prevState) => !prevState)
  }
  console.log(cartArray.length)
  if(cartArray.length === 0){
    return (
        <div className="refuse-chekcout">
              <Link to="/">
                  <button className="refuse-button" type="button">Go to Home</button>
              </Link>
        </div>
   )
     
  }else{
    return ( <div>
      <Header />
      <div className="checkout-page-bg-container">
        <CartSummary />
        <div className="Shipping-details">
          <h3>Shipping Address</h3>
          <form onSubmit={onFormValidation}>
            <input onChange={onChangeName} value={name} placeholder="Name" className="input-field" type="text" />
            {nameError !== "" && <p className="error-msg">*{nameError}</p>}
            <input onChange={onChangeAddress} value={address} placeholder="Address" className="input-field" type="text" />
            {addressError !== "" && <p className="error-msg">*{addressError}</p>}
            <input onChange={onChangeEmail} value={email} placeholder="Email" className="input-field" type="email" />
            {emailError !== "" && <p className="error-msg">*{emailError}</p>}
            <input onChange={onChangePhone} value={phone} placeholder="Phone" className="input-field" type="text" />
            {phoneError !== "" && <p className="error-msg">*{phoneError}</p>}
            <button className="button-field" type="submit">Place Order</button>
          </form>
        </div>
        {popup && <div className="popup-container">
          <div className="tex-container">
          <p>Confirmed !</p>
          <p>Thanks for your order!</p>
          </div>
           <button onClick={onClickBack} className="back-button" >Done</button></div>}
      </div>
    </div>)
  }

  
}

export default Checkout