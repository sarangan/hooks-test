import React, {Fragment} from 'react';
import TodoItem from "./TodoItem";

function TodoList({list}){

    return(
        <Fragment>
            {list.map( (item, index) => (
                <TodoItem key={index} item={item} />
            ))
            }
        </Fragment>
        
    );
}

export default TodoList;