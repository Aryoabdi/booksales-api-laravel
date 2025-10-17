<?php

namespace Database\Seeders;

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
            [
                'name' => 'Fantasy',
                'description' => 'Genre yang berisi cerita dengan unsur magis, dunia khayalan, dan makhluk mitologi.'
            ],
            [
                'name' => 'Fiction',
                'description' => 'Genre yang berisi cerita rekaan yang tidak sepenuhnya berdasarkan fakta.'
            ],
            [
                'name' => 'Drama',
                'description' => 'Genre yang berfokus pada konflik emosional dan kehidupan karakter secara mendalam.'
            ],
            [
                'name' => 'Horror',
                'description' => 'Genre yang bertujuan menimbulkan rasa takut, tegang, dan misteri.'
            ],
            [
                'name' => 'Science Fiction',
                'description' => 'Genre yang mengangkat tema sains dan teknologi masa depan, luar angkasa, atau kehidupan alien.'
            ],
        ];

        foreach ($genres as $genre) {
            Genre::create($genre);
        }
    }

}
