import React from 'react'

const Profile = ({name,Age,skills}) => { // store objects   (or) (props)
  return (

    <div>
        <h1>I am {name} {Age} years old </h1>  
        
        <ul>

           {skills.map((skill, index)=>(   //or { }  use return keyword
            <li key={index}>{skill}</li>
           ))}

        </ul>

   </div> 
  )
}

export default Profile