import React from 'react'
import { useShoppingCart } from './share-data/ContTextApi'
import { useContext, useEffect, useState } from 'react'

const Navbar = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useShoppingCart();
  return (
      <div>
          <div class="collapse" id="navbarToggleExternalContent">
              <div class="bg-dark p-4">
                  <h5 class="text-white h4">Your Cart</h5>
                  <span class="text-muted">.</span>
                  {cartItems.map((item) => (
                      // <h1>{item.price}</h1>

                      <div className='navbar-cart'>
                          <h1>Totel {getCartTotal}</h1>
                          <button onClick={() => { removeFromCart(item) }}
                              href="#" className="add-to-cart">reamove </button>
                          <img src={item.image} className="card-img-top" alt="..." />
                          {/* <button onClick={() => { addToCart(item) }}
                              href="#" className="add-to-cart">+ </button> */}
                          <button onClick={() => { removeFromCart(item) }}
                              href="#" className="add-to-cart">- </button>
                    
                      </div>

                      // <img style={{ width: "100px" }} src={item.image} className="card-img-top" alt="..." />


                  ))}
              </div>
          </div>
          <nav style={{background: "#7533f9"}} class="navbar">
              <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
              </div>
          </nav>
      
    </div>
  )
}

export default Navbar
