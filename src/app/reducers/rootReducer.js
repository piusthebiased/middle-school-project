import { combineReducers } from "redux";
import testReducer from "../../features/test/testReducer";

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;