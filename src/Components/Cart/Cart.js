import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total =  total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    // let 10% tax from total price. shipping have no tax.
    const tax = parseFloat((total * 10/100).toFixed(2));
    const grandTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items : {quantity}</p>
            {/* <p>Selected Items : {cart.length}</p> */}
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping} </p>
            <p>TAX: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;