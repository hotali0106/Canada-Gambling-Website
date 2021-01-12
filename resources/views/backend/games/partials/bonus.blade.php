<ul class="list-group list-group-unbordered">
    <li class="list-group-item">
        <div class="row">
            @foreach([1,3,5,7,9,10] AS $index)

                @php $key = 'garant_bonus' . $index; @endphp
                @if (!$edit || $game->$key !== '')
                    <div class="@if( !$game->shop_id ) col-md-4 @else col-md-6 @endif">
                        <div class="form-group">
                            <label for="{{ $key }}">@lang('app.spin_bonus') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                            {!! Form::select($key, $game->get_values($key, false, $edit ? $game->$key: false), $edit ? $game->$key : '', ['class' => 'form-control', 'required' => true]) !!}
                        </div>
                    </div>
                @endif

                @php $key = 'winbonus' . $index; @endphp
                @if (!$edit || $game->$key !== '')
                    <div class="@if( !$game->shop_id ) col-md-4 @else col-md-6 @endif">
                        <div class="form-group">
                            <label for="{{ $key }}">@lang('app.trigger_bonus') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                            {!! Form::select($key, $game->get_values($key, false, $edit ? $game->$key: false), $edit ? $game->$key : '', ['class' => 'form-control', 'required' => true]) !!}
                        </div>
                    </div>
                @endif

                @if( !$game->shop_id )
                    @php $key = 'winbonus' . $index; @endphp
                    @if (!$edit || $game->game_win->$key !== '')
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="{{ $key }}">@lang('app.volatility_bonus') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                                {!! Form::select('match_' . $key, $game->get_values('match_' . $key, false, $edit ? $game->game_win->$key: false), $edit ? $game->game_win->$key : '', ['class' => 'form-control', 'required' => true]) !!}
                            </div>
                        </div>
                    @endif
                @endif

            @endforeach
        </div>
    </li>
</ul>


<ul class="list-group list-group-unbordered">
    <li class="list-group-item">
        <div class="row">
            @foreach([1,3,5,7,9,10] AS $index)


                @php $key = 'garant_win_bonus' . $index; @endphp
                @if (!$edit || $game->$key !== '')
                    <div class="@if( !$game->shop_id ) col-md-4 @else col-md-6 @endif">
                        <div class="form-group">
                            <label for="{{ $key }}">@lang('app.spin_in_bonus') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                            {!! Form::select($key, $game->get_values($key, false, $edit ? $game->$key: false), $edit ? $game->$key : '', ['class' => 'form-control', 'required' => true]) !!}
                        </div>
                    </div>
                @endif

                @php $key = 'winline_bonus' . $index; @endphp
                @if (!$edit || $game->$key !== '')
                    <div class="@if( !$game->shop_id ) col-md-4 @else col-md-6 @endif">
                        <div class="form-group">
                            <label for="{{ $key }}">@lang('app.trigger_in_bonus') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                            {!! Form::select($key, $game->get_values($key, false, $edit ? $game->$key: false), $edit ? $game->$key : '', ['class' => 'form-control', 'required' => true]) !!}
                        </div>
                    </div>
                @endif

                @if( !$game->shop_id )
                    @php $key = 'winline_bonus' . $index; @endphp
                    @if (!$edit || $game->game_win->$key !== '')
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="{{ $key }}">@lang('app.volatility_in_bonus') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                                {!! Form::select('match_' . $key, $game->get_values('match_' . $key, false, $edit ? $game->game_win->$key: false), $edit ? $game->game_win->$key : '', ['class' => 'form-control', 'required' => true]) !!}
                            </div>
                        </div>
                    @endif
                @endif

            @endforeach
        </div>
    </li>
</ul>


<div class="row">

    @if ($edit)
        <div class="col-md-12 mt-2">
            <button type="submit" class="btn btn-primary" id="update-details-btn">
                @lang('app.edit_game')
            </button>
        </div>
    @endif
</div>