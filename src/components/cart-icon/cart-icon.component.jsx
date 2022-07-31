import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const CartIcon = ({ onClick }) => {
  const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <span className='item-count'>{ totalItems }</span>
    </div>
  )
}

export default CartIcon