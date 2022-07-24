import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({onClick}) => {
  return (
    <div className='cart-icon-container' onClick={onClick}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon