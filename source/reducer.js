import * as actionTypes from './actionTypes';

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return { ...state, count: action.payload };
        default:
            return state;
    }
};
