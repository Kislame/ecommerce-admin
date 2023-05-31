import axios from 'axios';

export const puplicRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const userRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
