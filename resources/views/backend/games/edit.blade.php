@extends('backend.layouts.app')

@section('page-title', trans('app.edit_game'))
@section('page-heading', $game->name)

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">
        <div class="row">
            <div class="col-md-3">

                <div class="box box-primary">
                    <div class="box-body box-profile">
                        <center>
                            <img class="img-responsive" src="{{ $edit ? '/frontend/Default/ico/' . $game->name . '.jpg' : '' }}" alt="{{ $edit ? $game->name : '' }}">
                        </center>
                        <ul class="list-group list-group-unbordered">
                            <li class="list-group-item">
                                <b>@lang('app.percent')</b> <a class="pull-right">{{ $game->shop?$game->shop->percent:'0' }}</a>
                            </li>
                            @permission('games.in_out')
                            <li class="list-group-item">
                                <b>@lang('app.in')</b> <a class="pull-right">{{ $game->stat_in }}</a>
                            </li>
                            <li class="list-group-item">
                                <b>@lang('app.out')</b> <a class="pull-right">{{ $game->stat_out }}</a>
                            </li>
                            <li class="list-group-item">
                                <b>@lang('app.total')</b>
                                <a class="pull-right">
                                    @if(($game->stat_in - $game->stat_out) >= 0)
                                        <span class="text-green">
		@else
                                                <span class="text-red">
		@endif
                                                    {{ number_format(abs($game->stat_in-$game->stat_out), 4, '.', '') }}
		</span>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <b>@lang('app.rtp')</b> <a class="pull-right">{{ $game->stat_in > 0 ? number_format(($game->stat_out / $game->stat_in) * 100, 2, '.', '') : '0.00' }}</a>
                            </li>
                            @endpermission
                        </ul>

                        @permission('games.delete')
                        <a href="{{ route('backend.game.delete', $game->id) }}" class="btn btn-danger btn-block"
                           data-method="DELETE"
                           data-confirm-title="@lang('app.please_confirm')"
                           data-confirm-text="@lang('app.are_you_sure_delete_game')"
                           data-confirm-delete="@lang('app.yes_delete_him')">
                            <b>DELETE</b></a>
                        @endpermission
                    </div>
                </div>

                <div class="box box-primary">
                    <div class="box-body">
                        <h4>@lang('app.latest_stats')</h4>

                        <table class="table table-borderless table-striped">
                            <thead>
                            <tr>
                                <th>@lang('app.user')</th>
                                <th>@lang('app.win')</th>
                            </tr>
                            </thead>
                            <tbody>

                            @if (count($game_stat))
                                @foreach ($game_stat as $stat)
                                    <tr>
                                        <td>
                                            <a href="{{ route('backend.game_stat', ['user' => $stat->user->username])  }}">
                                                {{ $stat->user->username }}
                                            </a>
                                        </td>
                                        <td>{{ $stat->win }}</td>
                                    </tr>
                                @endforeach
                            @else
                                <tr><td colspan="2">@lang('app.no_data')</td></tr>
                            @endif

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>

            <div class="col-md-9" id="colrighttemp">
                <div class="nav-tabs-custom">
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a id="details-tab"
                               data-toggle="tab"
                               href="#details">
                                @lang('app.game_details')
                            </a>
                        </li>
                        @if ( !($game->winline === '' && $game->winbonus === '' && $game->gamebank === '' &&
                            $game->garant_win === '' && $game->garant_bonus === '' &&
                            $game->game_win->winline === '' && $game->game_win->winbonus === '' ) )
                            <li>
                                <a id="authentication-tab"
                                   data-toggle="tab"
                                   href="#login-details">
                                    @lang('app.game_settings')
                                </a>
                            </li>
                        @endif

                        @if ( !($game->winline === '' && $game->winbonus === '' && $game->gamebank === '' &&
                            $game->garant_win === '' && $game->garant_bonus === '' &&
                            $game->game_win->winline === '' && $game->game_win->winbonus === '' ) )
                            <li>
                                <a id="bonus-tab"
                                   data-toggle="tab"
                                   href="#bonus-details">
                                    @lang('app.game_bonuses')
                                </a>
                            </li>
                        @endif

                    </ul>

                    <div class="tab-content" id="nav-tabContent">
                        <div class="active tab-pane" id="details">
                            {!! Form::open(['route' => ['backend.game.update', $game->id], 'method' => 'POST', 'id' => 'details-form']) !!}
                            @include('backend.games.partials.base', ['profile' => false])
                            {!! Form::close() !!}
                        </div>


                        <div class="tab-pane" id="login-details">
                            {!! Form::open(['route' => ['backend.game.update', $game->id], 'method' => 'POST', 'id' => 'login-details-form']) !!}
                            @include('backend.games.partials.match')
                            {!! Form::close() !!}
                        </div>

                        <div class="tab-pane" id="bonus-details">
                            {!! Form::open(['route' => ['backend.game.update', $game->id], 'method' => 'POST', 'id' => 'bonus-details-form']) !!}
                            @include('backend.games.partials.bonus')
                            {!! Form::close() !!}
                        </div>

                    </div>

                </div>

                <script src="/back/js/Chart.min.js"></script>

                <div class="box box-info">
                    <div class="box-header with-border">
                        <h3 class="box-title">@lang('app.line_chart')</h3>
                    </div>
                    <div class="box-body">
                        <div class="chart">
                            <canvas id="canvas"></canvas>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    </section>





    @php

        $date_start = date("Y-m-d H:i:s", strtotime('-60 days', time()));
        $date_end = date("Y-m-d H:i:s");
        $labels = [];
        $wins = [];
        $bets = [];

        for($i=1; $i<=60; $i++){
            $label = date("Y-m-d", strtotime(-60 + $i . ' days', time()));
            $labels[] = $label;
            $wins[$label] = 0;
            $bets[$label] = 0;
        }

        foreach($game->statistics AS $stat){
            $label = date("Y-m-d", strtotime($stat->date_time));
            if( isset($wins[$label]) ){
                $wins[$label] += $stat->win;
            }
            if( isset($bets[$label]) ){
                $bets[$label] += $stat->bet;
            }
        }

//echo '<pre>';
    //print_r($labels);
    //echo '</pre>';

    @endphp

    <script>

        window.chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(201, 203, 207)'
        };

        Chart.scaleService.updateScaleDefaults('linear', {
            ticks: {
                min: 0
            }
        });

        var color = Chart.helpers.color;
        var config = {
            type: 'line',
            data: {
                labels: ["{!! implode('","', $labels) !!}"],
                datasets: [{
                    label: 'Win',
                    backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.blue,
                    fill: false,
                    data: [@foreach($wins AS $win) {{ $win }}, @endforeach],
                }, {
                    label: 'Bet',
                    backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.red,
                    fill: false,
                    data: [@foreach($bets AS $bet) {{ $bet }}, @endforeach],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: '@lang('app.line_chart')'
                },
                scales: {
                    xAxes: [{
                        type: 'category',
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: '@lang('app.date')'
                        },
                        ticks: {
                            major: {
                                fontStyle: 'bold',
                                fontColor: '#FF0000'
                            }
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: '@lang('app.sum_bet')'
                        }
                    }]
                }
            }
        };

        window.onload = function() {
            var ctx = document.getElementById('canvas').getContext('2d');
            window.myLine = new Chart(ctx, config);
        };



    </script>

@stop

@section('scripts')
    <script>
        $('.changeAddSum').click(function(event){
            $('#AddSum').val($(event.target).data('value'));
            $('#gamebank_add').submit();
        });
    </script>
@stop