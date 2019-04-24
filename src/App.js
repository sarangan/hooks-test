import React , {useReducer, useEffect, useRef} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {myTodosContext} from "./TodoContext";
import reducer from "./reducer";


function useEffectOnce(cb){
  const didRun = useRef(false);
  
  useEffect(() => {    
    if(!didRun.current){
      cb();
      didRun.current = true;
    }
  }); 

}

function App() {

  const [state, dispatch] = useReducer(reducer, []);

  useEffectOnce(() => {
      const totos = JSON.parse(localStorage.getItem('todo')) || [];
      dispatch({type: 'LOAD', payload: totos  });
  });

  // useEffect(() => {
  //   const totos = JSON.parse(localStorage.getItem('todo')) || [];
  //   dispatch({type: 'LOAD', payload: totos  });   
  // }, []);
  
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(state) )
  }, [state])


  return (
    <myTodosContext.Provider value={{ state, dispatch }} >
      <div className="App">
        <TodoForm />
        <TodoList list={state}/>
      </div>
    </myTodosContext.Provider>
    
  );
}

export default App;
