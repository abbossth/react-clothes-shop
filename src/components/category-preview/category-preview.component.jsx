import ProductCard from '../product-card/product-card.component'
import { Link } from "react-router-dom"

import { CategoryPreviewContainer, Title, Preview } from "./category-preview.styles"

const CategoryPreview = ({ title, products}) => {
    return (
        <CategoryPreviewContainer>
            <Link to={`/shop/${title}`}>
                <h2>
                    <Title>{title.toUpperCase()}</Title>
                </h2>
            </Link>
            <Preview>
                {
                    products.filter((_, idx) => idx<4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview