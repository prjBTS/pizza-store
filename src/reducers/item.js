/* eslint-disable import/no-anonymous-default-export */
import { ADD_ITEM, DELETE_ITEM, FETCH_ITEMS } from '../constants/actionTypes';


const INITIAL_STATE = {
    isLoading: true,
    items: []
}

export default (state = {
    isLoading: true,
    items: []
}, action) => {
    console.log("p", action)
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload.items,
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload.item],
            };
        case DELETE_ITEM:
            return { ...state, items: state.items.filter((each) => each.id !== action.payload.items.id) }

        default:
            return state;
    }
};

