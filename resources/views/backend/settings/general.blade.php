@extends('backend.layouts.app')

@section('page-title', trans('app.general_settings'))
@section('page-heading', trans('app.general_settings'))

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">

        <div class="box box-default">
            {!! Form::open(['route' => 'backend.settings.general.update', 'id' => 'general-settings-form']) !!}
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.general_settings')</h3>
            </div>

            <div class="box-body">
                <div class="row">

                    <div class="col-md-6">
                        <div class="form-group">
                            <label>@lang('app.name')</label>
                            <input type="text" class="form-control" id="app_name" name="app_name" value="{{ settings('app_name') }}">
                        </div>

                    @include('backend.settings.partials.auth', ['directories' => $directories])

                    </div>
                    <div class="col-md-6">
                    @include('backend.settings.partials.throttling')
                    @include('backend.settings.partials.registration')
                    </div>
                </div>
            </div>

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">
                    @lang('app.edit_settings')
                </button>

                @if( Auth::user()->hasRole('admin'))

                    <a href="{{ route('backend.settings.sync') }}"
                       class="btn btn-danger "
                       data-method="PUT"
                       data-confirm-title="@lang('app.please_confirm')"
                       data-confirm-text="@lang('app.do_you_want_to_sync_shops')"
                       data-confirm-delete="@lang('app.yes_i_do')">
                        <b>Sync</b></a>
                @endif

            </div>
            {{ Form::close() }}
        </div>
    </section>

@stop