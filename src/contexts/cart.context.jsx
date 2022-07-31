import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if the cartItems contains productToAdd
  const existngCartItem = cartItems.find(item => item.id === productToAdd.id) 

  // if yes, just increment the quantity
  if (existngCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem)
    } else {
    // return new array with modified items
    return [...cartItems, {...productToAdd, quantity: 1 }]
  }
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addToCartItem: {},
  total: 0
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const totalProducts = cartItems.reduce((accumulator, current) => accumulator + current.quantity, 0)
    
    setTotalItems(totalProducts)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
    
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, totalItems }

  return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}