import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export default function ImageGallery({ data }) {
  return (
    <Gallery>
      {data.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          alt={item.tags}
        />
      ))}
    </Gallery>
  );
}
ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
