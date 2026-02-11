import React from 'react'
import { SubUserList } from "./SubUserList"


export const UserList = (props) => {
    console.log("uselist", props)
  return (
    <div style={{textAlign:"center"}}>
        <h1>UserList</h1>
        <h1>{props.title}</h1>
        <h1>{props.company.name}</h1>
        <h1>{props.company.year}</h1>
        <table className= "table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>E-MAIL</th>
              <th>PASSWORD</th>
              <th>CITY</th>
              <th>COLLAGE</th>
              <th>STUDY</th>
              <th>GEMDER</th>
              <th>ADDRESS</th>
            </tr>
          </thead>

          <tbody>
           {
            props.users.map((user)=>{
              return <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.city}</td>
                <td>{user.collage}</td>
                <td>{user.study}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
              </tr>
            })
           }
          </tbody>

        </table>

        <SubUserList title={props.title}></SubUserList>

    </div>
  )
}
