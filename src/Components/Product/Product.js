import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './product.css'

const Product = (props) => {
    // console.log(props);
    const {product, handleAddToCart} = props;
    
    const{name, img, seller, price, ratings} = product;


    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            {/* <button onClick={handleAddToCart} className='btn-cart'> */}
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-test'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;