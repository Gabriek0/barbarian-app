import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://barbarian-api.herokuapp.com/',
});
