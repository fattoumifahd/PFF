import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo2.jpg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// axios.defaults.withCredentials = true;
export default function Header() {
    const [user, setUser] = useState();
    const navigate = useNavigate()
    useEffect(() => { 
        getUserInfo()

    },[])
    
    const getUserInfo = async () => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.get('/api/user', {
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })
            setUser(res.data);
            console.log(res.data);
            // console.log(user);
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async () =>{
        try {
            const token = localStorage.getItem("token");
            const res = await axios.post('/api/logout', {},{
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
            }) 
            
            console.log(res.data);
            localStorage.removeItem("token");
            setUser(null)
        }catch(err) {
            console.log(err)
        }
        
    }
    return (
        <header className='mr-20 ml-20'>
            {console.log(user)}
            <nav className="d-flex justify-content-center">
                {
                    user && user.name ?
                    <Link href='' onClick={handleLogout}>logout</Link> :
                    <Link className="" to={"/login"}>Login</Link>
                }
                <Link className="" to={user && user.name ? "/reservation" : "/login"}>Make Reservation</Link>
                { user &&
                    <><Link to={'/user/reservations'}> My Reservations</Link></>
                }
            </nav>
        </header>
    )
}
