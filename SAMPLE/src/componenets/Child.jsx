import React from 'react'

const Child = ({send}) => {

  return (
    <div>
        <button onClick = {() => send("Hello from Child")}>Send Data</button><br />
    </div>
  )
}

export default Child