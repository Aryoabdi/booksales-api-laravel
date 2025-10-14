<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            ['author_id' => 1, 'title' => 'Harry Potter and the Philosopher\'s Stone', 'genre' => 'Fantasy', 'year' => 1997, 'price' => 150000],
            ['author_id' => 2, 'title' => 'A Game of Thrones', 'genre' => 'Fantasy', 'year' => 1996, 'price' => 180000],
            ['author_id' => 3, 'title' => 'Kafka on the Shore', 'genre' => 'Fiction', 'year' => 2002, 'price' => 170000],
            ['author_id' => 4, 'title' => 'Laskar Pelangi', 'genre' => 'Drama', 'year' => 2005, 'price' => 120000],
            ['author_id' => 5, 'title' => 'The Shining', 'genre' => 'Horror', 'year' => 1977, 'price' => 160000],
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
