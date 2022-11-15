import { useState, useEffect, useRef } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import Button from '../Button/Button';
import fetchValue from '../../api/api';

import { Container } from '../App/App.styled';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (inputValue && page) {
      setStatus('loading');

      fetchValue(inputValue, page)
        .then(res => {
          setImages(prevState => [...prevState, ...res.hits]);
          setStatus('resolved');
        })
        .catch(error => {
          setStatus('rejected');
        });
    }
  }, [inputValue, page]);

  const handleFormSubmit = inputValue => {
    setInputValue(inputValue);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState.page + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />
      {images && <ImageGallery data={images} />}
      {status === 'loading' && <Loader />}
      {images.length >= 12 && status === 'resolved' && (
        <Button onClick={loadMore} />
      )}
    </Container>
  );
}
