import { FETCH_ITEMS, START_LOADING } from '../constants/actionTypes';
import * as api from '../api/index.js';




export const getItem = () => async (dispatch) => {
    try {
        const { data } = await api.fetchItem();
        dispatch({ type: FETCH_ITEMS, payload: { items: data } });
    } catch (error) {
        console.log(error);
    }
};