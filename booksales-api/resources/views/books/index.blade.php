<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Daftar Buku</title>
  <link rel="stylesheet" href="{{ asset('style.css') }}">
</head>
<body>
    <h1>Daftar Buku</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Judul</th>
                <th>Genre</th>
                <th>Tahun</th>
                <th>Harga</th>
                <th>Penulis</th>
                <th>Negara</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($books as $book)
                <tr>
                    <td>{{ $book->id }}</td>
                    <td>{{ $book->title }}</td>
                    <td>{{ $book->genre }}</td>
                    <td>{{ $book->year }}</td>
                    <td>Rp {{ number_format($book->price, 0, ',', '.') }}</td>
                    <td>{{ $book->author->name }}</td>
                    <td>{{ $book->author->country }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>