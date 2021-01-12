@extends('backend.layouts.app')

@section('page-title', trans('app.add_jpg'))
@section('page-heading', trans('app.add_jpg'))

@section('content')

<section class="content-header">
@include('backend.partials.messages')
</section>

    <section class="content">
      <div class="box box-default">
		{!! Form::open(['route' => 'backend.jackpot.store', 'files' => true, 'id' => 'user-form']) !!}
        <div class="box-header with-border">
          <h3 class="box-title">@lang('app.add_jpg')</h3>
        </div>

        <div class="box-body">
          <div class="row">
            @include('backend.jackpots.partials.base', ['edit' => false])
          </div>
        </div>

        <div class="box-footer">
        <button type="submit" class="btn btn-primary">
            @lang('app.add_jpg')
        </button>
        </div>
		{!! Form::close() !!}
      </div>
    </section>

@stop