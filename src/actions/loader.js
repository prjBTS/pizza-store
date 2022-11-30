import { SET_LOADING, UNSET_LOADING } from "../constants/actionTypes";

export const setLoading = () => async (dispatch) => {

  dispatch({
    type: SET_LOADING,
  });

};

export const unSetLoading = () => async (dispatch) => {
  dispatch({
    type: UNSET_LOADING,
  });
};