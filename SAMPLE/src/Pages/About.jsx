import {useState , useEffect} from 'react'
import {Link} from "react-router-dom"

const About = () => {
  const [user , setUser] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => {console.log(data)
         setUser(data)})
  },[])
  return (
    <div>

      <h1> User Details :</h1>
      {user.map((e) =>{
        return <div key = {e.id}>
          <p>{e.username}</p>
          <Link to = {`/user/${e.id}`}><p>View Details</p></Link>
          </div>
       }) }
    </div>
  )
}

export default About