
import styled from 'styled-components'

import { GoogleSignInButton, InvertedButton, BaseButton } from "../button/button.styles"

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 470px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  
  ${GoogleSignInButton}, ${InvertedButton}, ${BaseButton} {
    margin-top: auto;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 8px;
  }

`