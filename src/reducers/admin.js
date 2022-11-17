import * as actionType from '../constants/actionTypes';


const getAdminStatus = () => {
    return JSON.parse(localStorage.getItem('admin'))
  };
  

const INITIAL_STATE = {
    adminData: null || getAdminStatus,
}

const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.ADMIN_AUTH:
            localStorage.setItem('admin', JSON.stringify({ ...action?.data }));
            return { ...state, adminData: action.data, loading: false, errors: null };
        case actionType.START_LOADING:
            return { ...state, isLoading: true };

        case actionType.ADMIN_LOGOUT:
            localStorage.clear();
            return { ...state, adminData: null, loading: false, errors: null };
        default:
            return state;
    }
};

export default adminReducer;