import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles"


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{ totalItems }</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon