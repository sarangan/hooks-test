import React from 'react';


export default function reducer(state, action){

    console.log(action);
    switch(action.type){


        case 'LOAD':{
            return action.payload
        }
        
        case 'ADD_TODO':{
            return ([
                ...state,
                {
                    text: action.payload,
                    completed: false,
                    id: state.length + 1
                }
            ]);
        }

        case 'DELETE':{
            return ( state.filter( item => item.id !== action.payload ))
        }

        case 'COMPLETED': {
            return state.map( (item) =>{
                if(item.id == action.payload){
                    return{ ...item, completed: !item.completed}
                }
                return item;
            } );
        }

        case 'GET_TODO':{
            return([...state]);
        }

        default:
            return state;            
        
    }
}