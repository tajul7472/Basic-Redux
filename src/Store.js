import { applyMiddleware, createStore } from "redux";
import todosReducer from "./services/reducers/TodosReducer";
import thunk from "redux-thunk"
// import countReducer from "./services/reducers/CounterReducer";

// const store=createStore(countReducer)
const store = createStore(todosReducer, applyMiddleware(thunk))
export default store