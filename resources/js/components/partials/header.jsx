import React, { useEffect, useState } from 'react'
import logo from '../../public/images/logo2.jpg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    useEffect(() => { 
        getUserInfo()

    },[])
    const [user,setUser] = useState();
    const getUserInfo = async () => {
        try {
            const user = await axios.get('/api/user')
            setUser(user.data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async () =>{
        try {
            const data = await axios.get('/api/logout');
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <header className='mr-20 ml-20'>
            <nav className="d-flex justify-content-center">
                {
                    user && user.name ?
                    <a href='' onClick={() =>  handleLogout()}>logout</a> :
                    <a className="" href="/login">Login</a>
                }
                <a className="" href={user && user.name ? "/reservation" : "/login"}>Make Reservation</a>
                { user &&
                 <a href=""><Link to={'/user/reservations'}> My Reservations</Link></a>
                }
            </nav>
        </header>
    )
}
