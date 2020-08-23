import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }



    let shipping = 0;
    if (total <= 0) {
        shipping = 0;
    }
    // else if (total > 0) {
    //     shipping = 4.99;
    // }
    else if (total > 35) {
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);
    return (
        <div>
            <h4>order summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : {total}</p>
            <p><small>Shipping Cost : {shipping} </small></p>
            <p><small>Tax+VAT : {tax}</small></p>
            <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default cart;