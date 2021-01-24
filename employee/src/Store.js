import getEmployeeDetailsReducer from './Reducer/GetemployeeDetails.Reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


let reducer = combineReducers({
    details : getEmployeeDetailsReducer, 
});



let store = createStore(
    reducer,
    applyMiddleware(thunk)    
);

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

console.log(unsubscribe);

console.log("store", store.getState());

export default store;
