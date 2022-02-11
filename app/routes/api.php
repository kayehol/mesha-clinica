<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AtendimentoController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ProcedimentoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/atendimentos', [AtendimentoController::class, 'index']);
Route::get('/clientes', [ClienteController::class, 'index']);
Route::get('/procedimentos', [ProcedimentoController::class, 'index']);

Route::get('/atendimentos/{id}', [AtendimentoController::class, 'show']);

Route::post('/atendimentos', [AtendimentoController::class, 'store']);
Route::delete('/atendimentos/{id}', [AtendimentoController::class, 'delete']);

