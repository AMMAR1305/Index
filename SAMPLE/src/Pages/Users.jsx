import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
  const [user , setUser] = useState({})
  const [name , setName] = useState({})
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    setUser(data)
    setName(data.name)
  })
  },[])
  return (
    <div>
        <h2>User Details :</h2>
        <h3>First Name : {name.firstname}</h3>
        <h3>Last Name : {name.lastname}</h3>
        <h3>Email : {user.email}</h3>
        <h3>Mobile : {user.phone}</h3>
      
    </div>
  )
}

export default Users