import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./partials/Header";
import { useNavigate } from "react-router-dom";

export default function UserReservation() {
  const [reservations, setReservation] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getReservations();
    getUserInfo();
  }, []);
  const navigat = useNavigate();
  // !user && navigat('/login')
  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getReservations = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "/api/user/reservations"
      ,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      
      console.log(res.data);
      setReservation(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    { }
      <Header />
      <div className="wrapper">
        <table className="table bg-light table-user-reservations">
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              <th>Room Type</th>
            </tr>
          </thead>
          <tbody>
            {reservations &&
              reservations.map((r, index) => (
                <tr
                  key={r.id}
                  style={{
                    backgroundColor: index % 2 == 0 ? "white" : "#f2f2f2",
                  }}
                >
                  <td>{r.start_date}</td>
                  <td>{r.end_date}</td>
                  <td>{r.price}</td>
                  <td>{r.room.categorie.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
