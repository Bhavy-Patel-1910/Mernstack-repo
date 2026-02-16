import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({mode:"all"})
    const submitHandler = (data)=>{
        console.log(data)
    }

    const validationSchema={
        nameValidator:{
            required:{
                value:true,
                message:"Name is required"
                      },   
        },
        contactValidator:{
            required:{
                value:true,
                message:"Contact is required"
            },
            pattern:{
              value:/[6-9]{1}[0-9]{9}$/,
              message:"Invalid Contact"
            }
        },
        promocodeValidator:{
            required:{
                value:true,
                message:"Promocode is required"
            },
            validate:(params)=>{
                return params == "2026" || "invalid promocode"
               }
       },
       hobbiesValidator:{
        required:{
            value:true,
            message:"Hobbies is required"
        },
        validate:(params)=>{
            return params?.length >= 2 || "min 2 hobbies are required"
        }
       }
       

    }

  return (
    <div style={{textAlign:"center" , fontSize:"20px" , fontWeight:"bolder"}}>

        <h1>FormDemo7</h1>

        <form onSubmit={handleSubmit(submitHandler)}>

          <div>
            <label>NAME=</label>
            <input type="text" {...register("name",validationSchema.nameValidator)}/>
            <p style={{color:"red"}}>{errors.name ?.message}</p>
          </div>

          <div>
            <label>Contact</label>
            <input type="text" {...register("contact",validationSchema.contactValidator)}></input>
            <p style={{color:"red"}}>{errors.contact ?.message}</p>
          </div>

          <div>
            <label>Promocode</label>
            <input type="text" {...register("promocode",validationSchema.promocodeValidator)}></input>
            <p style={{color:"red"}}>{errors.promocode ?.message}</p>
          </div>

          <div>
            <label>HOBBIES</label><br></br>
            Cricket:<input type="checkbox" value="cricket" {...register("hobbies",validationSchema.hobbiesValidator)}></input>
            Travel:<input type="checkbox" value="travel" {...register("hobbies",validationSchema.hobbiesValidator)}></input>
            Scrolling:<input type="checkbox" value="scrolling" {...register("hobbies",validationSchema.hobbiesValidator)}></input>
            <p style={{color:"red"}}>{errors.hobbies ?.message}</p>
          </div>

          <div>
          <input type="submit" value="Submit"></input>
          </div>

          </form>
    </div>
  )
}
