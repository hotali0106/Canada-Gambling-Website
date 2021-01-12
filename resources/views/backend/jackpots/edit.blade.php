@extends('backend.layouts.app')

@section('page-title', trans('app.edit_jackpot'))
@section('page-heading', $jackpot->title)

@section('content')

<section class="content-header">
@include('backend.partials.messages')
</section>

    <section class="content">
      <div class="box box-default">
		{!! Form::open(['route' => array('backend.jackpot.update', $jackpot->id), 'files' => true, 'id' => 'user-form']) !!}
        <div class="box-header with-border">
          <h3 class="box-title">@lang('app.edit_jackpot')</h3>
        </div>

        <div class="box-body">
          <div class="row">
            @include('backend.jackpots.partials.base', ['edit' => true])
          </div>
        </div>

        <div class="box-footer">
        <button type="submit" class="btn btn-primary">
            @lang('app.edit_jackpot')
        </button>
		@permission('jackpots.delete')
        <a href="{{ route('backend.jackpot.delete', $jackpot->id) }}"
           class="btn btn-danger"
           data-method="DELETE"
           data-confirm-title="@lang('app.please_confirm')"
           data-confirm-text="@lang('app.are_you_sure_delete_jackpot')"
           data-confirm-delete="@lang('app.yes_delete_him')">
            Delete JackPot
        </a>
		@endpermission
        </div>
		{!! Form::close() !!}
      </div>
    </section>

@stop