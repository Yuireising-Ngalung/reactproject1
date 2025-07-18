import { useReducer, useState } from "react";
import TodoUI from "./TodoUI";
import { initialValues, reducer } from "./todo.action";

export default function TodoIndexPage(){
    const [newTodo, setNewTodo] = useState('');

    const [todos, dispatch] = useReducer(reducer, initialValues);
    return(<>
        <TodoUI 
            todos = {todos} 
            dispatch = {dispatch} 
            newTodo={newTodo}
            setNewTodo = {setNewTodo}/>
    </>)
}