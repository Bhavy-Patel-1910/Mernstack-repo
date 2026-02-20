import React from 'react'
import axios from 'axios'

export const ApiDemo2 = () => {
    const addUser = async()=>{
        const userObject = {
            name:"Bhavy Patel",
            age:21,
            email:"xyz1910@gmail.com",
            password:"bhavy123",
            isActive:true
        }
        try {
             const response = await axios.post("https://node5.onrender.com/user/user/",userObject)
             console.log(response)
             console.log(response.data) 
        } catch (error) {
            console.log(error)
            alert("Error while adding user")
        }
     }
        
     return (
         <div style={{textAlign:"center"}}>
            <h1>ApiDemo2</h1>  
            <button onClick={()=>{addUser()}}>ADD USER</button>
   
    </div>
  )
}
