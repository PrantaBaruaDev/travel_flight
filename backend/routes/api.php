<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassengerController;
use App\Http\Controllers\FlightsController;
use App\Http\Controllers\AirlinesController;
use App\Http\Controllers\AirportsController;
use App\Http\Controllers\CountriesController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\ReservationsController;
use App\Http\Controllers\SeatsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/passengers', PassengerController::class);
Route::apiResource('/flights', FlightsController::class);
Route::apiResource('/airlines', AirlinesController::class);
Route::apiResource('/airports', AirportsController::class);
Route::apiResource('/countries', CountriesController::class);
Route::apiResource('/payments', PaymentsController::class);
Route::apiResource('/reservations', ReservationsController::class);
Route::apiResource('/seats', SeatsController::class);
