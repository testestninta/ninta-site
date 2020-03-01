import axios from 'axios';

const api = axios.create({
  baseURL: 'https://painel-api-private.herokuapp.com'
});

export default api;
