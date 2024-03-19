import { ImageItem } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImg,
}) => {
  return (
    <ImageItem onClick={() => onClickImg(largeImageURL, tags)}>
      <img
        src={webformatURL}
        alt={tags}
        loading="lazy"
        width="270"
        height="200"
      />
    </ImageItem>
  );
};

ImageGalleryItem.prototype = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
