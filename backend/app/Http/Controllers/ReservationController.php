<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Http\Requests\UpdateReservationRequest;
use App\Models\Room;
use Illuminate\Http\Request ;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $reservations = Reservation::with('user' , 'room.categorie')->orderBy('created_at', 'desc')->get();
        return $reservations;

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $room = Room::all()->where('categorie_id', '=' ,$request->categorie_id)->where('reserved','=',0)->random();
        $reservation = [
            'room_id' => $room->id,
            'user_id' => $request->user_id,
            'start_date' => date($request->start_date),
            'end_date' => $request->end_date,
            'price' => $request->price
        ];
        $room->update([
            'reserved' => 1
        ]);
        return Reservation::create($reservation);
        return $room;
    }

    /**
     * Display the specified resource.
     */
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReservationRequest $request, Reservation $reservation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reservation $reservation)
    {
        //
    }


    // Return User Reservations
    public function userReservation() {
        // $user =$request->user();
        $user = Auth::user();
        $reservation = Reservation::with('room.categorie')->where('user_id', '=' , $user->id)->get();
        return $reservation;
    }
}
