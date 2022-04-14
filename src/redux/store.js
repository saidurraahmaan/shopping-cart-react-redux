import {composeWithDevTools} from "redux-devtools-extension";
import {createStore} from "redux";
import rootReducer from "./rootReducer.js";

const store = createStore(rootReducer,composeWithDevTools());

export default store;