import s from './ImageGallery.module.scss'
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => (
    <ul className={s.ImageGallery}>
        {images.map(image => {
            return (
                <ImageGalleryItem
                    key={image.id}
                    image={image}
                    onClick={onClick}
                />
            );
        })}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }),
    ),
    onClick: PropTypes.func.isRequired,
}

export default ImageGallery