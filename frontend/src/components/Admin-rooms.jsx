import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AdminRooms() {
    const [rooms , setRooms] = useState([]);
     
    let  getRooms = async() =>{
      try {
        let  res = await axios.get('/admin-rooms')
        setRooms(res.data)
      } catch (error) {
        console.log(error)
      }
    } 
    
    useEffect( () => {
      getRooms();  
   },[]);
  return (
    <div>
      <h1 className="">Rooms</h1>
      <table className="table bg-light table-rooms">
        <thead>
          <tr>
            <th>Numero</th>
            <th>categoie</th>
            <th>prix</th>
          </tr>
        </thead>
        <tbody>
          {
            rooms.map((room )=> <tr key={room.id}>
                <td>{room.id}</td>
                <td>{room.categorie.name}</td>
                <td>{room.categorie.price}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
