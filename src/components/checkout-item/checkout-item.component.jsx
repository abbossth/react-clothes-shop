import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"


import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, Arrow, Value, RemoveButton } from "./checkout-item.styles"


const CheckoutItem = ({ cartItem, addItemToCart, removeItemFromCart }) => {
  const { name, quantity, imageUrl, price } = cartItem
  const { clearItemFromCart } = useContext(CartContext)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name> {name} </Name>
      <Quantity>
        <Arrow onClick={() => removeItemFromCart(cartItem)}>
         &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price> {price} </Price>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem