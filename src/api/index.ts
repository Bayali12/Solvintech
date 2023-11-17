import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  baseURL:
    'https://api.allorigins.win/raw?url=https://layout.solvintech.ru/nuxt',
});

export const usersApi = {
  getUsers() {
    return instance.get('/api/');
  },
};
