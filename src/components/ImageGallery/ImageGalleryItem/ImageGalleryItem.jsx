import { Component } from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { Modal } from './Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { webformatURL, largeImageURL, alt } = this.props;
    return (
      <>
        <GalleryItem onClick={this.toggleModal}>
          <Image src={webformatURL} alt={alt} />
        </GalleryItem>
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
