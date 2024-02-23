<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PaketController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['admin', 'auth', 'verified'])->group(
    function () {
        Route::resource("/paket", PaketController::class);
        Route::get("/viewpdf", [PaketController::class, 'viewPDF'])->name('viewpdf');
    }
);


Route::middleware('auth')->group(function () {
    Route::resource('/customer', CustomerController::class);
});

require __DIR__ . '/auth.php';
