import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import "./cart-dropdown.styles.scss"
import Button from '../button/button.component'
import CartItem from "../cart-item/cart-item.component"
import { CartContext } from "../../contexts/cart.context"


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map(cartItem => { 
            // const {id, name, price, quantity, imageUrl} = cartItem
            return (
              <div key={cartItem.id}>
                <CartItem cartItem={cartItem} ></CartItem>
              </div>
            )
          })
        }
      </div>
      <Button onClick={goToCheckOutHandler} >GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown