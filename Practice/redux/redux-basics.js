const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    couter: 0
}

//reducer

const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            couter: state.couter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            couter: state.couter + action.value
        }
    }
    return state;
}

//Store

const store = createStore(rootReducer);
console.log(store.getState());

//Subscription

store.subscribe(() => {
    console.log('[Subscribe]', store.getState());
})

//Dispatching action

store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
