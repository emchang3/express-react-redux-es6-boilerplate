import * as actionTypes from './actionTypes';

export const addOne = (newCount) => {
    return {
        type: actionTypes.ADD,
        payload: newCount
    };
};
