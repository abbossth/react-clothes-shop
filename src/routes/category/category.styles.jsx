import styled from 'styled-components'

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 10px;
`

export const CategoryTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
`