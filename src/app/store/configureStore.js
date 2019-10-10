import { createStore } from "redux";
import testReducer from "../../features/test/testReducer";

export const configureStore = () => {
    const store = createStore(testReducer)

    return store;
}