
import React from 'react'

// Accept props correctly. Destructure `name` and `department` from props.
const User = ({ name, department, skills }) => {
  return (
    <div>
<h2>
  My name is {name} from {department} department.
</h2>
 

  {/* Array passing from app.jsx */}
  <ol>
      {skills.map((skill, idx) => (
      <li key={idx}>{skill}</li>
))}
</ol>

    </div>
  )
}

export default User


