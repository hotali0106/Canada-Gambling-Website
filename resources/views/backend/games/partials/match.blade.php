
<div class="row">

    <div class="col-md-4">
        <div class="form-group">
            <label for="title">@lang('app.gamebank')</label>
            {!! Form::select('gamebank', $game->gamebankNames, $edit ? $game->gamebank : '', ['class' => 'form-control', 'required' => true]) !!}
        </div>
    </div>

    <div class="col-md-4">
        @if (!$edit || $game->rezerv !== '')
            <div class="form-group">
                <label for="rezerv">@lang('app.doubling')</label>
                {!! Form::select('rezerv', $game->get_values('rezerv'), $edit ? $game->rezerv : '', ['class' => 'form-control', 'required' => true]) !!}
            </div>
        @endif
    </div>
    <div class="col-md-4">
        @if (!$edit || $game->cask !== '')
            <div class="form-group">
                <label for="cask">@lang('app.health')</label>
                {!! Form::select('cask', $game->get_values('cask'), $edit ? $game->cask : '', ['class' => 'form-control', 'required' => true]) !!}
            </div>
        @endif
    </div>


</div>

<div class="row">
    <div class="col-md-4">
        <div class="form-group">
            <label for="title">@lang('app.jpg')</label>
            {!! Form::select('jpg_id', ['' => '---'] + $jpgs, $edit ? $game->jpg_id : '', ['class' => 'form-control']) !!}
        </div>
    </div>

    <div class="col-md-4">
        <div class="form-group">
            <label for="title">@lang('app.labels')</label>
            {!! Form::select('label', ['' => '---'] + $game->labels, $edit ? $game->label : '', ['class' => 'form-control']) !!}
        </div>
    </div>
</div>

<ul class="list-group list-group-unbordered">
    <li class="list-group-item">

        <div class="row">

            @foreach([1,3,5,7,9,10] AS $index)

                @php $key = 'garant_win' . $index; @endphp
                @if (!$edit || $game->$key !== '')
                    <div class="@if( !$game->shop_id ) col-md-4 @else col-md-6 @endif">
                        <div class="form-group">
                            <label for="{{ $key }}">@lang('app.spin') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                            {!! Form::select($key, $game->get_values($key, false, $edit ? $game->$key: false), $edit ? $game->$key : '', ['class' => 'form-control', 'required' => true]) !!}
                        </div>
                    </div>
                @endif

                @php $key = 'winline' . $index; @endphp
                @if (!$edit || $game->$key !== '')
                    <div class="@if( !$game->shop_id ) col-md-4 @else col-md-6 @endif">
                        <div class="form-group">
                            <label for="{{ $key }}">@lang('app.trigger') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                            {!! Form::select($key, $game->get_values($key, false, $edit ? $game->$key: false), $edit ? $game->$key : '', ['class' => 'form-control', 'required' => true]) !!}
                        </div>
                    </div>
                @endif

                @if( !$game->shop_id )
                    @php $key = 'winline' . $index; @endphp
                    @if (!$edit || $game->game_win->$key !== '')
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="{{ $key }}">@lang('app.volatility') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
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