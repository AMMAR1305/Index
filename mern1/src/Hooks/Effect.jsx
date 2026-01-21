
import React, { use, useEffect ,useState } from 'react'

const Effect = () => {
     const [count, setCount] = useState(0);

     useEffect(() => {
        document.title = `You clicked ${count} times  `; 
        console.log("useEffect");
     },[count]);

     const [user, setUser] = useState([]);
     useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setUser(data);
           
                console.log(data)
        })
        .catch(error => console.log("Error fetching",error));
     },[]);
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>Click me</button>
        <h2>User Information</h2>
        <ol>
            {
                user.map((usr) => (
                    <li key={usr.id} ><p>Name : {usr.name} </p></li>
                ))
            }
        </ol>
    </div>
  )
}

export default Effect