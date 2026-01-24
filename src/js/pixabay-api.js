import axios from 'axios';

const API = '54255948-743bb2e2e8edc610c07792dbd';
const BASE_URL = 'https://pixabay.com';

axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(query, page) {
  const { data } = await axios.get('/api/', {
    params: {
      q: query || '',
      image_type: 'photo',
      key: API,
      orientation: 'horizontal',
      safesearch: true,
      page: page || 1,
      per_page: 15,
    },
  });
  console.log(data);

  return data;
}
