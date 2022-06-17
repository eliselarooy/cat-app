import axios from 'axios';

const baseUrl = 'https://api.thecatapi.com/v1';

export const getBreeds = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/breeds`,
    headers: {
      'x-api-key': '2b372f77-84bd-44db-a50a-2878cc13810b',
    },
  };

  const { data } = await axios.request(options);

  return data;
};
