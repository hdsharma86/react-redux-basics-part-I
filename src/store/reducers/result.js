import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
    result: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case(actionTypes.STORE_RESULT):
            return {
                ...state,
                result: state.result.concat({id: new Date().getTime(), value: action.counter})
            };

        case (actionTypes.DELETE_RESULT):
            /*const updatedArr = [...state.result];
            updatedArr.splice(id, 1);*/

            const updatedResult = state.result.filter(result => result.id !== action.resultId);
            return {
                ...state,
                result: updatedResult
            };
    }
    return state;
}

export default reducer;