import React,{useState} from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
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
          <label>COLOR</label>
        <input type='color' {...register("color")}></input>
        </div>

       <div>
          <label>MONTH</label>
        <input type='month'  {...register("month")}></input>
       </div>

        <div>
          <label>SEARCH</label>
        <input type='search' {...register("search")}></input>
        </div>

         <div>
          <label>NUMBER</label>
        <input type='tel' {...register("tel")}></input>
        </div>

         <div>
          <label>FILE</label>
        <input type='file' {...register("file")}></input>
        </div>

        <div>
          <input type='submit'></input>
        </div>

        {
            isSubmited == true && <div style={{fontSize:"18px" , fontWeight:"bold"}}>
         <p>OUTPUT</p>
         <p>Color = {userData.color}</p> 
         <p>Month = {userData.month}</p>
         <p>Search = {userData.search}</p>
         <p>Number = {userData.tel}</p>
         <p>File = {userData.file}</p>
          
          </div>
        }

      </form>

    </div>
  )
}
