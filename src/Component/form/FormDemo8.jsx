import React from 'react';
import { useForm } from 'react-hook-form';

export const FormDemo8 = () => {
    const {register,handleSubmit,formState:{errors},watch} = useForm({mode:"onChange"});
    const password = watch("password")

    console.log("watching...",password)

    const validationSchema={
        passwordValidator:{
            required:{
                value:true,
                message:"Password is required"
            },
        },
        confirmPasswordValidator:{
            required:{
                value:true,
                message:"Confirm Password is required"
            },
            validate:(params)=>{
                return params == password || "Password and confirm password should be same"
            }
        }
    };

    const submitHandler = (data)=>{
        console.log(data)
    }
            

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Watch Demo 8</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Password</label>
                <input type="password" {...register("password",validationSchema.passwordValidator)}></input>
                <p style={{color:"red"}}>{errors.password ?.message}</p>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" {...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
                <p style={{color:"red"}}>{errors.confirmPassword ?.message}</p>
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </form>
    </div>
  )
}
