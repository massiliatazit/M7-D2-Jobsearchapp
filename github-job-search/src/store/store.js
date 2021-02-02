import { combineReducers, createStore } from 'redux';
//import thunk from 'redux-thunk';// it's a middleware allow to write asynchronous API handling  to interact with store
import jobsReducer from "../reducers/jobs";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// to enhance store to applyMiddleware
const rootReducer = combineReducers({
    jobs: jobsReducer,
  })
const store = createStore(
  rootReducer
);



export default store;