import { CartItemContainer, ItemDetails,ItemProperty } from "./cart-item.styles"

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemProperty>{name}</ItemProperty>
        <ItemProperty>{ quantity } x ${ price } </ItemProperty>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem