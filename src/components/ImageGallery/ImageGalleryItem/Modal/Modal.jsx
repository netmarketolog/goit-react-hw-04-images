import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImageURL, alt }) {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <ModalContent>
        <img src={largeImageURL} alt={alt} />
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
}

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onEscClick);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEscClick);
//   }

//   onEscClick = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleClickBackdrop = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL, alt } = this.props;
//     return createPortal(
//       <Backdrop onClick={this.handleClickBackdrop}>
//         <ModalContent>
//           <img src={largeImageURL} alt={alt} />
//         </ModalContent>
//       </Backdrop>,
//       modalRoot
//     );
//   }
// }
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
