import { APIADD, APICLEAR, APIREMOVE, APIEDIT } from "../Action/Apiaction";
const initialState = {
    list: []
}

const reducersApi = (state = initialState, action) => {
    switch (action.type) {
        case APIADD:    
            return {
                ...state,
                list :action.items
            }
            break;
        case APICLEAR:

            break;
        case APIREMOVE:

            break;
        case APIEDIT:

            break;
        default:
            return state;
    }
}

export default reducersApi;

