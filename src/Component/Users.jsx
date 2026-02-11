import React from 'react'
import { UserList } from './UserList'

export const Users = () => {
    var title="USERS APP";
    var company ={

      name:"abc",
      year:"2026",

    };

    var users=[
      {id:1,name:"Bhavy",age:21,email:"a@a",password:123,city:"patan",collage:"saffrony",study:"IT",gender:"male",address:"sander"},
      {id:2,name:"Ketu",age:21,email:"b@b",password:456,city:"ahmedabad",collage:"balisana",study:"ITI",gender:"male",address:"sander"},
      {id:3,name:"Divy",age:20,email:"c@c",password:789,city:"patan",collage:"balisana",study:"ITI",gender:"male",address:"sander"},
      {id:4,name:"lala",age:23,email:"d@d",password:123,city:"mahesana",collage:"sarvajanik",study:"commerce",gender:"male",address:"sander"},
      {id:5,name:"Manan",age:22,email:"e@e",password:456,city:"ahmedabad",collage:"hngu",study:"IT",gender:"male",address:"sander"},
    ]
    

  return (
    <div style={{textAlign:"center"}}>
        <h1>Users</h1>

<UserList title={title} company={company} users={users}></UserList>

    </div>
  )
}
