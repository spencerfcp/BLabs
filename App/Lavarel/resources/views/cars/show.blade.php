<!DOCTYPE html>
<html>
<head>
    <title>Cars</title>
</head>
<body>
@foreach ($cars as $car)
<h1>Car {{ $car->name }}</h1>
<ul>
    <li>Make: {{ $car->rating }}</li>
    <li>{{ $car->snippet_text}}</li>
    <li><img src="{{ $car->rating_img_url_small}}"/></li>
    <li><img src="{{ $car->image_url}}"/></li>
    <a href="{{ $car->url}}">View More On Yelp</a>


</ul>
@endforeach
</body>
</html>