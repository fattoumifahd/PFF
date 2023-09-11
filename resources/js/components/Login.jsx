import React, { useEffect, useState } from 'react'
import Header from './partials/header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigat = useNavigate()
  const [email , setEmail] = useState(null);
  const [password , setPassword] = useState(null);
  const [userAuth , setUserAuth] = useState(1)
  const [error , setError] = useState();
  const [user, setUser] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      const data = await axios.post('/api/login' , { email , password }); 
      console.log(data.data);
      setUserAuth(data.data);
      data.data && navigat('/')
    } catch (error) {
        console.log(error.response.data)
        setError(error.response.data)
    }
    
  }
  const getUserInfo = async () => {
    try {
      const user = await axios.get('/api/user');
      setUser(user.data)
    } catch (error) {
      console.log(error); 
    }

  }
  
  useEffect(() => {
    getUserInfo();
  },[])

  return (
    <>
    {user && navigat('/')  }
    <Header />
      <div className='container container-form w-50'>
          {!userAuth  && <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">User Not found</h4>
            <p>Email OR Passowrd Is in correct</p>
            <p className="mb-0"></p>
          </div>}
        <form action="" method="post" className='form rounded' onSubmit={(e) => handleSubmit(e)} >
          <div className="form-group">
            <input type="email" name="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} placeholder="" />
            <small id="helpId" className="text-danger">{error && error.errors.email && error.errors.email}</small>
          </div>
          <div className="form-group">
            <input type="password" name="" className="form-control" placeholder=""  onChange={(e)=> setPassword(e.target.value)}/>
            <small id="helpId" className="text-danger">{error && error.errors.password && error.errors.password}</small>
          </div>
          <div className="form-group text-center">
            <button className="btn btn-primary w-10" type='submit'>Log IN</button>
          </div>
          <div className='text-center'>
            <a href="/register">Register ? </a>
          </div>
        </form>
      </div>
    </>
  )
}
