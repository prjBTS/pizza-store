import { SET_LOADING, UNSET_LOADING } from "../constants/actionTypes";

const initialState = 0;

const loaderReducer = (state = initialState, action) => {
    const { type } = action;
    let newValue = state;
    console.log("At Load:", newValue)
    switch (type) {
        case SET_LOADING:
            newValue = newValue + 1;
            return newValue;

        case UNSET_LOADING:
            if (newValue > 0) {
                newValue = 0;
            }
            return newValue;

        default:
            return state;
    }
};

export default loaderReducer;
