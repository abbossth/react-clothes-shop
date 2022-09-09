import "./category-preview.styles.scss"
import ProductCard from '../product-card/product-card.component'
import { Link } from "react-router-dom"

const CategoryPreview = ({ title, products}) => {
    return (
        <div className='category-preview-container'>
            <Link to={`/shop/${title}`}>
                <h2>
                    <span className='title'>{title.toUpperCase()}</span>
                </h2>
            </Link>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx<4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview