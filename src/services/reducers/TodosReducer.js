import {GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from "../constants/TodosConstant"

const initialTodosState={
    isLoding:false,
    todos:[],
    error:null
}

const todosReducer=(state=initialTodosState,action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
            
            return{
                ...state,
                isLoding:true
            }
            case GET_TODOS_SUCCESS:
            
                return{
                    
                    isLoding:false,
                    todos:action.payload,
                    error:null
                }
        case GET_TODOS_FAILED:
            
            return{
                
                isLoding:false,
                todos:[],
                error:action.payload
            }
    
        default:
            return state;
    }

}
export default todosReducer;