import React,{useState} from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
  const {register,handleSubmit} = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)

  const submitHandler=(data)=>{
      setuserData(data)
      setisSubmited(true)
  }

  return (
    <div style={{textAlign:"center" , fontSize:"20px" , fontWeight:"bolder"}}>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>NAME</label>
        <input type='text' {...register("name")}></input>
        </div>

       <div>
          <label>E-MAIL</label>
        <input type='email' name='email' {...register("email")}></input>
       </div>

        <div>
          <label>PASSWORD</label>
        <input type='password' name='password' {...register("password")}></input>
        </div>

         <div>
          <label>NUMBER</label>
        <input type='number' {...register("number")}></input>
        </div>

         <div>
          <label>TIME</label>
        <input type='time' {...register("time")}></input>
        </div>

        <div>
          <input type='submit'></input>
        </div>

        {
            isSubmited == true && <div style={{fontSize:"18px" , fontWeight:"bold"}}>
         <p>OUTPUT</p>
         <p>Name = {userData.name}</p> 
         <p>E-mail = {userData.email}</p>
         <p>Password = {userData.password}</p>
         <p>Number = {userData.number}</p>
         <p>Number = {userData.time}</p>
          
          </div>
        }

      </form>

    </div>
  )
}
