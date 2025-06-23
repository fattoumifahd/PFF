import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Admin() {
    const [reservations , setReservation] = useState();
    const [state , setState] = useState();
    const [search , setSearch] = useState()
    useEffect(() => {
        getReservations();
    },[state])

    const getReservations = async () => {
        try {
            const res = await axios.get('/api/reservations');
            setReservation(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }        
    }

    const handleSearch = async () => {
        try {
            const res = await axios.get(`/api/reservations/${search}`);
            console.log(res.data);
            setReservation(res.data);
        } catch (error) {
            console.log(error);
        }
    }


    const handleCheckOut = async (e,id) => {
        e.preventDefault();
        try {
            const date = new Date().toISOString().split('T')[0]+ " " + new Date().toISOString().split("T")[1].slice(0,8);
            console.log(date);
            const res = await axios.post(`/api/checkout/${id}`, {check_out : date})
            setState(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handleCheckIn = async (e ,id) => {
        e.preventDefault();
        try {
            const date = new Date().toISOString().split('T')[0]+ " " + new Date().toISOString().split("T")[1].slice(0,8);
            console.log(date);
            const res = await axios.post(`/api/checkin/${id}`,{check_in : date})
            console.log(res.data)
            setState(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handlePayment = async (e, id) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/payment/${id}`);
            console.log(res.data);
            setState(res.data)
        } catch (error) {
            console.log(error); 
        }


    }
    return (<>
    <div className="wrapper  ">
        <div className="form-group w-50 text-center m-auto d-flex justify-content-between col ">
            <input type="search" name="" onChange={({ target }) => setSearch(target.value)} className='form-control w-70 ' id="" />
            <button className="btn btn-light ml-3" onClick={() => handleSearch()}>Search</button>
        </div>
        <table className='table p-5 bg-light mt-5'>
            <thead>
                <tr className='text-center'>
                    <td>User Name</td>
                    <td>Room</td>
                    <td>Category</td>
                    <td>Price</td>
                    <td className=''>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    reservations && reservations.map((res,index) => 
                        <tr className='text-center' key={res.id} style={{backgroundColor : index%2 == 0 ? 'white' : '#f2f2f2'}}>
                            <td>{res.user.name}</td>
                            <td>{res.room.id}</td>
                            <td>{res.room.categorie.name}</td>
                            <td>{res.price}</td>
                            <td className='d-flex justify-content-between'>
                                <form action="" method="post" onSubmit={(e) => handlePayment(e ,res.id)}>
                                    <button className="btn btn-success" type='submit' disabled={res.payent} >Payent</button>
                                </form>
                                {!res.check_in ?
                                    <form action="" method="post" onSubmit={(e) => handleCheckIn(e , res.id)}>
                                        <button className="btn btn-primary" type='submit'>Check IN </button>
                                    </form> : 
                                    res.check_out ? 
                                    <button className="btn btn-info" disabled>End Visit</button> :
                                    <form action="" method="post" onSubmit={(e) => handleCheckOut(e, res.id)}>
                                        <button className="btn btn-secondary" type='submit'>Check Out</button>
                                    </form>
                                }
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table> 
        </div> 
        </>

  )
}
