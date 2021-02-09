<header class="main-header">
    <!-- Logo -->
    <a class="logo" href="{{ url('/') }}">
        <span class="logo-mini"><b>C</b></span>
        <span class="logo-lg"><b>CANADA 777</b> <small>/ mrs</small></span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only">@lang('app.toggle_navigation')</span>
        </a>

<div class="navbar-custom-menu">
   <ul class="nav navbar-nav">
   
      <li class="dropdown tasks-menu">
         <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-time text-aqua"></i></a>
         <ul class="dropdown-menu">
            <li class="header"><b>{{ auth()->user()->username }}</b></li>
            <li>
               <ul class="menu">

				  <li><a href="{{ route('backend.start_shift') }}"> @lang('app.start_shift')</a></li>

               </ul>
            </li>
         </ul>
      </li>


@if (Auth::user()->hasRole(['cashier', 'distributor']))
      <li class="dropdown tasks-menu">
         <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-stats text-aqua"></i></a>
         <ul class="dropdown-menu">
            <li class="header"><b>{{ auth()->user()->username }}</b></li>
            <li>
               <ul class="menu">

				@if( Auth::user()->hasRole('distributor') && auth()->user()->present()->shop)
				  <li><a href="{{ route('backend.shop.action', [auth()->user()->present()->shop, 'jpg_out']) }}"
                    data-method="DELETE"
                    data-confirm-title="@lang('app.please_confirm')"
                    data-confirm-text="{{ auth()->user()->present()->shop->name }} / @lang('app.jpg_out')"
                    data-confirm-delete="@lang('app.yes_delete_him')"> @lang('app.jpg_out')</a></li>
				  <li><a href="{{ route('backend.shop.action', [auth()->user()->present()->shop, 'games_out']) }}"
                    data-method="DELETE"
                    data-confirm-title="@lang('app.please_confirm')"
                    data-confirm-text="{{ auth()->user()->present()->shop->name }} / @lang('app.games_out')"
                    data-confirm-delete="@lang('app.yes_delete_him')"> @lang('app.games_out')</a></li>
				  <li><a href="{{ route('backend.shop.action', [auth()->user()->present()->shop, 'return_out']) }}"
                    data-method="DELETE"
                    data-confirm-title="@lang('app.please_confirm')"
                    data-confirm-text="{{ auth()->user()->present()->shop->name }} / @lang('app.returns_out')"
                    data-confirm-delete="@lang('app.yes_delete_him')"> @lang('app.returns_out')</a></li>
				@endif

				@if( Auth::user()->hasRole('cashier') && auth()->user()->present()->shop)
				  <li><a href="{{ route('backend.user.action', ['users_out']) }}"
                    data-method="DELETE"
                    data-confirm-title="@lang('app.please_confirm')"
                    data-confirm-text="{{ auth()->user()->present()->shop->name }} / @lang('app.users_out')"
                    data-confirm-delete="@lang('app.yes_delete_him')"> @lang('app.users_out')</a></li>
				  <li><a href="{{ route('backend.user.action', ['pin_out']) }}"
                    data-method="DELETE"
                    data-confirm-title="@lang('app.please_confirm')"
                    data-confirm-text="{{ auth()->user()->present()->shop->name }} / @lang('app.pin_out')"
                    data-confirm-delete="@lang('app.yes_delete_him')"> @lang('app.pin_out')</a></li>
				@endif

               </ul>
            </li>
         </ul>
      </li>
@endif

    <li class="dropdown tasks-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-off text-aqua"></i></a>
        <ul class="dropdown-menu">
            <li class="header"><b>{{ auth()->user()->username }}</b></li>
            <li>
                <ul class="menu">

                    @if (config('session.driver') == 'database')
                        <li><a href="{{ route('backend.profile.sessions') }}"> @lang('app.active_sessions')</a></li>
                    @endif

                    @if( Auth::user()->shop )
                        @if( Auth::user()->shop->is_blocked )
                            @permission('shops.unblock')
                            <li><a href="{{ route('backend.settings.shop_unblock') }}"
                                   data-method="PUT"
                                   data-confirm-title="@lang('app.please_confirm')"
                                   data-confirm-text="@lang('app.are_you_sure_unblock_shop')"
                                   data-confirm-delete="@lang('app.unblock')"
                                > UnBlock Shop</a></li>
                            @endpermission
                        @else
                            @permission('shops.block')
                            <li><a href="{{ route('backend.settings.shop_block') }}"
                                   data-method="PUT"
                                   data-confirm-title="@lang('app.please_confirm')"
                                   data-confirm-text="@lang('app.are_you_sure_block_shop')"
                                   data-confirm-delete="@lang('app.block')"
                                > Block Shop</a></li>
                            @endpermission
                        @endif
                    @endif

                    <li><a href="{{ route('backend.user.edit', auth()->user()->present()->id) }}"> @lang('app.my_profile')</a></li>
                    <li><a href="{{ route('backend.auth.logout') }}"> @lang('app.logout')</a></li>

                </ul>
            </li>
        </ul>
    </li>

   </ul>
</div>
    </nav>
</header>
<!-- Left side column. contains the logo and sidebar -->