import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

  const {register,handleSubmit} = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)
  //handleSubmit --> form -->submmit -->handleSubmit --> it will handle submit...
  //register is a function which is use for register input...

  //callback function
  const submitHandler = (data)=>{
    console.log(data) //{} object
    setuserData(data)
    setisSubmited(true)
  }
  
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>NAME=</label>
            <input type='text' placeholder='enter name' {...register("firstName")}></input>
          </div>
          <div>
            <label>AGE=</label>
            <input type='text' {...register("age")}></input>
          </div>
          <div>
            <label>GENDER=</label>
            MALE:<input type='radio' value="male" {...register("gender")}></input>
            FEMALE:<input type='radio' value="female" {...register("gender")}></input>
          </div>
          <div>
            <label>HOBBIES=</label> <br></br>
            CRICKET :<input type='checkbox' value="cricket" {...register("hobbies")}></input>
            TRAVEL :<input type='checkbox' value="travel" {...register("hobbies")}></input>
            CODDING :<input type='checkbox' value="codding" {...register("hobbies")}></input>
          </div>

        <div>
            <label>DOB=</label>
            BIRTH-DATE:<input type='date' {...register("dob")}></input>

        </div>

          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h3>OUTPUT</h3>
          <h3>Name = {userData.firstName}</h3>
          <h3>Age = {userData.age}</h3>
          <h3>GENDER = {userData.gender}</h3>
          <h3>HOBBIES = {userData.hobbies}</h3>
          <h3>DOB = {userData.dob}</h3>

        </div>
          }
        
    </div>
  )
}