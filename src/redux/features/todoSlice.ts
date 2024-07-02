import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
}
type TInitialState = {
    todos: TTodo[];
}
const initialState:TInitialState = {
    todos:[]
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) =>{
            state.todos.push({...action.payload, isCompleted: false})
        },
        removeTodo: (state, action: PayloadAction<string>) =>{
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) =>{
            const task =  state.todos.find((item) => item.id === action.payload);
            task!.isCompleted = !task?.isCompleted;
            state.todos.sort((a, b) => {
                if (a.isCompleted === false && b.isCompleted === true) {
                    return -1;
                }
                if (a.isCompleted === true && b.isCompleted === false) {
                    return 1;
                }
                return 0;
            });
        },
    }
});
export const {addTodo, removeTodo, toggleCompleteState} = todoSlice.actions;
export default todoSlice.reducer
