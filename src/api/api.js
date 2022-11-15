export default async function fetchValue(inputValue, page) {
  const PARAMS = `q=${inputValue}&key=29904639-b03e054f5aedc60df22d30ccb&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  const res = await fetch(`https://pixabay.com/api/?${PARAMS}`);
  return await res.json();
}
