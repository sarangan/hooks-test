import React, {useContext} from "react";
import {myTodosContext} from "../TodoContext";

export default function TodoItem({item}){

    const {state, dispatch} = useContext(myTodosContext);

    return (
        <div style={{textAlign:"left"}}>
            <input type="checkbox" onChange={()=> dispatch({type: 'COMPLETED', payload: item.id})} defaultChecked={item.completed}/>
            {item.text}
            <button onClick={() => dispatch({type: 'DELETE', payload: item.id}) }>x</button>
        </div>
    );

}