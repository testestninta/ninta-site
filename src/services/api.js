import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ninta-api.herokuapp.com'
});

export default api;
