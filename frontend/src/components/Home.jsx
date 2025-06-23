import axios from "axios";
import { useEffect, useState } from "react"
import Card from "./Card";
import web from "../assets/images/web.webp"
import hotelPlace from '../assets/images/hotelPlaceView.jpg'
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Login from './Login'
import { Route, useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   getReservations();
  // }, []);
  // const getReservations = async () => {
  //   try {
  //     const res = await axios.get('api/rooms');
  //     setData(res.data)
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error.response.statusText)
  //     if (error.response.statusText == 'Unauthorized') {
  //       navigate('/login')
  //     }
  //   }
    
  // }
  

  // const calcDays = () => {
  //   let start = new Date(data[0].end_date);
  //   let end = new Date('2014-11-10');
  //   const time = end - start
  //   // console.log(time)
  //   const days = Math.ceil(time / (1000 * 3600 * 24))
  //   console.log(days)
  // }
  return (
  <>
    <Header/>
    <div className="container">
      <div className="firstSection d-flex justify-content-between ">
          <div className="f w-50 ">
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, est ipsum libero possimus ullam porro fugit architecto, consequatur, magnam ea quos quis natus? Ipsam,
               repellat illum consequatur doloribus aliquid autem!
              </p>
          </div>
          <div className="l w-50">
            <img src={web} alt="" />
          </div>
      </div>
      <div className="secondSection d-flex justify-content-between mt-5">
          <div className="f w-50">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo adipisci mollitia nobis veniam alias provident tempora voluptatum, id corporis quaerat earum repudiandae molestias libero facere? Explicabo et dicta placeat sequi?</p>
          </div>
          <div className="l w-50 ">
            <img src={hotelPlace} alt="" />
          </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
