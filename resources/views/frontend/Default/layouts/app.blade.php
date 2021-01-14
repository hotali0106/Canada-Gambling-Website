<!DOCTYPE html>
<html lang="ru">

<head>

	<meta charset="utf-8">

	<title>@yield('page-title') - {{ settings('app_name') }}</title>
	<meta name="description" content="HTML template">

	<meta name="viewport" content="width=device-width">

	<link rel="icon" href="{{asset('frontend/Default/img/favicon.png')}}" >

	<link rel="stylesheet" href="{{asset('frontend/Default/css/slick.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/Default/css/grid.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/Default/css/styles.min.css')}}">
	
	<script src="{{asset('frontend/Default/js/jquery-3.4.1.min.js')}}"></script>

</head>

<body>
	@yield('content')

	<!-- SCRIPTS -->
	<script src="{{asset('frontend/Default/js/slick.min.js')}}"></script>
	<script src="{{asset('frontend/Default/js/masonry-docs.min.js')}}"></script>
	<script src="{{asset('frontend/Default/js/custom.js')}}"></script>

</body>
</html>