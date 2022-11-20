import { ADMIN_AUTH, START_LOADING } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.adminSignIn(formData);
    dispatch({ type: ADMIN_AUTH, data: data, error: null });
    navigate('/admin/dashboard');
  } catch (error) {
    dispatch({ type: AUTH, data: null, error: data.message });
    console.log(error);
  }
};