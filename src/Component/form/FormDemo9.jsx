import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo9 = () => {
    const {register,handleSubmit,formState:{errors},watch} = useForm()
    const password = watch("password") || ""

    const submitHandler = (data)=>{
        console.log(data)
    }

    const validationSchema = {
        passwordValidator:{
            required:{
                value:true,
                message:"Password is required"
            },
            validate:(value)=>{
                return (/[A-Z]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value) && /[\W_]/.test(value) && value.length >= 9) || "Invalid Password"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo9</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Password</label>
                <input type="text" placeholder='Enter Unique Passkey' {...register("password",validationSchema.passwordValidator)}></input>
                <p style={{color:"red"}}>{errors.password?.message}</p>
                <ul style={{listStyle:"none", padding:0}}>
                    <li style={{color: /[A-Z]/.test(password) ? "green" : "red"}}>1 Uppercase</li>
                    <li style={{color: /[a-z]/.test(password) ? "green" : "red"}}>1 Lowercase</li>
                    <li style={{color: /[0-9]/.test(password) ? "green" : "red"}}>1 Number</li>
                    <li style={{color: /[\W_]/.test(password) ? "green" : "red"}}>1 Special Character</li>
                    <li style={{color: password.length >= 9 ? "green" : "red"}}>Min Length 9</li>
                </ul>
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </form>
    </div>
  )
}
