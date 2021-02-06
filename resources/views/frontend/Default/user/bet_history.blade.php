@extends('frontend.Default.layouts.user')
@section('page_top')
<link rel="stylesheet" type="text/css" href="{{asset('back/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css')}}" />
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.23/css/dataTables.bootstrap4.min.css" />
@stop
@section('profile')
<main class="profile">
    <div class="profile container pt-5">
        <div class="row">
            <div class="side-menu col-md-3 p-0">
                @include('frontend.Default.user.tab')
            </div>
            <div class="col-md-9 p-0">
                <div class="main-section px-4 py-4">
                    <div class="sub-menu mb-4">
                        <ul class="d-flex flex-md-row flex-column">
                            <li>
                                <a href="{{ route('frontend.profile.history.payment') }}" class="py-2 px-4 d-block">Payment History</a>
                            </li>
                            <li>
                                <a href="{{ route('frontend.profile.history.bet') }}" class="active py-2 px-4 d-block">Bets History</a>
                            </li>
                            <li>
                                <a href="{{ route('frontend.profile.history.bonus') }}" class="py-2 px-4 d-block">Bonus History</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="divider"></hr>
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Bet History</h3>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered" id="bet_history_table" style="width:100%">
                            <thead>
                                <tr>
                                    <th style="width: 40%" scope="col">Datetime</th>
                                    <th style="width: 20%" scope="col">Balance</th>
                                    <th style="width: 20%" scope="col">Bet</th>
                                    <th style="width: 20%" scope="col">Win</th>
                                    <th style="width: 20%" scope="col">Game</th>
                                    <th style="width: 20%" scope="col">Percent</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if(isset($bet_history) && count($bet_history))
                                @foreach($bet_history as $history)
                                <tr>
                                    <td>{{$history->date_time}}</td>
                                    <td>{{$history->balance}}</td>
                                    <td>{{$history->bet}}</td>
                                    <td>{{$history->win}}</td>
                                    <td>{{$history->game}}</td>
                                    <td>{{$history->percent}}</td>
                                </tr>
                                @endforeach
                                @endif
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
</main>
@endsection
@section('page_bottom')
<script type="text/javascript" src="{{asset('back/bower_components/datatables.net/js/jquery.dataTables.min.js')}}"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.23/js/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript">
    $( document ).ready(function() {
        $("#bet_history_table").DataTable();
    });
</script>
@stop
