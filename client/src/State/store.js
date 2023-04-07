import { createStore } from "redux";
// import rootReducers from "./Reducers";
import allreducers from "./Reducers/allreducers";
// import reducersApi from "./Reducers/reducersApi";

const store= createStore(allreducers, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
