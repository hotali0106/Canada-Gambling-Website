@extends('backend.layouts.app')

@section('page-title', trans('app.edit_reject'))
@section('page-heading', 'Reject')

@section('content')

  <section class="content-header">
    @include('backend.partials.messages')
  </section>

  <section class="content">
    <div class="box box-default">
      {!! Form::open(['route' => array('backend.reject.update', $reject->id), 'files' => true, 'id' => 'reject-form']) !!}
      <div class="box-header with-border">
        <h3 class="box-title">@lang('app.edit_reject')</h3>
      </div>

      <div class="box-body">
        <div class="row">

        </div>
      </div>

      <div class="box-footer">
        <button type="submit" class="btn btn-primary">
          @lang('app.edit_reject')
        </button>

      </div>
      {!! Form::close() !!}
    </div>
  </section>

@stop