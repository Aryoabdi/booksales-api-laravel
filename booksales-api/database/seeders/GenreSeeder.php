<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Genre;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genres = [
            ['name' => 'Fantasy'],
            ['name' => 'Fiction'],
            ['name' => 'Drama'],
            ['name' => 'Horror'],
            ['name' => 'Science Fiction'],
        ];

        foreach ($genres as $genre) {
            Genre::create($genre);
        }
    }
}
