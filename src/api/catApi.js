import axios from 'axios';
import { api_key } from '../config.js';

const baseUrl = 'https://api.thecatapi.com/v1';

export const getBreeds = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/breeds`,
    headers: {
      'x-api-key': `${api_key}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
