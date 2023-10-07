<?php

use App\Http\Controllers\BuilderController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PropertyController;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return redirect('/');
    })->name('dashboard');
    Route::post('/properties', [PropertyController::class, 'store'])->name('properties.store');
    Route::get('/properties/create', [PropertyController::class, 'create'])->name('properties.create');

    Route::get('/cities', [CityController::class, 'index'])->name('cities.index');
    Route::post('/cities', [CityController::class, 'store'])->name('cities.store');
    Route::get('/cities/create', [CityController::class, 'create'])->name('cities.create');
    Route::get('/cities/{city}', [CityController::class, 'show'])->name('cities.show');

    Route::post('/builders', [BuilderController::class, 'store'])->name('builders.store');
    Route::get('/builders/create', [BuilderController::class, 'create'])->name('builders.create');

    Route::get('/contacts', [ContactController::class, 'index'])->name('contacts.index');
    Route::post('/contacts', [ContactController::class, 'store'])->name('contacts.store');
});

Route::get('/', [HomeController::class,'index'])->name('home');

Route::get('/properties', [PropertyController::class, 'index'])->name('properties.index');
Route::get('/properties/{property}', [PropertyController::class, 'show'])->name('properties.show');
Route::get('/cities', [CityController::class, 'index'])->name('cities.index');

Route::get('/builders', [BuilderController::class, 'index'])->name('builders.index');
