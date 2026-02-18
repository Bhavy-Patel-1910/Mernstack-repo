import React, {useState} from 'react'
import axios from 'axios'

export const ApiDemo = () => {
       const [message, setmessage] = useState("")
       const [users, setusers] = useState([])  
       
       const getUser = async()=>{

        const response = await axios.get("https://node5.onrender.com/user/user/")
        
        console.log(response)
        console.log(response.data)
        console.log(response.data.message)
        setmessage(response.data.message)
        console.log(response.data.data)
        setusers(response.data.data)
       }

       
  return (
    <div>
        <h1>ApiDemo</h1>
        <button onClick={()=>{getUser()}}>GET</button>

        <h1>MESAAGE = {message} </h1>

        
                <table border="1" align="center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>AGE</th>
                            <th>IS_ACTIVE</th>
                            <th>V</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
            users.map((user)=>{
                return <tr> 
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.age}</td> 
                            <td>{user.isActive ?"true":"false"}</td>
                            <td>{user.__v}</td>
                            
                            </tr>
                            })
                        }
                        
                    </tbody>
                </table>
           
    </div>
  )
}