@extends('backend.layouts.app')

@section('page-title', trans('app.edit_user'))
@section('page-heading', $user->present()->username)

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">
        <div class="row">
            @include('backend.user.partials.info')
            <div class="col-md-9">




                <div class="nav-tabs-custom">
                    <ul class="nav nav-tabs">
                        <li @if(!Request::get('date')) class="active" @endif>
                            <a id="details-tab"
                               data-toggle="tab"
                               href="#details">
                                @lang('app.edit_user')
                            </a>
                        </li>
                        <li>
                            <a id="authentication-tab"
                               data-toggle="tab"
                               href="#login-details">
                                @lang('app.latest_activity')
                            </a>
                        </li>
                        <li @if(Request::get('date')) class="active" @endif>
                            <a id="bonus-tab"
                               data-toggle="tab"
                               href="#bonus-details">
                                @lang('app.games_activity')
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content" id="nav-tabContent">
                        <div class="@if(!Request::get('date')) active @endif tab-pane" id="details">
                            {!! Form::open(['route' => ['backend.user.update.details', $user->id], 'method' => 'PUT', 'id' => 'details-form']) !!}
                            @include('backend.user.partials.edit')
                            {!! Form::close() !!}
                        </div>


                        <div class="tab-pane" id="login-details">
                            @if (count($userActivities))
                                <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>@lang('app.action')</th>
                                        <th>@lang('app.date')</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($userActivities as $activity)
                                        <tr>
                                            <td>{{ $activity->description }}</td>
                                            <td>{{ $activity->created_at->format(config('app.date_time_format')) }}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            @else
                                <p class="text-muted font-weight-light"><em>@lang('app.no_activity_from_this_user_yet')</em></p>
                            @endif
                        </div>

                        <div class="tab-pane @if(Request::get('date')) active @endif" id="bonus-details">

                            <form action="" method="GET">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>@lang('app.date')</label>
                                            <input type="text" class="form-control" name="date" value="{{ Request::get('date') }}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>&nbsp;</label><br>
                                            <button type="submit" class="btn btn-primary">
                                                @lang('app.filter')
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            @if (count($numbers) || count($max_wins) || count($max_bets))
                                <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>@lang('app.games')</th>
                                        <th>@lang('app.count2')</th>
                                        <th>@lang('app.max_bet')</th>
                                        <th>@lang('app.max_win')</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @if ($numbers)
                                        @foreach($numbers as $number)
                                            <tr>
                                                <td>{{ $number->game }}</td>
                                                <td>{{ $number->summ }} </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        @endforeach
                                    @endif
                                    @if ($max_wins)
                                        @foreach($max_wins as $win)
                                            <tr>
                                                <td>{{ $win->game }}</td>
                                                <td></td>
                                                <td></td>
                                                <td>{{ $win->max_win }} </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                    @if ($max_bets)
                                        @foreach($max_bets as $bet)
                                            <tr>
                                                <td>{{ $bet->game }}</td>
                                                <td></td>
                                                <td>{{ $bet->max_bet }} </td>
                                                <td></td>
                                            </tr>
                                        @endforeach
                                    @endif
                                    </tbody>
                                </table>
                            @else
                                <p class="text-muted font-weight-light"><em>@lang('app.no_activity_from_this_user_yet')</em></p>
                            @endif
                        </div>

                    </div>

                </div>




            </div>
        </div>
    </section>

@stop

@section('scripts')
    <script>
        $(function() {
            $('input[name="date"]').datepicker({
                format: 'yyyy-mm-dd',
            });
        });
    </script>
    {!! HTML::script('/back/js/as/app.js') !!}
    {!! HTML::script('/back/js/as/btn.js') !!}
    {!! HTML::script('/back/js/as/profile.js') !!}
    {!! JsValidator::formRequest('VanguardLTE\Http\Requests\User\UpdateDetailsRequest', '#details-form') !!}
    {!! JsValidator::formRequest('VanguardLTE\Http\Requests\User\UpdateLoginDetailsRequest', '#login-details-form') !!}
@stop