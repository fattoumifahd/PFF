<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\userController;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Admin Routes
Route::post('checkin/{id}', [AdminController::class , 'checkIn']);
Route::post('checkout/{id}', [AdminController::class , 'checkOut']);
Route::post('payment/{id}', [AdminController::class , 'payment']);
Route::get('reservations/{search}', [AdminController::class, 'getReservationsByName']);



Route::post('register', [userController::class , 'register']);
Route::post('login', [userController::class, 'login']);
Route::middleware("auth:sanctum")->get('user', [userController::class, 'user']);
Route::middleware("auth:sanctum")->post('logout', [userController::class, 'logout']);
Route::get('/categories', [CategorieController::class, 'index']);
Route::delete("delete/{user}",[userController::class, 'delete']);
// Reservation
Route::get('reservations', [ReservationController::class, 'index'])->name('reservation.index');
Route::post('reservation/create', [ReservationController::class, 'store']);
Route::middleware("auth:sanctum")->get('user/reservations' , [ReservationController::class, 'userReservation']);


Route::get('admin-rooms', [RoomController::class, 'index'])->name('room.index');
// Route::middleware('auth')->group(function() {
// });
