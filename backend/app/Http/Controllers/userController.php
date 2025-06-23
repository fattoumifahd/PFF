<?php

namespace App\Http\Controllers;

use App\Models\User;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use PHPUnit\Util\Json;

class userController extends Controller

{

    public function register(Request $request) {
        $fileds = $request->validate([
            'name' => 'required|max:200|min:3',
            'email' => 'required|max:255|min:12',
            'password' => 'required|max:255|min:8'
        ]);
        $user =  User::create($fileds);
        $token = $user->createToken($request->name);
        return [
            'user' => $user,
            'token' => $token
        ];

    }

    public function login(Request $request) {
        $request->validate([
            'email' => 'required|max:255|min:12',
            'password' => 'required'
        ]);
        // if(!Auth::attempt($request->post())) {
        //     return response()->json(['message' => 'Invalid credentials', 401]);
        // }

        // $user = $request->user();
        // $request->session()->regenerate();
         ;

        $user = User::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password) ) {
            return [
                'message' => 'Bad Creadintial'
            ];
        }
        $token = $user->createToken($user->name);
        auth()->login($user);

        // return $user;
        return [
            'user' => $user,
            'token' => $token->plainTextToken
        ];
        // $token = $user->create
    }

    public function logout(Request $request):JsonResponse {
        // Auth::logout();
        $request->user()->currentAccessToken()->delete();
        return response()->json(["message" => "Seccessfully LogOut"]);
    }

    public function user() {
    //  $user = Auth::user();           // or auth()->user()

    // if (!$user) {
    //     // not logged in – send 401 instead of crashing
    //     return response()->json(['message' => 'Unauthenticated'], 401);
    // }
    // return response()->json($user);
    return
        $user = auth()->user();
        if (!$user) {
            return ['user' => null];
        }
        return $user;
    }

    public function delete(User $user) {
        User::delete($user);
        return "user deleted ";

    }
}
