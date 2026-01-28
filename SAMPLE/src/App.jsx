
import Profile from "./componenets/Profile"
import State from "./Hooks/State"
import Parent from "./componenets/Parent"
import Form from "./Hooks/Form"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Service from "./Pages/Service"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import ProductDetails from "./Pages/ProductDetails"
import Users from "./Pages/Users"
import Navbar from "./componenets/Navbar"
import Reducr from "./Hooks/Reducr"


import { createContext } from "react"


export const userContext = createContext()

const App = () => {
  return (

<>
   <Navbar />
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/service" element = {<Service/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/products" element = {<Products/>}/>
      <Route path = "/products/:id" element = {<ProductDetails/>}/>
      <Route path = "/user/:id" element = {<Users/>}/>
      <Route path = "/form/" element = {<Form/>}/>
      <Route path = "/state/" element = {<State/>}/>
      <Route path = "/reducer/" element = {<Reducr/>}/>
      <Route path = "/parent/" element = {<Parent/>}/>
    

    </Routes>

    {/* <div>App</div>
    <Profile name ="Ammar" Age ="21" skills = {["React" , "MongoDb", "Node" , "Express"]}/>
    <State />
    <Parent /> 
    <Form /> */}


</> 
  )
}

export default App