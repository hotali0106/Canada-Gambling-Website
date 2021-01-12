@extends('backend.layouts.app')

@section('page-title', trans('app.edit_room'))
@section('page-heading', $room->title)

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">

        {!! Form::open(['route' => array('backend.room.update', $room->id), 'files' => true, 'id' => 'user-form']) !!}
        <div class="box box-default">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.edit_room')</h3>
            </div>

            <div class="box-body">
                <div class="row">

                    @include('backend.rooms.partials.base', ['edit' => true])

                </div>
            </div>

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">
                    @lang('app.edit_room')
                </button>

                @if( Auth::user()->hasRole('admin') )
                    <a href="{{ route('backend.room.hard_delete', $room->id) }}"
                       class="btn btn-danger"
                       data-method="DELETE"
                       data-confirm-title="@lang('app.please_confirm')"
                       data-confirm-text="@lang('app.are_you_sure_delete_room')"
                       data-confirm-delete="@lang('app.yes_delete_him')">
                        Hard Delete Room
                    </a>
                @endif

                @if( Auth::user()->hasRole('dealer') && count(Auth::user()->rooms()) > 1 )
                <a href="{{ route('backend.room.delete', $room->id) }}"
                   class="btn btn-danger"
                   data-method="DELETE"
                   data-confirm-title="@lang('app.please_confirm')"
                   data-confirm-text="@lang('app.are_you_sure_delete_room')"
                   data-confirm-delete="@lang('app.yes_delete_him')">
                    Delete Room
                </a>
                @endif



            </div>
        </div>
        {!! Form::close() !!}

    </section>

@stop
