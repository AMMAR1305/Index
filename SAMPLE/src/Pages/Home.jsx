
import Profile from "../componenets/Profile"
import State from "../Hooks/State"
import Parent from "../componenets/Parent"
import Form from "../Hooks/Form"
const Home = () => {
  return (
    <div>
    {/* <div>App</div> */}
    <Form />
    <Profile name ="Ammar" Age ="21" skills = {["React" , "MongoDb", "Node" , "Express"]}/>
    <State />
    <Parent /> 
    </div>
  )
}

export default Home