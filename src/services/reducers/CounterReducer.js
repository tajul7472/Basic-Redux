import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstant";

const initialCountState = {
    count: 0
}
const countReducer = (state = initialCountState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }


        default:
            return state
    }
}
export default countReducer;