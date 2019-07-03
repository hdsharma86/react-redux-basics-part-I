import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    result: []
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){

        case(actionTypes.INCREMENT):
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;

        case(actionTypes.DECREMENT):
            return { ...state, counter: state.counter - 1 };

        case(actionTypes.ADD):
            return { ...state, counter: state.counter + action.value };

        case(actionTypes.SUBTRACT):
            return { ...state, counter: state.counter - action.value };
        
        case(actionTypes.STORE_RESULT):
            return {
                ...state,
                result: state.result.concat({id: new Date().getTime(), value: state.counter})
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