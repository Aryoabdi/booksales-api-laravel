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
            [
                'name' => 'J.K. Rowling',
                'photo' => 'jk_rowling.jpg',
                'bio' => 'Penulis asal Inggris, terkenal melalui seri Harry Potter.'
            ],
            [
                'name' => 'George R.R. Martin',
                'photo' => 'george_rr_martin.jpg',
                'bio' => 'Penulis Amerika, dikenal lewat seri A Song of Ice and Fire.'
            ],
            [
                'name' => 'Haruki Murakami',
                'photo' => 'haruki_murakami.jpg',
                'bio' => 'Penulis asal Jepang yang dikenal dengan gaya surreal dan introspektif.'
            ],
            [
                'name' => 'Andrea Hirata',
                'photo' => 'andrea_hirata.jpg',
                'bio' => 'Penulis Indonesia yang terkenal lewat novel Laskar Pelangi.'
            ],
            [
                'name' => 'Stephen King',
                'photo' => 'stephen_king.jpg',
                'bio' => 'Penulis asal Amerika Serikat yang dikenal dengan karya bergenre horor.'
            ],
        ];

        foreach ($authors as $author) {
            Author::create($author);
        }
    }
}
