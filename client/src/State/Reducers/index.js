import { combineReducers } from "redux" 
import allreducers from "./allreducers"
import reducersApi from "./reducersApi";




const rootReducers = combineReducers({
     allreducers : allreducers
});

export default rootReducers;