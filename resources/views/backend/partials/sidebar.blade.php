<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->

        <div class="user-panel">
            <div class="pull-left image">
                <img src="/back/img/{{ auth()->user()->present()->role_id }}.png" class="img-circle">
            </div>
            <div class="pull-left info">
			<p>Balance:

                    @if( Auth::user()->hasRole(['cashier', 'manager']) )
                        @php
                            $shop = \VanguardLTE\Shop::find( auth()->user()->present()->shop_id );
                            echo $shop?number_format($shop->balance,2,".",""):0;
                        @endphp
                    @if( auth()->user()->present()->shop )
                        {{ auth()->user()->present()->shop->currency }}
                    @endif
                    @else
                        {{ number_format(auth()->user()->present()->balance,2,".","") }}
                        @if( auth()->user()->present()->shop )
                            {{ auth()->user()->present()->shop->currency }}
                        @endif
                    @endif

			</p>

			<a href="javascript:;" data-toggle="modal" data-target="#openChangeModal">
				<i class="fa fa-circle text-success"></i>
				@if(Auth::user()->shop) {{ Auth::user()->shop->name }} @else @lang('app.no_shop') @endif
			</a>

            </div>
        </div>
        <!-- search form -->

        @permission('full.search')
        <form action="{{ route('backend.search') }}" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="@lang('app.search')">
                <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
        </form>
        @endpermission

        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">

            <li class="header">@lang('app.main_navigation')</li>

            @permission('dashboard')
            <li class="{{ Request::is('backend') ? 'active' : ''  }}">
                <a href="{{ route('backend.dashboard') }}">
                    <i class="fa fa-home"></i>
                    <span>@lang('app.dashboard')</span>
                </a>
            </li>
            @endpermission

            @permission('users.manage')
            <li class="{{ Request::is('backend/user*') ? 'active' : ''  }}">
                <a href="{{ route('backend.user.list') }}">
                    <i class="fa fa-users"></i>
                    <span>@lang('app.users')</span>
                </a>
            </li>
            @endpermission

            @permission('users.tree')
            <li class="{{ Request::is('backend/tree*') ? 'active' : ''  }}">
                <a href="{{ route('backend.user.tree') }}">
                    <i class="fa fa-users"></i>
                    <span>{{ \VanguardLTE\Role::where('id', auth()->user()->role_id - 1)->first()->name }} @lang('app.tree')</span>
                </a>
            </li>
            @endpermission

            @permission('shops.manage')
            <li class="{{ Request::is('backend/shops*') ? 'active' : ''  }}">
                <a href="{{ route('backend.shop.list') }}">
                    <i class="fa fa-users"></i>
                    <span>@lang('app.shops')</span>
                </a>
            </li>
            @endpermission

            @permission('categories.manage')
            @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6) )
            <li class="{{ Request::is('backend/category*') ? 'active' : ''  }}">
                <a href="{{ route('backend.category.list') }}">
                    <i class="fa fa-server"></i>
                    <span>@lang('app.categories')</span>
                </a>
            </li>
            @endif
            @endpermission

            @permission('returns.manage')
            @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6) )
            <li class="{{ Request::is('backend/returns*') ? 'active' : ''  }}">
                <a href="{{ route('backend.returns.list') }}">
                    <i class="fa fa-server"></i>
                    <span>@lang('app.returns')</span>
                </a>
            </li>
            @endif
            @endpermission

            @permission('happyhours.manage')
            @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6) )
            <li class="{{ Request::is('backend/happyhours*') ? 'active' : ''  }}">
                <a href="{{ route('backend.happyhour.list') }}">
                    <i class="fa fa-server"></i>
                    <span>@lang('app.happyhours')</span>
                </a>
            </li>
            @endif
            @endpermission


            @permission('jpgame.manage')
            @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6) )
            <li class="{{ Request::is('backend/jpgame*') ? 'active' : ''  }}">
                <a href="{{ route('backend.jpgame.list') }}">
                    <i class="fa  fa-money"></i>
                    <span>@lang('app.jpg')</span>
                </a>
            </li>
            @endif
            @endpermission

            @permission('pincodes.manage')
            <li class="{{ Request::is('backend/pincodes*') ? 'active' : ''  }}">
                <a href="{{ route('backend.pincode.list') }}">
                    <i class="fa fa-server"></i>
                    <span>@lang('app.pincodes')</span>
                </a>
            </li>
            @endpermission

            @permission('games.manage')
            @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6) )
            <li class="{{ (Request::is('backend/game') || Request::is('backend/game/*')) ? 'active' : ''  }}">
                <a href="{{ route('backend.game.list') }}">
                    <i class="fa fa-gamepad"></i>
                    <span>@lang('app.games')</span>
                </a>
            </li>
            @endif
            @endpermission

            @if (
                Auth::user()->hasPermission('stats.live') ||
                Auth::user()->hasPermission('stats.pay') ||
                Auth::user()->hasPermission('stats.game') ||
                Auth::user()->hasPermission('stats.bank') ||
                Auth::user()->hasPermission('stats.shop') ||
                Auth::user()->hasPermission('stats.shift')
            )

            <li class="treeview {{ Request::is('backend/live*') || Request::is('backend/statistics*') || Request::is('backend/game_stat*') || Request::is('backend/shop_stat') || Request::is('backend/shift_stat') || Request::is('backend/bank_stat') ? 'active' : '' }}">
                <a href="#">
                    <i class="fa fa-database"></i>
                    <span>Stats</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class=" treeview-menu" id="stats-dropdown">

                    @permission('stats.live')
                    <li class="{{ Request::is('backend/live') ? 'active' : ''  }}">
                        <a  href="{{ route('backend.live_stat') }}">
                            <i class="fa fa-circle-o"></i>
                            @lang('app.live_stats')
                        </a>
                    </li>
                    @endpermission

                    @permission('stats.pay')
                    <li class="{{ Request::is('backend/statistics*') ? 'active' : ''  }}">
                        <a  href="{{ route('backend.statistics') }}">
                            <i class="fa fa-circle-o"></i>
                            @lang('app.statistics')
                        </a>
                    </li>
                    @endpermission

                    @permission('stats.game')
                    <li class="{{ Request::is('backend/game_stat') ? 'active' : ''  }}">
                        <a  href="{{ route('backend.game_stat') }}">
                            <i class="fa fa-circle-o"></i>
                            @lang('app.game_stats')
                        </a>
                    </li>
                    @endpermission

                    @permission('stats.bank')
                    <li class="{{ Request::is('backend/bank_stat') ? 'active' : ''  }}">
                        <a  href="{{ route('backend.bank_stat') }}">
                            <i class="fa fa-circle-o"></i>
                            @lang('app.bank_stats')
                        </a>
                    </li>
                    @endpermission

                    @permission('stats.shop')
                    <li class="{{ Request::is('backend/shop_stat') ? 'active' : ''  }}">
                        <a href="{{ route('backend.shop_stat') }}">
                            <i class="fa fa-circle-o"></i>
                            @lang('app.shop_stats')
                        </a>
                    </li>
                    @endpermission

                    @permission('stats.shift')
                    <li class="{{ Request::is('backend/shift_stat') ? 'active' : ''  }}">
                        <a href="{{ route('backend.shift_stat') }}">
                            <i class="fa fa-circle-o"></i>
                            @lang('app.shift_stats')
                        </a>
                    </li>
                    @endpermission
                </ul>
            </li>

            @endif

            @permission('users.activity')
            <li class="{{ Request::is('backend/activity*') ? 'active' : ''  }}">
                <a href="{{ route('backend.activity.index') }}">
                    <i class="fa fa-server"></i>
                    <span>@lang('app.activity_log')</span>
                </a>
            </li>
            @endpermission

            @permission('permissions.manage')
            @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6) )
            <li  class="{{ Request::is('backend/permission*') ? 'active' : '' }}">
                <a href="{{ route('backend.permission.index') }}">
                    <i class="fa fa-circle-o"></i>
                    <span>@lang('app.permissions')</span>
                </a>
            </li>
            @endif
            @endpermission

            @permission('settings.generator')
            <li class="{{ Request::is('backend/generator*') ? 'active' : ''  }}">
                <a href="{{ route('backend.settings.generator') }}">
                    <i class="fa fa-server"></i>
                    <span>@lang('app.api_generator')</span>
                </a>
            </li>
            @endpermission

            @permission('api.manage')
            <li class="{{ Request::is('backend/api*') ? 'active' : ''  }}">
                <a href="{{ route('backend.api.list') }}">
                    <i class="fa fa-circle-o"></i>
                    <span>@lang('app.api_keys')</span>
                </a>
            </li>
            @endpermission

            @permission('settings.general')
            @if( !(auth()->check() && auth()->user()->shop_id == 0 && auth()->user()->role_id < 6) )
            <li class="{{ Request::is('backend/settings') ? 'active' : ''  }}">
                <a href="{{ route('backend.settings.general') }}">
                    <i class="fa fa-circle-o"></i>
                    <span>@lang('app.settings')</span>
                </a>
            </li>
            @endif
            @endpermission

            @permission('helpers.manage')
            <li class="{{ Request::is('backend/info*') ? 'active' : ''  }}">
                <a href="{{ route('backend.info.list') }}">
                    <i class="fa fa-circle-o"></i>
                    <span>@lang('app.info')</span>
                </a>
            </li>
            @endpermission

        </ul>
    </section>
</aside>

<div class="modal fade" id="openChangeModal"  role="dialog" aria-hidden="true" >
    <div class="modal-dialog" role="document">
        <div class="modal-content">
			<form action="{{ route('backend.profile.setshop') }}" method="POST">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">@lang('app.shops')</h4>
                </div>
				<div class="modal-body">
					<div class="form-group">
						{!! Form::select('shop_id',
                            (Auth::user()->hasRole(['admin','agent']) ? [0 => __('app.no_shop')] : [])
                            +
                            Auth::user()->shops_array(), Auth::user()->shop_id, ['class' => 'form-control select2', 'style' => 'width: 100%;']) !!}
						<input type="hidden" name="_token" value="{{ csrf_token() }}">
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">@lang('app.close')</button>
					<button type="submit" class="btn btn-primary">@lang('app.change')</button>
				</div>
			</form>
        </div>
    </div>
</div>

