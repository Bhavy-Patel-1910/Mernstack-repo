import React from 'react'
import virat from "../assets/photo/virat.png"
import "../assets/css/content.css"


export default function ContentComponent() {
  var biodata = {
    name : "Patel Bhavy",
    collage : "Saffrony institute of technology",
    study : "B-Tech (IT)",
    birthdate : "19/10/2004",
    city : "Patan",
  }
  return (
    <div>
      <img src={virat} alt="virat" className='virat'/>
        <h1> <u>Bio-Data :</u> </h1>
<ul>
 <h2><li>Name: {biodata.name}</li></h2> 
  <h2><li>Collage: {biodata.collage}</li></h2>
  <h2><li>Study: {biodata.study}</li></h2>
  <h2><li>Birth-date: {biodata.birthdate}</li></h2>
  <h2><li>City: {biodata.city}</li></h2>
  
</ul>
    </div>
  )
}
