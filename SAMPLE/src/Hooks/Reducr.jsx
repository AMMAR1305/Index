import { useReducer } from "react";


const reducer = (state,action) =>{
   switch(action.type){
    case "INCREMENT" :
        return {count : state.count + 1}
     
    case "DECREMENT" :
        return {count : state.count - 1}
        
    case "RESET" :
        return {count : 0}

    default :
        return state;
        
   }
}
const initial = {count : 0}


const Reducr = () => {
    const [state , dispatch] = useReducer(reducer,initial)
    
  return (
    <div>
        <h3>Count : {state.count}</h3>
        <button onClick = {() => dispatch({type:"INCREMENT"})}>+</button>
        <button onClick = {() => dispatch({type:"DECREMENT"})}>-</button>
        <button onClick = {() => dispatch({type:"RESET"})}>RESET</button>
    </div>
  )
}

export default Reducr