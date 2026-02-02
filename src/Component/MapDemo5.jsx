import React from 'react'

export const MapDemo5 = () => {
    var student =[
        {id:1,name:"bhavy",age:21, marks:78,city:"ahmedabad", gender:"male"},
        {id:1,name:"bab",age:22, marks:81,city:"patan", gender:"male"},
        {id:1,name:"bvy",age:23, marks:72,city:"mahesana", gender:"female"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 5</h1>
        <table className='table' style={{border:"black"}} >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    student.map((st)=>{
                        return <tr style ={{backgroundColor:st.gender == "female" && "pink" }
                        }>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style = {{backgroundColor:st.age > 22 ? "red" : "white"}}>{st.age}</td>
                            <td style={{color:st.marks>80 ? "green": "black"}}> {st.marks} </td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
