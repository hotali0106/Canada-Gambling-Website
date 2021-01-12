@extends('backend.layouts.app')

@section('page-title', trans('app.edit_return'))
@section('page-heading', $return->min_pay . ' ' . $return->max_pay)

@section('content')

  <section class="content-header">
    @include('backend.partials.messages')
  </section>

  <section class="content">
    <div class="box box-default">
      {!! Form::open(['route' => array('backend.returns.update', $return->id), 'files' => true, 'id' => 'return-form']) !!}
      <div class="box-header with-border">
        <h3 class="box-title">@lang('app.edit_return')</h3>
      </div>

      <div class="box-body">
        <div class="row">
          @include('backend.returns.partials.base', ['edit' => true])
        </div>
      </div>

      <div class="box-footer">
        <button type="submit" class="btn btn-primary">
          @lang('app.edit_return')
        </button>

      </div>
      {!! Form::close() !!}
    </div>
  </section>

@stop