import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './partials/Header';
import Footer from './partials/Footer';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const navigate = useNavigate()
        useEffect(() => {
            response && navigate('/login')
        },[])
    const [response , setResponse] = useState();
    const [name, SetName] = useState(null)
    const [email, SetEmail] = useState(null)
    const [password, SetPassword] = useState(null);
    const [errors, SetError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/register', { name, email, password });
            setResponse(res.data);
            navigate('/login');
            
        } catch (error) {
            console.log(error)
            SetError(error.response.data)

        }
    }

    // console.log(errors)
    return (
    <>
    
        <Header/>
        <div className='container w-50 rounded'>
            <form action="" className='form ' method='post' onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" onChange={(e) => SetName(e.target.value)} placeholder="Name" />
                    <small id="helpId" className="text-danger">
                        {errors && errors.errors.name && errors.errors.name }
                    </small>
                </div>
                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Email" onChange={(e) => SetEmail(e.target.value)} />
                    <small id="helpId" className="text-danger">
                        {errors && errors.errors.email && errors.errors.email }
                    </small>
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="password" onChange={(e) => SetPassword(e.target.value)} />
                    <small id="helpId" className="text-danger">
                        {errors && errors.errors.password && errors.errors.password }
                    </small>
                </div>
                <button className="btn btn-success" type='submit'>Register</button>
            </form>
        </div>
    </>
    )
}
