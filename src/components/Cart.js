import React from 'react'
import { useShoppingCart } from './share-data/ContTextApi'
import { useContext, useEffect, useState } from 'react'





const Cart = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useShoppingCart();
 
    
    
    return (
        
        <>
            <button class="btn btn-primary control-main" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> Cart</button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h3 class="offcanvas-title" id="offcanvasRightLabel">Your Cart</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="">
                    {
                        cartItems.length > 0 ? (

                            <div>

                            <h3>Total Cart: ${getCartTotal()}</h3>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        clearCart()
                                    }}
                                >
                                    Clear All cart
                                </button>
                                </div>

                        ) : (
                                <h1 >Your cart is empty</h1>
                        )
                        
                    }
                    {cartItems.map((item) => (
                        // <h1>{item.price}</h1>

                        <div className='navbar-cart'>
                            <img src={item.image} className="card-img-top" alt="..." />
                            <button onClick={() => removeFromCart(item)} className='btn btn-danger'>-</button>
                            <span> {item.quantity} in cart</span>
                            <button onClick={() => addToCart(item)} type="button" class="btn btn-success">+</button>

                        </div>


                    ))}
                </div>
            </div>
            {}


      

        
        </>


    )

}

export default Cart
