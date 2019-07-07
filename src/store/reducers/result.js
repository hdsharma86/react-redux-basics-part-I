import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../util';

const initialState = {
    counter: 0,
    result: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case(actionTypes.STORE_RESULT):
            return updateObject(state, {result: state.result.concat({id: new Date().getTime(), value: action.counter})});

        case (actionTypes.DELETE_RESULT):
            const updatedResult = state.result.filter(result => result.id !== action.resultId);    
            return updateObject(state, {result: updatedResult});
    }
    return state;
}

export default reducer;