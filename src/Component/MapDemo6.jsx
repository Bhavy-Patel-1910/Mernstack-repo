import React from 'react'

export const MapDemo6 = () => {
    let members =[
        {id:1, name:"bhavy",marks:90,city:"Patan",collage: "saffrony",no:12},
        {id:2, name:"b",marks:80,city:"sander",collage: "hngu",no:14},
        {id:3, name:"h",marks:70,city:"mahesana",collage: "sk",no:15},
        {id:4, name:"a",marks:60,city:"ahmedbad",collage: "giperi",no:16},
        {id:5, name:"v",marks:85,city:"abc",collage: "ganpat",no:17},
        {id:6, name:"y",marks:75,city:"ahmedabad",collage: "sarvjanik",no:18}
        
    ]
  return (
    <div style = {{textAlign: 'center'}}>
        <h1>MAP DEMO 6</h1>
        <table className='table' style={{border:"black"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>COLLAGE</th>
                    <th>NO</th>
                </tr>
            </thead>
            <tbody>
              {
                members.map((mak)=>{
                   return <tr style={{background: mak.no<13 ? "lightblue" : "white"}}>
                    <td>{mak.id}</td>
                    <td>{mak.name}</td>
                    <td style = {{background:mak.marks>80 ? "green" : "white" }}> {mak.marks}</td>
                    <td style = {{background:mak.city == "ahmedabad"? "purple" : ""}}>{mak.city}</td>
                    <td style={{background:mak.collage == "saffrony" ? "blue" : "orange", color: 'white'}}>{mak.collage}</td>
                    <td>{mak.no}</td>
                </tr>

                })
            }
            </tbody>
        </table>
    </div>
  )
}
