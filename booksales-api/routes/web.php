<?php

use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController; 
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/genres', [GenreController::class, 'index']);

Route::get('/authors', [AuthorController::class, 'index']);

Route::get('/books', [BookController::class, 'index']);


Route::get('/', function () {
    return view('welcome');
});
