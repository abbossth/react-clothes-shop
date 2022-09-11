import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../contexts/categories.context'

import ProductCard from '../../components/product-card/product-card.component'
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx"



const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoryContext)
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div>
            <CategoryTitle>{ category }</CategoryTitle>
            <CategoryContainer>
                { products 
                    && products.map(product => { 
                    return (
                        <ProductCard key={product.id} product={product}/>
                )})
                }
            </CategoryContainer>
        </div>
    )
}

export default Category