@extends('backend.layouts.app')

@section('page-title', trans('app.add_return'))
@section('page-heading', trans('app.add_return'))

@section('content')

<section class="content-header">
@include('backend.partials.messages')
</section>

    <section class="content">
      <div class="box box-default">
		{!! Form::open(['route' => 'backend.returns.store', 'files' => true, 'id' => 'return-form']) !!}
        <div class="box-header with-border">
          <h3 class="box-title">@lang('app.add_return')</h3>
        </div>

        <div class="box-body">
          <div class="row">
            @include('backend.returns.partials.base', ['edit' => false, 'profile' => false])
          </div>
        </div>

        <div class="box-footer">
        <button type="submit" class="btn btn-primary">
            @lang('app.add_return')
        </button>
        </div>
		{!! Form::close() !!}
      </div>
    </section>

@stop