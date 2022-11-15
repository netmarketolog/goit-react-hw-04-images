import { useState } from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import Modal from './Modal/Modal';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, largeImageURL, alt }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <GalleryItem onClick={toggleModal}>
        <Image src={webformatURL} alt={alt} />
      </GalleryItem>
      {showModal && (
        <Modal largeImageURL={largeImageURL} alt={alt} onClose={toggleModal} />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
