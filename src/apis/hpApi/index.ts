import axios from 'axios';
// https://hp-api.onrender.com/
export const hpApi = axios.create({
  baseURL: 'https://hp-api.onrender.com/api/',
});
