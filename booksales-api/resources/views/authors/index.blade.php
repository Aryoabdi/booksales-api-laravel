<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Data Author</title>
  <link rel="stylesheet" href="{{ asset('style.css') }}">
</head>
<body>
  <h1>Daftar Author</h1>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nama Author</th>
        <th>Negara</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($authors as $author)
        <tr>
          <td>{{ $author->id }}</td>
          <td>{{ $author->name }}</td>
          <td>{{ $author->country }}</td>
        </tr>
      @endforeach
    </tbody>
  </table>
</body>
</html>