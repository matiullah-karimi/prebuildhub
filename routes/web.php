<?php

use App\Http\Controllers\BuilderController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PropertyController;
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

Route::get('/', [HomeController::class,'index']);

Route::get('/properties', [PropertyController::class, 'index'])->name('properties.index');
Route::post('/properties', [PropertyController::class, 'store'])->name('properties.store');
Route::get('/properties/create', [PropertyController::class, 'create'])->name('properties.create');
Route::get('/properties/{property}', [PropertyController::class, 'show'])->name('properties.show');
Route::get('/cities', [CityController::class, 'index'])->name('cities.index');
Route::post('/cities', [CityController::class, 'store'])->name('cities.store');
Route::get('/cities/create', [CityController::class, 'create'])->name('cities.create');

Route::get('/builders', [BuilderController::class, 'index'])->name('builders.index');
Route::post('/builders', [BuilderController::class, 'store'])->name('builders.store');
Route::get('/builders/create', [BuilderController::class, 'create'])->name('builders.create');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
