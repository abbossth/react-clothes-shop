import { ProductCardContainer, Footer, Name, Price } from './product-card.styles';
import Button, {BUTTON_TYPES} from '../button/button.component';
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${ name }`} />
      <Footer>
        <Name>{ name }</Name>
        <Price> { price } </Price>
      </Footer>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={() => addItemToCart(product)}>Add to Card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard