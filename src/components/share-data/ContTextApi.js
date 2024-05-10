import { createContext, useState } from 'react';
import { useContext } from 'react';

export const MyContext = createContext("");



const ContTextApi = ({ children }) => {


  const [cartItems, setCartItems] = useState([])



  // create a function that will be used to add items to the cart.
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem)=> 
        cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ))
    } else {
      // / if the item is not in the cart, add the item to the cart
      setCartItems([...cartItems, {...item, quantity: 1 }])
    }
  }

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) =>
      total + item.price * item.quantity, 0);
  }


  return (

    <div>
      <MyContext.Provider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          clearCart,
          getCartTotal,
        }}>
        {children}
      </MyContext.Provider>
    </div>
  )
  }

  // const decreaseCounter = (item) => {
  //   const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)
  //   if (isItemInCart) {
  //     setCartItems(cartItems.map((cartItem) =>
  //       cartItem.id === item.id ? cartItem.quantity = 1 ? alert("item is deleted successfully!"): {...cartItem, quantity: cartItem.quantity - 1 }
  //         : alert(1) 
  //     ))
  //   }
  // }

  // const checkItemIfExist = (item) => {
  //   let bool = false
  //   cartItems.map((i) => {
  //    const ckeckItem = item.id === i.id
  //     if (ckeckItem)
  //       console.log(bool)
  //     alert("hihhiiiihhiii")
  //   })
  // }

  //this  function that will be used to clear the cart.



export default ContTextApi

export const useShoppingCart = () => {
  return useContext(MyContext);
};






