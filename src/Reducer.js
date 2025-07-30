import { combineReducers } from 'redux';
import { Increment, Decrement, Reset, Login, Logout } from './Action';


const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case Increment: 
        return { count: state.count + 1 };
    case Decrement:
        return { count: state.count - 1 };
    case Reset: 
        return { count: 0 };
    default: 
        return state;
  }
};

const authReducer = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case Login: 
        return { isLogged: true };
    case Logout: 
        return { isLogged: false };
    default: 
        return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer
});

export default rootReducer;
