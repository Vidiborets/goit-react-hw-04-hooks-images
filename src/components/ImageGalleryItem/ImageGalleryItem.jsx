import s from './ImageGalleryItem.module.scss'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
    
    const fullImage = () => onClick(image.largeImageURL)
    return (
        <li className={s.ImageGalleryItem}>
            <img className={s.ImageGalleryItemImage}
                src={image.webformatURL}
                alt={image.tags}
                onClick={fullImage}
            />
        </li>
    )
};

ImageGalleryItem.defaultProps = {
    tags: ''
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
};

export default ImageGalleryItem