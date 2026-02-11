import React, {useState} from 'react'

export const InputDemo1 = () => {

    const[name,setName] = useState("")
    const[email,setemail] = useState("")
    const[number,setnumber] = useState("")
    const[password,setpassword] = useState("")
    const[time,settime] = useState("")
    const[dob,setdob] = useState("")
    const[age,setage] = useState("")
    const[color,setcolor] = useState("")
    const[file,setfile] = useState("")

    const nameHandler = (event)=>{
     setName(event.target.value)
    }

    const emailHandler = (event)=>{
     setemail(event.target.value)
    }

    const numberHandler = (event)=>{
     setnumber(event.target.value)
    }

    const passwordHandler = (event)=>{
     setpassword(event.target.value)
    }

    const timeHandler = (event)=>{
     settime(event.target.value)
    }

    const dobHandler = (event)=>{
     setdob(event.target.value)
    }

    const ageHandler = (event)=>{
     setage(event.target.value)
    }

    const colorHandler = (event)=>{
     setcolor(event.target.value)
    }

    const fileHandler = (event)=>{
     setfile(event.target.value)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>InputDemo1</h1>

        <div>
            <label>NAME</label>
            <input type="text" onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>

        <div>
            <label>E-mail</label>
            <input type="email" onChange={(event)=>{emailHandler(event)}}></input>
            {email}
        </div>

        <div>
            <label>Number</label>
            <input type="tel" onChange={(event)=>{numberHandler(event)}}></input>
            {number}
        </div>

        <div>
            <label>Password</label>
            <input type="password" onChange={(event)=>{passwordHandler(event)}}></input>
            {password}
        </div>

        <div>
            <label>Time</label>
            <input type="time" onChange={(event)=>{timeHandler(event)}}></input>
            {time}
        </div>

        <div>
            <label>DOB</label>
            <input type="date" onChange={(event)=>{dobHandler(event)}}></input>
            {dob}
        </div>

        <div>
            <label>AGE</label>
            <input type="text" onChange={(event)=>{ageHandler(event)}}></input>
            {age}
        </div>

        <div>
            <label>COLOR</label>
            <input type="color" onChange={(event)=>{colorHandler(event)}}></input>
            {color}
        </div>

        <div>
            <label>FILE</label>
            <input type="file" onChange={(event)=>{fileHandler(event)}}></input>
            {file}
        </div>
        
    </div>
  )
}
