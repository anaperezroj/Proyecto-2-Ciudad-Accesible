import axios from 'axios';

export const login = (email, password) => {
  return axios.post('http://localhost:8080/users/login', {
    email,
    password,
  });
};

export const singUp = (email, password, username) => {
  return axios.post('http://localhost:8080/users', {
    email,
    password,
    username,
  });
};
