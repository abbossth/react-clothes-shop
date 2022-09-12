import styled from 'styled-components'

import { ReactComponent as ShoppingIconSvg } from "../../assets/shopping-bag.svg"


export const ShoppingIcon = styled(ShoppingIconSvg)`
  width: 30px;
  height: 30px;
` 

export const CartIconContainer = styled.div`
  width: 55px;
  height: 55px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 17px;
`