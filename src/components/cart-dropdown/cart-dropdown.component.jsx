import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Button from '../button/button.component'
import CartItem from "../cart-item/cart-item.component"
import { CartContext } from "../../contexts/cart.context"

import { CartDropdownContainer, EmptyMessage, CartItems  } from "./cart-dropdown.styles"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        { cartItems.length ?
          (cartItems.map(cartItem => { 
            return (
              <div key={cartItem.id}>
                <CartItem cartItem={cartItem} ></CartItem>
              </div>
            )
          })) : <EmptyMessage>The cart is empty</EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckOutHandler} >GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown