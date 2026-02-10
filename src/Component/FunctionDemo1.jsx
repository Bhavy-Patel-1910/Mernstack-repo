import React from 'react'

export const FunctionDemo1 = () => {

    const test =()=>{
        alert("test function called.....")
    }
     const test2 =(x)=>{
        alert("value of x is "+x)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FunctionDemo1</h1>
        <button onClick={test}>Click</button>
        <button onClick={()=>test2(100)}>Click2</button>
    </div>
  )
}