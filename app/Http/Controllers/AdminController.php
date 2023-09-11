<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
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
            'check_out' => $request->check_out
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
        $user = User::where('name' ,'=' , $search)->get();
        $user_id = $user->id;
        $reservation = Reservation::with("user")->where("user_id", '=', $user_id)->get();
        return $reservation;
    }



}
