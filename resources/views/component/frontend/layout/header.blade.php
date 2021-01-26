<header>
    <div id="menu-toggle">
        <div id="menu_button">
            <input type="checkbox" id="menu_checkbox">
            <label for="menu_checkbox" id="menu_label">
                <div id="menu_text_bar"></div>
            </label>
        </div>
        
        <ul id="header-menu">
            <li class="d-md-block d-lg-none"><a href="#">Games</a></li>
            <li><a href="{{url('bonus')}}">Bonus</a></li>
            <li><a href="#">Promotions</a></li>
            <li><a href="#">About Us</a></li>
            <li class="d-md-block d-lg-none"><a href="javascript:fn_deposit('{{Auth::check()}}')">Deposit</a></li>
            @if(Auth::check())
            <li class="d-md-block d-lg-none"><a href="{{route('frontend.profile.info')}}">MY Account</a></li>
            <li><a href="{{route('frontend.auth.logout')}}">Sign Out</a></li>
            @else
            <li class="d-md-block d-lg-none"><a href="#signup-modal">Sign Up</a></li>
            <li class="d-md-block d-lg-none"><a href="#signin-modal">Sign In</a></li>
            @endif
        </ul>
        <span>Menu</span>
    </div>
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
            @if(!Auth::check())
            <div class="account-header-menu-item">
                <a href="#signup-modal">
                    <img src="{{asset('frontend/Page/image/signup-icon.png')}}" />
                    <span>sign up</span>
                </a>
            </div>
            <div class="account-header-menu-item">
                <a href="#signin-modal" data-ol-has-click-handler>
                    <img src="{{asset('frontend/Page/image/signin-icon.png')}}" />
                    <span>sign in</span>
                </a>
            </div>
            @else
            <div class="account-header-menu-item">
                <a href="{{route('frontend.profile.info')}}" data-ol-has-click-handler>
                    <img src="{{asset('frontend/Page/image/signin-icon.png')}}" />
                    <span>my account</span>
                </a>
            </div>
            @endif
            <div class="account-header-menu-item">
                <a href="#">
                    <span>games</span>
                </a>
            </div>
        </div>          
    </div>
</header>