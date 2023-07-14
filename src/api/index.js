import react from 'react';
import axios from 'axios';

export const getData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        'https://learn.microsoft.com/api/catalog/',
      );
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
