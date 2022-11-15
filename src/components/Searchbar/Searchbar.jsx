import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Notify } from 'notiflix';
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      Notify.failure(`No name - no images. Please, input your request!`);
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <SearchBar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormBtn type="submit">
            <BsSearch size={15} />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>
          <SearchFormInput
            value={inputValue}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    </>
  );
}
