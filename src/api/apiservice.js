import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '23511418-9a5fcf3a7b36a31c6f256788e';

const fetchImages = async (searchQuery, currentPage) => {
  const { data } = await axios.get(
    `/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data;
};

export default fetchImages;