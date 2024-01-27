import { useState } from "react";

function MyComponent() {

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("Visa")
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }


    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" placehold />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Instructions:"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Gift Card">Gift Card</option>
            </select>

            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value='Pick Up' checked={shipping === 'Pick Up'} onChange={handleShippingChange}/>
                Pick up
            </label> <br/>
            <label>
                <input type="radio" value='Delivery' checked={shipping === 'Delivery'} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent