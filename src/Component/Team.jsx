import React from 'react'
import {Link} from 'react-router-dom';
export const Team = () => {

var team=[
    {teamID:1, teamName :"RCB"},
    {teamID:2, teamName :"GT"},
    {teamID:3, teamName :"MI"},
    {teamID:4, teamName :"RR"},
    {teamID:5, teamName :"DC"},
    {teamID:6, teamName :"KKR"},
    {teamID:7, teamName :"SRH"},
    {teamID:8, teamName :"LSG"},
    {teamID:9, teamName :"PBKS"},
    {teamID:10, teamName :"CSK"},
]

  return (
    <div style={{textAlign:"center"}}>
        <h1 >HELLO... Welcome to IPL Team</h1>
        {
            team.map((team) =>{
                return <li> 
                    <Link to ={`/playing/${team.teamName}`}>{team.teamName}</Link>
                </li> 
            })
        }

    
    </div>
  )
}
