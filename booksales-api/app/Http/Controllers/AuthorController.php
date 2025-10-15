<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = Author::all();

        return response()->json([
            "succes" => true,
            "message" => "Get All Authors",
            "data" => $authors
        ], 200);
    }
}
