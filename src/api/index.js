import axios from 'axios';
import { store } from '../index'
import { setLoading, unSetLoading } from '../actions/loader';

const API = axios.create({ baseURL: 'https://dark-cyan-frog-wig.cyclic.app' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  store.dispatch(setLoading());
  return req;
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('admin')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  store.dispatch(setLoading());
  return req;
});

API.interceptors.response.use(
  function (response) {
    store.dispatch(unSetLoading());
    return response;
  },

  function (error) {
    store.dispatch(unSetLoading());
    return Promise.reject(error);
  }
);

export const fetchItem = () => API.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68");
export const adminSignIn = (formData) => API.post('/admin/signin', formData);
export const signIn = (formData) => API.post('/api/auth/signin', formData);
export const signUp = (formData) => API.post('/api/auth/signup', formData);
export const getOrder = () => API.get('/api/order');
export const setOrder = (cartItem) => API.post('/api/order', cartItem);
