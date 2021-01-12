
@extends('backend.layouts.app')

@section('page-title', trans('app.games'))
@section('page-heading', trans('app.games'))

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">

        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.game_update')</h3>
            </div>
        <div class="box-body">
          <div class="row">

                <form action="{{ route('backend.game.categories') }}" method="POST" class="pb-2 mb-3 border-bottom-light" id="massForm">

                        <div class="col-md-12">
                                <div class="form-group">						
                            <label for="change_category">@lang('app.add_or_change')</label>
                            <select name="action" class="form-control" id="massAction">
                                <option value="change_values">---</option>
                                <option value="add_category">@lang('app.add_in_categories')</option>
                                <option value="change_category">@lang('app.change_categories')</option>
                                @permission('games.delete')
								<option value="delete_games">@lang('app.delete_games')</option>
                                <option value="stay_games">@lang('app.stay_games')</option>
                                @endpermission
                            </select>
                            </div>
                        </div>

                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="device">@lang('app.categories')</label>
                            <select name="category[]" id="category" class="form-control select2" multiple="multiple" style="width: 100%;" >
                                @foreach ($categories as $key=>$category)
                                    <option value="{{ $category->id }}" >{{ $category->title }}</option>
                                    @foreach ($category->inner as $inner)
                                        <option value="{{ $inner->id }}">{{ $inner->title }}</option>
                                    @endforeach
                                @endforeach
                            </select>
                        </div>
                    </div>

                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="games">@lang('app.games_list')</label>
                                <textarea id="games" name="games" class="form-control" rows="5"></textarea>
                            </div>
                        </div>

            </div>

          <div class="row">


                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="rezerv">@lang('app.doubling')</label>
                                {!! Form::select('rezerv', $emptyGame->get_values('rezerv', true), '', ['class' => 'form-control']) !!}
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="view">@lang('app.view')</label>
                                <select name="view" id="view" class="form-control">
                                    <option value="">---</option>
                                    <option value="1">@lang('app.active')</option>
                                    <option value="0">@lang('app.disabled')</option>
                                </select>
                            </div>
                        </div>					

                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="bet">@lang('app.bet')</label>
                                {!! Form::select('bet', $emptyGame->get_values('bet', true), '', ['class' => 'form-control']) !!}
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="scaleMode">@lang('app.scaling')</label>
                                <select name="scaleMode" id="scaleMode" class="form-control" >
                                    <option value="">---</option>
                                    <option value="showAll">@lang('app.default')</option>
                                    <option value="exactFit">@lang('app.full_screen')</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="slotViewState">@lang('app.ui')</label>
                                <select name="slotViewState" id="slotViewState" class="form-control" >
                                    <option value="">---</option>
                                    <option value="Normal">@lang('app.visible_ui')</option>
                                    <option value="HideUI">@lang('app.hide_ui')</option>
                                </select>
                            </div>
                        </div>

              <div class="col-md-4">
                  <div class="form-group">
                      <label for="title">@lang('app.gamebank')</label>
                      {!! Form::select('gamebank', ['' => '---'] + $emptyGame->gamebankNames, '', ['class' => 'form-control']) !!}
                  </div>
              </div>
						
            </div>
<ul class="list-group list-group-unbordered">
    <li class="list-group-item">

<div class="row">
						
                        @foreach([1,3,5,7,9,10] AS $index)
                            <div class="@if( !auth()->user()->shop_id ) col-md-4 @else col-md-6 @endif">
                                <div class="form-group">
                                    <label for="garant_win{{ $index }}">@lang('app.spin') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                                    {!! Form::select('garant_win' . $index, $emptyGame->get_values('garant_win' . $index, true), '', ['class' => 'form-control']) !!}
                                </div>
                            </div>

                            <div class="@if( !auth()->user()->shop_id ) col-md-4 @else col-md-6 @endif">
                                <div class="form-group">
                                    <label for="winline{{ $index }}">@lang('app.trigger') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                                    {!! Form::select('winline' . $index, $emptyGame->get_values('winline' . $index, true), '', ['class' => 'form-control']) !!}
                                </div>
                            </div>
        @if( !auth()->user()->shop_id )
        <div class="col-md-4">
            <div class="form-group">
                <label for="winline{{ $index }}">@lang('app.volatility') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                {!! Form::select('match_winline' . $index, $emptyGame->get_values('match_winline' . $index, true), '', ['class' => 'form-control']) !!}
            </div>
        </div>
        @endif

                        @endforeach

</div>

    </li>
</ul>

<div class="row">

                        @foreach([1,3,5,7,9,10] AS $index)
                            <div class="@if( !auth()->user()->shop_id ) col-md-4 @else col-md-6 @endif">
                                <div class="form-group">
                                    <label for="garant_bonus{{ $index }}">@lang('app.spin_bonus') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                                    {!! Form::select('garant_bonus' . $index, $emptyGame->get_values('garant_bonus' . $index, true), '', ['class' => 'form-control']) !!}
                                </div>
                            </div>

                            <div class="@if( !auth()->user()->shop_id ) col-md-4 @else col-md-6 @endif">
                                <div class="form-group">
                                    <label for="winbonus{{ $index }}">@lang('app.trigger_bonus') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                                    {!! Form::select('winbonus' . $index, $emptyGame->get_values('winbonus' . $index, true), '', ['class' => 'form-control']) !!}
                                </div>
                            </div>

        @if( !auth()->user()->shop_id )
        <div class="col-md-4">
            <div class="form-group">
                <label for="match_winbonus{{ $index }}">@lang('app.volatility_bonus') - L {{ $index }}{{ $index >= 10 ? '+' : '' }}</label>
                {!! Form::select('match_winbonus' . $index, $emptyGame->get_values('match_winbonus' . $index, true), '', ['class' => 'form-control']) !!}
            </div>
        </div>
        @endif
                        @endforeach

</div>
<div class="row">
                        <div class="col-md-12">
                            <input type="hidden" value="<?= csrf_token() ?>" name="_token">
                            <input type="hidden" value="{{ implode(',', $ids) }}" name="ids">
                            <button type="submit" class="btn btn-primary">
                                @lang('app.update')
                            </button>

                            @permission('games.delete')
                            <button type="button" class="btn btn-danger" id="massDelete">
                                @lang('app.delete')
                            </button>
                            @endpermission


                            @permission('games.delete')
                            <button type="button" class="btn btn-danger" id="massStay">
                                @lang('app.stay_games')
                            </button>
                            @endpermission

                        </div>
</div>
                </form>
          </div>
        </div>

    </section>



@stop

@section('scripts')
    <script>
        $('#massDelete').click(function(){
            $('#massAction option[value="delete_games"]').prop('selected', true);

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-secondary'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: "@lang('app.please_confirm')",
                html: "@lang('app.are_you_sure_delete_game')",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                focusCancel: false,
                reverseButtons: true,
                position: 'top-start',
                confirmButtonText: "@lang('app.yes_delete_him')",
            }).then(function (t) {
                $('form#massForm').submit();
            });

        });


        $('#massStay').click(function(){
            $('#massAction option[value="stay_games"]').prop('selected', true);

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-secondary'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: "@lang('app.please_confirm')",
                html: "@lang('app.are_you_sure_delete_game')",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                focusCancel: false,
                reverseButtons: true,
                position: 'top-start',
                confirmButtonText: "@lang('app.yes_i_do')",
            }).then(function (t) {
                $('form#massForm').submit();
            });

        });
    </script>
@stop