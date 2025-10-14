<?php

namespace App\Models;

class Genre
{
    public static function getAll()
    {
        return [
            ['id' => 1, 'name' => 'Fantasy'],
            ['id' => 2, 'name' => 'Science Fiction'],
            ['id' => 3, 'name' => 'Mystery'],
            ['id' => 4, 'name' => 'Romance'],
            ['id' => 5, 'name' => 'Horror'],
        ];
    }
}
