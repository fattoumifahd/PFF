<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class userController extends Controller
{
    public function register(Request $request) {
        $request->validate([
            'name' => 'required|max:200|min:3',
            'email' => 'required|max:255|min:12',
            'password' => 'required|max:255|min:8'
        ]);
        User::create($request->post());
        return $request->post();

    }

    public function login(Request $request) {
        $request->validate([
            'email' => 'required|max:200|min:12',
            'password' => 'required'
        ]);
        Auth::attempt($request->post());
        $user = Auth::user();
        return $user;
    }

    public function logout() {
        Auth::logout();
        
    }

    public function user() {
        return Auth::user();
    }
}
