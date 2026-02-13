import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    
 
 

  const {register,handleSubmit,formState:{errors}} = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)

  const submitHandler = (data)=>{
    console.log(data) 
    setuserData(data)
    setisSubmited(true)
  }

   const validationSchema={
    addressValidator:{
        required:{
            value:true,
            message:"Address is required"},
        
        minLength:{
            value:10,
            message:"Minimum 10 cherectotrs required"
        },

        maxLength:{
            value:50,
            message:"Maximum 50 cherectotrs required"
        },
     },

     numberValidator:{
        required:{
            value:true,
            message:"Number is require"
        },

        min:{
            value:1000000000,
            message:"Minimum length is 6"
        },

        max:{
            value:10000000000,
            message:"Maximum length is 15"
        }
    }
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo</h1>
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
            <label>ADDRESS</label>
           <input type="text" {...register("address",validationSchema.addressValidator)}></input>
           {errors.address?.message}
          </div>
          <div>
            <label>NUMBER</label>
            <input type="text" {...register("number",validationSchema.numberValidator)}></input>
            {errors.number?.message}
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
          <h3>ADDRESS = {userData.address}</h3>
          <h3>PASSWORD = {userData.password}</h3>
          <h3>DOB = {userData.dob}</h3>

        </div>
          }
        
    </div>
  )
}