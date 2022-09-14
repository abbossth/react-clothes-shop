import { Link } from "react-router-dom";

import { BackgroundImage,Body, DirectoryItemContainer } from "./directory-item.styles"

const DirectoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    
    return (
            <DirectoryItemContainer as={Link} to={`/shop/${ title }`}>
                <BackgroundImage
                    imageUrl={imageUrl}
                    />
                <Body>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </Body>
            </DirectoryItemContainer>
    )
}

export default DirectoryItem