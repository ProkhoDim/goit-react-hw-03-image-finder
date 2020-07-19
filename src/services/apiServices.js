import axios from 'axios';

const API_KEY = '15440827-454030fbfe14a611a1b7b063f';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = ({ page = 1, perPage = 20, queryString = '' }) => {
  return axios
    .get(`?key=${API_KEY}&q=${queryString}&page=${page}&per_page=${perPage}`)
    .then(response => response.data.hits)
    .then(data =>
      data.map(({ id, webformatURL, largeImageURL, tags }) => ({
        id,
        webformatURL,
        largeImageURL,
        tags,
      })),
    );
};
export default { fetchImages };
