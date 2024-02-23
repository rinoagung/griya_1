<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register', [
            "sales" => User::where("role", "sales")->get()
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'id_pegawai' => 'required|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'id_pegawai' => $request->id_pegawai,
            'role' => 'sales',
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        return Inertia::render('Auth/Register', ["sales" => User::where("role", "sales")->get()])->with("success", "New sales account has been added!");
    }


    public function destroy(User $user)
    {
        $user::destroy($user->id);

        return Inertia::render('Auth/Register', ["sales" => User::where("role", "sales")->get()])->with("success", "Sales account has been deleted!");
    }
}
