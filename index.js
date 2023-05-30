// Steps
// state - count: 0
// action - increment , decrement, reset
// reducer 
// store

// Redux require and import createStore
const {createStore} = require("redux")

// Define Constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// State
const initialCounterState = {
    count: 0,
}

// Action
const incrementCounterAction = () => {
    return {
        type : INCREMENT,
    } 
}
const decrementCounterAction = () => {
    return {
        type : DECREMENT,
    } 
}
const resetCounterAction = () => {
    return {
        type : RESET,
    } 
}

// Creating Reducer
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return{
                ...state,
                count: 0,
            }
        default:
            return state
    }
} 

// Create Store 
const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})

// Dispatch Action
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetCounterAction())
store.dispatch(incrementCounterAction())