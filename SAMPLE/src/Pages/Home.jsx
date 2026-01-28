
import Profile from "../componenets/Profile"
import State from "../Hooks/State"
import Parent from "../componenets/Parent"
import Form from "../Hooks/Form"
import {Link} from "react-router-dom"
import {userContext} from '../App'
import {useState} from 'react'
const Home = () => {
  const [user , setUser] = useState("Ammar")
  return ( 
    <div>
    {/* <div>App</div> */}
    {/* <Form />
    <State />
    <Parent />  */}

    <Link to = {'/form'}>Form</Link><br/>
    <Link to = {'/state'}>State</Link><br/>
    <Link to = {'/reducer'}>Reducer</Link><br/>
    <Link to = {'/parent'}>Props</Link><br/>
   
   <userContext.Provider value = {user}>
    <Profile Age ="21" skills = {["React" , "MongoDb", "Node" , "Express"]}/>
   </userContext.Provider>


    </div>
  )
}

export default Home