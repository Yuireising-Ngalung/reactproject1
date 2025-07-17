import { useReducer, useState } from "react";
import HomeUI from "./HomeUI";
import { initialValues, reducer } from "./todo.action";

export default function(){
    const [newTodo, setNewTodo] = useState('');

    const [todos, dispatch] = useReducer(reducer, initialValues);
    return(<>
        <HomeUI 
            todos = {todos} 
            dispatch = {dispatch} 
            newTodo={newTodo}
            setNewTodo = {setNewTodo}/>
    </>)
}