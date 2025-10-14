<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Data Genre</title>
  <link rel="stylesheet" href="{{ asset('style.css') }}">
</head>
<body>
  <h1>Daftar Genre</h1>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nama Genre</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($genres as $genre)
        <tr>
          <td>{{ $genre['id'] }}</td>
          <td>{{ $genre['name'] }}</td>
        </tr>
      @endforeach
    </tbody>
  </table>
</body>
</html>