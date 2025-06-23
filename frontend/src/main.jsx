import './bootstrap';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Resevationmake from './components/Resevationmake'
import Admin from './components/Admin';
import UserReservation from './components/UserReservation';
import AdminRooms from './components/Admin-rooms';  
import './css/app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/reservation' element={<Resevationmake />}></Route> 
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
            <Route path='/user/reservations' element={<UserReservation/>} ></Route>
            <Route path='/admin' element={<Admin/>} ></Route>
            <Route path='/admin-rooms' element={<AdminRooms/>} ></Route>
        </Routes>
    </BrowserRouter>
)