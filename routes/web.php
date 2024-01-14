<?php

use Illuminate\Support\Facades\{
    Auth,
    Route
};
use App\Http\Controllers\{
    CategoryController,
    ItemController,
    MainController
};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [MainController::class, 'index']);
Route::get('/landing', [MainController::class, 'landing']);
echo '<pre>' . print_r(Auth::guard('web')->check(), true) . '</pre>';
Route::group(['middleware' => 'auth'], function () {
//    if (auth()->check()) {
//    }
    Route::get('/profile', [MainController::class, 'index']);
});

Route::get('/item', [ItemController::class, 'get']);
Route::get('/item/{id}', [ItemController::class, 'getOne']);
Route::post('/item', [ItemController::class, 'post']);

Route::get('/game/{id}', [CategoryController::class, 'get']);
Route::get('/category/{id}', [CategoryController::class, 'getOne']);
Route::post('/category', [CategoryController::class, 'post']);
