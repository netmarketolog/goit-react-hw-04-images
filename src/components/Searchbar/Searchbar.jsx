import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Notify } from 'notiflix';
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      Notify.failure(`No name - no images. Please, input your request!`);
      return;
    }

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <>
        <SearchBar>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormBtn type="submit">
              <BsSearch size={15} />
              <SearchFormBtnLabel>Search</SearchFormBtnLabel>
            </SearchFormBtn>
            <SearchFormInput
              value={this.state.inputValue}
              onChange={this.handleChange}
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
}
