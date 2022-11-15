import { LoadMoreBtn } from './Button.styled';

export default function Button({ onClick }) {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
}
