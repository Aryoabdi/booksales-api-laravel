<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();

        return response()->json([
            "succes" => true,
            "message" => "Get All Books",
            "data" => $books
        ], 200);
    }
}
