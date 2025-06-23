<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Room;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function checkIn(Request $request , $id) {
        $reservation = Reservation::find($id);
        $reservation->update([
            'check_in' => $request->check_in
        ]);
        return $reservation;
    }

    public function checkOut(Request $request , $id) {
        $reservation = Reservation::find($id);
        $reservation->update([
            'check_out' => $request->check_out,
        ]);

        $Room = Room::find($reservation->room_id);
        $Room->update([
            'reserved'=> 0  
        ]);
        return $reservation;
    }
    public function payment($id) {
        $reservation = Reservation::find($id);
        $reservation->update([
            'payent' => 1
        ]);
        return $reservation;

    }


    public function getReservationsByName($search) {
        $user = User::with('reservation')->where('name' , '=' , $search)->get();
        if (count($user) >= 2) {
            $reservations1 = Reservation::with('user' , 'room.categorie')->where('user_id','=',$user[0]->id)->orderBy('created_at', 'desc')->get();
            $reservations2 = Reservation::with('user' , 'room.categorie')->where('user_id','=',$user[1]->id)->orderBy('created_at', 'desc')->get();
            $reservations = $reservations1->merge($reservations2);
        } else  {
            $reservations = Reservation::with('user' , 'room.categorie')->where('user_id','=',$user[0]->id)->orderBy('created_at', 'desc')->get();
            
        }
        return $reservations;
    }



}
