import React, {useState, useReducer, useContext} from 'react';
import {myTodosContext} from "../TodoContext";


function TodoForm(){

    const [todo, setTodo] = useState('');

    const {state, dispatch} = useContext(myTodosContext);

    const addtoDo = () =>{
        if(todo){
            dispatch({type: 'ADD_TODO', payload: todo});
            setTodo('');
        }        
    }

    return(
        <div>
            <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
            <button onClick={()=> addtoDo() }>Add</button>            
        </div>

    );
}

export default TodoForm;