import React, { useState } from 'react'

const Form= () => {
  const [formData,SetformData]=useState({
   
    name:"",
    email:"",
    password:"",
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;  
    SetformData({
      ...formData,
      [name]:value,
    });
  };
   const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Data Submitted:", formData);
    alert(`Welcome, ${formData.name}!`);
  };
  return (
    <div className='table'>
      <form onSubmit={handleSubmit}>
      
        <label htmlFor="name">Name</label>
        <input name="person"type="text" placeholder='enter your name' onChange={handleChange} />
        <br />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder='enter your email' onChange={handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder='password ' onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form