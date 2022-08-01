import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"


const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)

  return (
    <div>
      <h2>I am the checkout page</h2>
      <div>
        {
          cartItems.map(cartItem => {
            const { id, name, quantity } = cartItem
            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <br />
                <span onClick={() => removeItemFromCart(cartItem)} >decrement</span>
                <br />
                <span onClick={() => addItemToCart(cartItem)}>increment</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Checkout