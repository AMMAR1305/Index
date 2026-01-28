import {useState, useEffect} from "react";
const State = () => {

 const [count , setCount] = useState(0)
 const [like , setLike] = useState(0)

 useEffect (() => {
  console.log("useEffect from count in state component");
 },[count])

  return (
    <div>
     <h2> useState Example</h2>
     <h3>Count : {count}</h3>
      <button onClick = {() => setCount(count + 1) }>Increment</button>
      <button onClick = {() => setCount(count - 1) }>Decrement</button>
      <button onClick = {() => setCount(0) }>Reset</button>


     <h2>Like : {like}</h2>
      <button onClick = {() => setLike(like + 1) }> Like👍</button>
      <button onClick = {() => setLike(like - 1) }>UnLike👎</button>
      <button onClick = {() => setLike(0) }>Reset😂</button>

    </div>
  )



}

export default State