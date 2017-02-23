<!DOCTYPE html>
<html>
<head>
    <title>Cars {{ $make }}</title>
</head>
<body>
@foreach ($cars as $car)
<h1>Car {{ $car->id }}</h1>
<ul>
    <li>Make: {{ $car->make }}</li>
    <li>Model: {{ $car->model }}</li>
    <li>Produced on: {{ $car->produced_on }}</li>
</ul>

@endforeach
</body>
</html>