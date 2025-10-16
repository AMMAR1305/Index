import React, {useState} from 'react'

const State = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h3> count : {count}  </h3>
        <button onClick={ () => {setCount(count + 1)}}> + </button>
        <button onClick={ () => {setCount(count - 1)}}> - </button>
        <button onClick={ () => {setCount(0)}}> Reset </button>

    </div>
  )
}

export default State