import "./checkout-item.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const CheckoutItem = ({ cartItem, addItemToCart, removeItemFromCart }) => {
  const { name, quantity, imageUrl, price } = cartItem
  const { clearItemFromCart } = useContext(CartContext)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
         &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <span className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
    </div>
  )
}

export default CheckoutItem