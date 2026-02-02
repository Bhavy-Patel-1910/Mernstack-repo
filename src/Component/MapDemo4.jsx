import React from 'react'

export const MapDemo4 = () => {
    var cities = [
        { id:1, city: "ahmedabad", pop:8000000,AQI :302},
        { id:1, city: "sander", pop:10000,AQI :150},
        { id:1, city: "patan", pop:5000000,AQI :200},
    ];
  return (
    <div style={{textAlign: 'center'}}>
      <h1>MAP DEMO 4</h1>
      <table className='table table-dark'>
        <thead>
            <tr>
                <th>ID</th>
                <th>CITY</th>
                <th>POPULATION</th>
                <th>AQI</th>
            </tr>
        </thead>
        <tbody>
            {
                cities.map((city)=>{
                    return <tr>
                        <td>{city.id}</td>
                        <td>{city.city}</td>
                        <td>{city.pop}</td>
                        <td>{city.AQI}</td>
                    </tr>
                })
            }
        </tbody>

      </table>
    </div>
  );
};
