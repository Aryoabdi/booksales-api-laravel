<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $authors = [
            ['name' => 'J.K. Rowling', 'country' => 'UK'],
            ['name' => 'George R.R. Martin', 'country' => 'USA'],
            ['name' => 'Haruki Murakami', 'country' => 'Japan'],
            ['name' => 'Andrea Hirata', 'country' => 'Indonesia'],
            ['name' => 'Stephen King', 'country' => 'USA'],
        ];

        foreach ($authors as $author) {
            Author::create($author);
        }
    }
}
