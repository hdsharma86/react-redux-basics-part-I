import * as actionTypes from './actionTypes';

const saveResult = (response) => {
    return {
        type: actionTypes.STORE_RESULT,
        counter: response
    }
}

export const storeResult = (counter) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(counter));
        }, 2000);
    }
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: id
    }
}