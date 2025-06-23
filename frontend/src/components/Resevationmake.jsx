import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Header from './partials/Header';
import { useNavigate } from 'react-router-dom';
// import '../css/makeReservation.css'

export default function Resevationmake() {
  const firstRender = useRef(true)


  const navigate = useNavigate()
  const [user, setUser] = useState();
  const [categories, setCategories] = useState();
  const [start_date, setStart_date] = useState()
  const [end_date, setEnd_date] = useState();
  const [category, setCategory] = useState();
  const [days , setDays] = useState();
  const [price , setPrice] = useState()
  const [check , setCheck] = useState(false)
  const curDate = new Date()
  const maxDate = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  maxDate.setMonth(maxDate.getMonth() + 1)
  useEffect(() => {
    if(firstRender.current == true) {
      getUserInfo();
      getRooms();
      firstRender.current = false
    } else {
      calcuDays();
      console.log(price)
    }
  }, [end_date ]);
  // maxDate.setMonth(maxDate.getMonth() + 1)
  // const maxTime = time.setMonth(time.getMonth() + 1)
  // maxTime = maxTime.toISOString().split("T")[0]
  // const max = time.setMonth(time.getMonth + 1)
  const calcuDays =  () => {
    const day = 24 * 60 * 60 * 1000;
    const start = new Date(start_date)
    console.log(start)
    const end = new Date(end_date);
    console.log(end)
    const diffinMin = Math.abs(end - start);
    console.log(diffinMin)
    const diffInDays = Math.round(diffinMin / day);
    console.log(diffInDays)
    setDays(diffInDays);
    const total = category.price * diffInDays;
    console.log(total)
    setPrice(total)
  }

  const getUserInfo = async () => {
    try {
       const token = localStorage.getItem("token")
      const userInfo = await axios.get('/api/user', {headers : {
        "Authorization" : `Bearer ${token}`
      }})
      setUser(userInfo.data);
    } catch (error) {
      console.log(error)
    }
  }

  const getRooms = async () => {
    const categories = await axios.get('/api/categories');
    console.log(categories.data)
    setCategories(categories.data)
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reservation = await axios.post('/api/reservation/create' , {user_id :  user.id, start_date: start_date  , end_date : end_date  , categorie_id : category.id  , price: price})
      console.log(reservation.data);
      reservation.data && navigate('/user/reservations')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {
        // !user ? navigate('/login') :

          <>
            <Header />
            <div className='container container-form'>
              <form action="" className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <select name="" value={JSON.stringify(category)}  className='form-control' id="" onChange={(e) =>  setCategory(JSON.parse(e.target.value))}>
                    <option selected disabled >Select Type Of Room</option>
                    {
                      categories && categories.map((e) => <option key={e.id} value={JSON.stringify(e)} >{e.name}</option>)
                    }
                  </select>
                  <small id="helpId" className="text-muted">Help text</small>
                </div>
                <div className="form-group">
                  <input type="date" min={curDate.toISOString().split('T')[0]} max={maxDate.toISOString().split("T")[0]} name="start_date" id="" className="form-control" placeholder="" onChange={({ target }) => setStart_date(target.value)} />
                  <small id="helpId" className="text-muted">Help text</small>
                </div>
                <div className="form-group">
                  <input type="date" name="end_date" max={maxDate.toISOString().split('T')[0]} min={tomorrow.toISOString().split("T")[0]} id="" className="form-control" placeholder="" onChange={({target}) => setEnd_date(target.value)} />
                  <small id="helpId" className="text-muted">Help text</small>
                </div>
                <div className='form-group'>
                </div>
                {category && <h3>Price : {category.price} /Night </h3> }
                 { price &&
                   <div className="d-flex justify-content between">
                   <span>Total :</span>
                   <span>{price}</span>
                 </div>
                 }
                <button className="btn btn-primary form-control">Reserver</button>
              </form>
            </div>
          </>
      }
    </>
  )
}
