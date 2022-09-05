
import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if the cartItems contains productToAdd
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id) 
  
  // if yes, just increment the quantity
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem)
  }
  else {
    // return new array with modified items
    return [...cartItems, {...productToAdd, quantity: 1 }]
  }
}
const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(item => item.id === productToRemove.id) 
  
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== existingCartItem.id)
  }

  return cartItems.map(item => 
    item.id === productToRemove.id ? {...item, quantity: item.quantity -1 } : item)

}

const clearCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter(item => item.id !== cartItemToRemove.id) 
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addToCartItem: {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  total: 0,
  totalPrice: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const totalProducts = cartItems.reduce((accumulator, current) => accumulator + current.quantity, 0)
    
    setTotalItems(totalProducts)
  }, [cartItems])

  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulator, current) => accumulator + current.quantity * current.price, 0)
    
    setTotalPrice(totalPrice)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove))
  }

  const value = { isCartOpen, setIsCartOpen, cartItems,removeItemFromCart, addItemToCart, totalItems, clearItemFromCart, totalPrice }

  return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}