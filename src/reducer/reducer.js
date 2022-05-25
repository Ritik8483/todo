import { addToCart,removeToCart } from "../action/action";
import { createSlice } from "@reduxjs/toolkit";
const initialStates=0;


const getInitialTodo=()=>{
    const localToDoList=window.localStorage.getItem('todoList');
    if(localToDoList){
        return JSON.parse(localToDoList)
    }
    window.localStorage.setItem('todoList',JSON.stringify([]));
    return [];

}
const initialValues={
    todoList: getInitialTodo(),
}

const todoSlice=createSlice({
    name:'todo',
    initialState:initialValues,
    reducers:{
        addToDo:(state,action)=>{
            state.todoList.push(action.payload);
            const todoList = window.localStorage.getItem('todoList');
            if(todoList){
                const todoListArr=JSON.parse(todoList);
                todoListArr.push({
                    ...action.payload,
                });
                window.localStorage.setItem('todoList',JSON.stringify(todoListArr))
            }
        },   
        deleteToDo:(state,action)=>{
            const todoList=window.localStorage.getItem('todoList');
            if(todoList){
                const todoListArr=JSON.parse(todoList); 
                todoListArr.forEach((todoItem,todoindex)=>{
                    if(todoItem.id===action.payload){
                    todoListArr.splice(todoindex,1);
                    }
                });
                window.localStorage.setItem('todoList',JSON.stringify(todoListArr));
                state.todoList=todoListArr;
            }
        },
        updateToDo:(state,action)=>{
            const todoList=window.localStorage.getItem('todoList');
            if(todoList){
                const todoListArr=JSON.parse(todoList); 
                todoListArr.forEach((todoItem,index)=>{
                    if(todoItem.id===action.payload.id){
                        todoItem.title=action.payload.title;
                        todoItem.status=action.payload.status;
                    }
                });
                window.localStorage.setItem('todoList',JSON.stringify(todoListArr));
                state.todoList=todoListArr;
            }
        },
    },
    
})
export const changeHandler=(state=initialStates,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return(
                state +action.payload 
            )
            break;
        case 'DECREMENT':
            return state -action.payload;  
            break;
    
        default:
            return state;
            break;
    }
}

export const {addToDo,deleteToDo,updateToDo}=todoSlice.actions;
export default todoSlice.reducer;

