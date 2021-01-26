<!DOCTYPE html>
<html lang="en" class="notranslate" translate="no">
<head>
	<meta name="google" content="notranslate">
	<meta name="author" content="JamesJ & Applewood">
	<meta name="description" content="HTML template">
	<meta name="viewport" content="width=device-width">
	<meta name="keywords" content="Canada777+online+casino">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="description" content="Canada777 online casino makes gambling simpler. Easy and fast payouts and account verification, promotions and VIP loyalty program.">

    <title>@yield('page-title') - {{ settings('app_name') }}</title>
    
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="{{asset('frontend/Page/css/jquery.steps.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('frontend/Page/css/style.css')}}" />

    @yield('page_top')
    
</head>
<body>
	<header>
		<div class="header-content">
            <div class="logo">
                <a href="#" class="d-flex">
                    <img src="{{asset('frontend/Page/image/logo.png')}}" />
                </a>
            </div>
            <div class="account-header-menu d-none d-sm-none d-md-none d-lg-flex">
                <div class="account-header-menu-item">
                    <a href="javascript:fn_deposit('{{Auth::check()}}')">
                        <img src="{{asset('frontend/Page/image/deposit-icon.png')}}" />
                        <span>deposit</span>
                    </a>
                </div>
                <div class="account-header-menu-item">
                    <a href="{{route('frontend.auth.logout')}}" data-ol-has-click-handler>
                        <img src="{{asset('frontend/Page/image/signin-icon.png')}}" />
                        <span>sign out</span>
                    </a>
                </div>
                <div class="account-header-menu-item">
                    <a href="{{ url('/categories/all') }}">
                        <span>games</span>
                    </a>
                </div>
                <div class="account-header-menu-item">
                    <a href="{{route('frontend.profile.info')}}">
                        <span>{{Auth::user()->username}}</span>
                    </a>
                </div>
            </div>          
        </div>
    </header>
    @include('component.frontend.layout.deposit')
	@yield('profile')
	<footer></footer>
	<!-- Remember to include jQuery :) -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

	<!-- jQuery Modal -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>

	<!-- jQuery Validation -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"></script>

	<!-- jQuery Steps -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-steps/1.1.0/jquery.steps.min.js"></script>


	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>

    <script type="text/javascript" src="{{asset('frontend/Page/js/script.js')}}"></script>

    @yield('page_bottom')
</body>
</html>