import { combineReducers } from 'redux';
import { SET_RESTAURANTS } from './action';


function restaurants(state = [], action) {
    switch(action.type) {
        case SET_RESTAURANTS: 
            return action.items;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ restaurants });

export default rootReducer;