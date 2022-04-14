import {combineReducers} from "redux";
import shopReducers from "./shopping/shopping-reducers"

const rootReducer = combineReducers({
    shop:shopReducers,
})

export default rootReducer;