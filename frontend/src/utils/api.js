import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const loginUser = async (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const submitCar = async (carData, token) => {
  return api.post('/cars/submit', carData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllCars = async (token) => {
  return api.get('/cars/list', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default api;
