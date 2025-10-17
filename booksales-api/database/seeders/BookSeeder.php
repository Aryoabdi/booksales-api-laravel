<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'title' => 'Harry Potter and the Philosopher\'s Stone',
                'description' => 'Petualangan pertama Harry Potter di dunia sihir Hogwarts.',
                'price' => 150000,
                'stock' => 25,
                'cover_photo' => 'harry_potter_1.jpg',
                'genre_id' => 1,
                'author_id' => 1,
            ],
            [
                'title' => 'A Game of Thrones',
                'description' => 'Intrik politik dan perebutan kekuasaan di dunia Westeros.',
                'price' => 180000,
                'stock' => 30,
                'cover_photo' => 'game_of_thrones.jpg',
                'genre_id' => 1,
                'author_id' => 2,
            ],
            [
                'title' => 'Kafka on the Shore',
                'description' => 'Novel penuh simbolisme dan imajinasi khas Haruki Murakami.',
                'price' => 170000,
                'stock' => 20,
                'cover_photo' => 'kafka_on_the_shore.jpg',
                'genre_id' => 2,
                'author_id' => 3,
            ],
            [
                'title' => 'Laskar Pelangi',
                'description' => 'Kisah inspiratif anak-anak Belitung yang berjuang untuk pendidikan.',
                'price' => 120000,
                'stock' => 40,
                'cover_photo' => 'laskar_pelangi.jpg',
                'genre_id' => 3,
                'author_id' => 4,
            ],
            [
                'title' => 'The Shining',
                'description' => 'Cerita menegangkan tentang seorang penjaga hotel terpencil dan misteri yang menghantuinya.',
                'price' => 160000,
                'stock' => 15,
                'cover_photo' => 'the_shining.jpg',
                'genre_id' => 4,
                'author_id' => 5,
            ],
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
