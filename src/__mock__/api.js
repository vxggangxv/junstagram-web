import axios from 'axios';
export const CREATE_URL = 'create url';
export const API_URL = 'https://jsonplaceholder.typicode.com';

// Simulating api
export const api = {
  createItem: (url, newItem) => {
    return Promise.resolve(newItem);
  },
  findAll: () => {
    return axios.get(`${API_URL}/users`).then((response) => response.data);
  },
  findOne: async (id) => {
    // const result = await axios.get(`${API_URL}/users/${id}`);
    // return result.data;
    return axios
      .get(`${API_URL}/users/${id}`)
      .then((response) => response.data);
  },
};
