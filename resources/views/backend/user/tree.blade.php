@extends('backend.layouts.app')

@section('page-title', $role->name .' '. trans('app.tree'))
@section('page-heading', $role->name .' '. trans('app.tree'))

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">{{ $role->name }} @lang('app.tree')</h3>
            </div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            @if( auth()->user()->hasRole(['admin','agent']) )
                                <th>@lang('app.agent')</th>
                            @endif
                            <th>@lang('app.distributor')</th>
                            <th>@lang('app.shop')</th>
                            <th>@lang('app.manager')</th>
                            <th>@lang('app.cashier')</th>
                            <th>@lang('app.user')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if (count($users))
                            @foreach ($users as $user)
                                <tr>
                                @if($user->hasRole('agent'))
                                    <td rowspan="{{ $user->getRowspan() }}">
                                        <a href="{{ route('backend.user.edit', $user->id) }}">
                                            {{ $user->username ?: trans('app.n_a') }}
                                        </a>
                                    </td>
                                    @if( $distributors = $user->getInnerUsers() )
                                        @foreach($distributors AS $distributor)
                                            @include('backend.user.partials.distributor')
                                        @endforeach
                                    @else
                                        <td colspan="5"></td></tr><tr></tr><tr>
                                    @endif
                                @endif
                                @if($user->hasRole('distributor'))
                                    @include('backend.user.partials.distributor', ['distributor' => $user])
                                @endif
                                </tr>
                            @endforeach
                        @else
                            <tr><td colspan="6">@lang('app.no_data')</td></tr>
                        @endif
                        </tbody>
                        <thead>
                        <tr>
                            @if( auth()->user()->hasRole(['admin','agent']) )
                                <th>@lang('app.agent')</th>
                            @endif
                            <th>@lang('app.distributor')</th>
                            <th>@lang('app.shop')</th>
                            <th>@lang('app.manager')</th>
                            <th>@lang('app.cashier')</th>
                            <th>@lang('app.user')</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </section>


@stop

@section('scripts')
    <script>


    </script>
@stop