import { useContext } from "react"
import "./cart-dropdown.styles.scss"
import Button from '../button/button.component'
import CartItem from "../cart-item/cart-item.component"
import { CartContext } from "../../contexts/cart.context"

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

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
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown