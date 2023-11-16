import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export const usersApi = {
  getUsers() {
    return instance.get('/api/');
  },
};
