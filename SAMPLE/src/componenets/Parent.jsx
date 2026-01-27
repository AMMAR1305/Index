import React from 'react'
import Child from "./Child"

const Parent = () => {

const getdata =  (data) => {
    console.log("Data recieved from child: ",data);
}

  return (
    <div>
        <h3> Using Callback child to parent (output in console)</h3>
        <Child send = {getdata} />
    </div>
  )
}

export default Parent



