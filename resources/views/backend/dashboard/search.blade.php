@extends('backend.layouts.app')

@section('page-title', trans('app.search'))
@section('page-heading', trans('app.search'))

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">

        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">{{ __('app.search_results', ['query' => $query]) }}</h3>
            </div>
        </div>



        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.users')</h3>
            </div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>@lang('app.username')</th>

                            @permission('users.balance.manage')
                            <th>@lang('app.balance')</th>
                            <th>@lang('app.bonus')</th>
                            <th>@lang('app.wager')</th>
                            <th>@lang('app.pay_in')</th>
                            <th>@lang('app.pay_out')</th>
                            @endpermission

                            <th>@lang('app.shop')</th>

                        </tr>
                        </thead>
                        <tbody>
                        @if (count($users))
                            @foreach ($users as $user)
                                @include('backend.user.partials.row', ['show_shop' => true])
                            @endforeach
                        @else
                            <tr><td colspan="7">@lang('app.no_data')</td></tr>
                        @endif
                        </tbody>
                        <thead>
                        <tr>
                            <th>@lang('app.username')</th>

                            @permission('users.balance.manage')
                            <th>@lang('app.balance')</th>
                            <th>@lang('app.bonus')</th>
                            <th>@lang('app.wager')</th>
                            <th>@lang('app.pay_in')</th>
                            <th>@lang('app.pay_out')</th>
                            @endpermission

                            <th>@lang('app.shop')</th>

                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.pay_stats')</h3>
            </div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>@lang('app.system')</th>
                            <th>@lang('app.sum')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.date')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if (count($pay_stats))
                            @foreach ($pay_stats as $stat)
                                @include('backend.stat.partials.row_stat', ['show_shop' => true])
                            @endforeach
                        @else
                            <tr><td colspan="5">@lang('app.no_data')</td></tr>
                        @endif
                        </tbody>
                        <thead>
                        <tr>
                            <th>@lang('app.system')</th>
                            <th>@lang('app.sum')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.date')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>


        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.game_stats')</h3>
            </div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>@lang('app.game')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.balance')</th>
                            <th>@lang('app.bet')</th>
                            <th>@lang('app.win')</th>
                            <th>@lang('app.in_game')</th>
                            <th>@lang('app.in_jps')</th>
                            <th>@lang('app.in_jpg')</th>
                            <th>@lang('app.profit')</th>
                            <th>@lang('app.denomination')</th>
                            <th>@lang('app.date')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if (count($game_stats))
                            @foreach ($game_stats as $stat)
                                @include('backend.games.partials.row_stat', ['show_shop' => true])
                            @endforeach
                        @else
                            <tr><td colspan="12">@lang('app.no_data')</td></tr>
                        @endif
                        </tbody>
                        <thead>
                        <tr>
                            <th>@lang('app.game')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.balance')</th>
                            <th>@lang('app.bet')</th>
                            <th>@lang('app.win')</th>
                            <th>@lang('app.in_game')</th>
                            <th>@lang('app.in_jps')</th>
                            <th>@lang('app.in_jpg')</th>
                            <th>@lang('app.profit')</th>
                            <th>@lang('app.denomination')</th>
                            <th>@lang('app.date')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>


        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.bank_stats')</h3>
            </div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>@lang('app.name')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.old')</th>
                            <th>@lang('app.new')</th>
                            <th>@lang('app.sum')</th>
                            <th>@lang('app.date')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if (count($bank_stats))
                            @foreach ($bank_stats as $stat)
                                @include('backend.stat.partials.row_bank_stat', ['show_shop' => true])
                            @endforeach
                        @else
                            <tr><td colspan="7">@lang('app.no_data')</td></tr>
                        @endif
                        </tbody>
                        <thead>
                        <tr>
                            <th>@lang('app.name')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.old')</th>
                            <th>@lang('app.new')</th>
                            <th>@lang('app.sum')</th>
                            <th>@lang('app.date')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>


        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.shop_stats')</h3>
            </div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>@lang('app.name')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.sum')</th>
                            <th>@lang('app.date')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if (count($shop_stats))
                            @foreach ($shop_stats as $stat)
                                @include('backend.stat.partials.row_shop_stat', ['show_shop' => true])
                            @endforeach
                        @else
                            <tr><td colspan="5">@lang('app.no_data')</td></tr>
                        @endif
                        </tbody>
                        <thead>
                        <tr>
                            <th>@lang('app.name')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.sum')</th>
                            <th>@lang('app.date')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>


        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.shift_stats')</h3>
            </div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>@lang('app.shift')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.date_start')</th>
                            <th>@lang('app.date_end')</th>
                            <th>@lang('app.credit')</th>
                            <th>@lang('app.in')</th>
                            <th>@lang('app.out')</th>
                            <th>@lang('app.total')</th>
                            <th>@lang('app.banks')</th>
                            <th>@lang('app.returns')</th>
                            <th>@lang('app.money')</th>
                            <th>@lang('app.in')</th>
                            <th>@lang('app.out')</th>
                            <th>@lang('app.total')</th>
                            <th>@lang('app.profit')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if (count($shift_stats))
                            @foreach ($shift_stats as $num=>$stat)
                                @include('backend.stat.partials.row_shift_stat', ['show_shop' => true])
                            @endforeach
                        @else
                            <tr><td colspan="16">@lang('app.no_data')</td></tr>
                        @endif
                        </tbody>
                        <thead>
                        <tr>
                            <th>@lang('app.shift')</th>
                            <th>@lang('app.user')</th>
                            <th>@lang('app.date_start')</th>
                            <th>@lang('app.date_end')</th>
                            <th>@lang('app.credit')</th>
                            <th>@lang('app.in')</th>
                            <th>@lang('app.out')</th>
                            <th>@lang('app.total')</th>
                            <th>@lang('app.banks')</th>
                            <th>@lang('app.returns')</th>
                            <th>@lang('app.money')</th>
                            <th>@lang('app.in')</th>
                            <th>@lang('app.out')</th>
                            <th>@lang('app.total')</th>
                            <th>@lang('app.profit')</th>
                            <th>@lang('app.shop')</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

    </section>

    <div class="modal fade" id="openAddModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="{{ route('backend.user.balance.update') }}" method="POST">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">@lang('app.balance') @lang('app.pay_in')</h4>
                    </div>
                    <div class="modal-body">
                        @if($happyhour && auth()->user()->hasRole('cashier'))
                            <div class="alert alert-success">
                                <h4>@lang('app.happyhours')</h4>
                                <p> @lang('app.all_player_deposits') {{ $happyhour->multiplier }}</p>
                            </div>
                        @endif
                        <div class="form-group">
                            <label for="OutSum">@lang('app.sum')</label>
                            <input type="text" class="form-control" id="OutSum" name="summ" placeholder="@lang('app.sum')" required>
                            <input type="hidden" name="type" value="add">
                            <input type="hidden" id="AddId" name="user_id">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">@lang('app.close')</button>
                        <button type="submit" class="btn btn-primary">@lang('app.pay_in')</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="openOutModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="{{ route('backend.user.balance.update') }}" method="POST">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">@lang('app.balance') @lang('app.pay_out')</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="OutSum">@lang('app.sum')</label>
                            <input type="text" class="form-control" id="OutSum" name="summ" placeholder="@lang('app.sum')" required>
                            <input type="hidden" name="type" value="out">
                            <input type="hidden" id="OutId" name="user_id">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">@lang('app.close')</button>
                        <button type="submit" class="btn btn-primary">@lang('app.pay_out')</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

@stop

@section('scripts')
    <script>

        var table = $('#users-table').dataTable();
        $("#view").change(function () {
            $("#shops-form").submit();
        });

        $("#filter").detach().appendTo("div.toolbar");



        $("#status").change(function () {
            $("#users-form").submit();
        });
        $("#role").change(function () {
            $("#users-form").submit();
        });
        $('.addPayment').click(function(event){
            if( $(event.target).is('.newPayment') ){
                var id = $(event.target).attr('data-id');
            }else{
                var id = $(event.target).parents('.newPayment').attr('data-id');
            }
            $('#AddId').val(id);
        });

        $('.outPayment').click(function(event){
            if( $(event.target).is('.newPayment') ){
                var id = $(event.target).attr('data-id');
            }else{
                var id = $(event.target).parents('.newPayment').attr('data-id');
            }
            $('#OutId').val(id);
        });


        $('.btn-box-tool').click(function(event){
            if( $('.users_show').hasClass('collapsed-box') ){
                $.cookie('users_show', '1');
            } else {
                $.removeCookie('users_show');
            }
        });

        if( $.cookie('users_show') ){
            $('.users_show').removeClass('collapsed-box');
            $('.users_show .btn-box-tool i').removeClass('fa-plus').addClass('fa-minus');
        }

    </script>
@stop