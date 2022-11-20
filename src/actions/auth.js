import { AUTH, START_LOADING } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate('/');
  } catch (error) {
    dispatch({ type: AUTH, data: null, error: data.message });
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data, error } = await api.signUp(formData);

    dispatch({ type: AUTH, data, error });

    navigate('/');
  } catch (error) {
    dispatch({ type: AUTH, data: null, error: data.message });
    console.log(error);
  }
};
