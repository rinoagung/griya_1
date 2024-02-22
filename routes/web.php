<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PaketController;
use App\Http\Controllers\ProfileController;
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
        Route::get('/paket', [PaketController::class, 'index'])->name('paket');
        Route::post('/paket', [PaketController::class, 'store']);
    }
);


Route::middleware('auth')->group(function () {
    // Route::get('/customer', [CustomerController::class, 'create'])->name('customer');
    // Route::post('/customer', [CustomerController::class, 'store']);
    // Route::get('/customer/manage', [CustomerController::class, 'index'])->name('customer.manage');
    // Route::get('/customer/edit/{id}', [CustomerController::class, 'show'])->name('customer.edit');
    // Route::get('/customer/show/{id}', [CustomerController::class, 'show'])->name('customer.show');
    // Route::delete('/customer/{id}', [CustomerController::class, 'destroy'])->name('customer.destroy');
    Route::resource('/customer', CustomerController::class);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
