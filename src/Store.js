import {createStore} from "redux";
import countReducer from "./services/reducers/CounterReducer";

const store=createStore(countReducer)
export default store