import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './partials/header';
import { useNavigate } from 'react-router-dom';

export default function UserReservation() {
  const [reservations, setReservation] = useState([]);
  const [user, setUser ] = useState();
  useEffect(() => {
    getReservations();
    getUserInfo();
    // user ? "" : navigate('/login')
  }, [])
  const navigate = useNavigate()
  const getUserInfo = async () => {
    try {
      const user = await axios.get('/api/user')
      setUser(user.data);
      
    } catch (error) {
      console.log(error)
    }
  }
  const getReservations = async () => {
    try {
      const res = await axios.get('/api/user/reservations');
      console.log(res.data);
      setReservation(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  
  
  return (
    <>
    <Header />
      <div className='wrapper bg-light'>
        <table className="table bg-light">
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              <th>Room Type</th>
            </tr>
          </thead>
          <tbody>
            {reservations && reservations.map((r) =>
              <tr key={r.id}>
                <td>{r.start_date}</td>
                <td>{r.end_date}</td>
                <td>{r.price}</td>
                <td>{r.room.categorie.name}</td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </>
    
  )
}
