import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../contexts/categories.context'

import ProductCard from '../../components/product-card/product-card.component'
import "./category.styles.scss"



const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoryContext)
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div>
            <h1>{ category.toUpperCase() }</h1>
            <div className='category-container'>
                { products 
                    && products.map(product => { 
                    return (
                        <ProductCard key={product.id} product={product}/>
                )})
                }
            </div>
        </div>
    )
}

export default Category