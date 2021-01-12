@extends('system.layouts.errors')

@section('title', __('app.license_error'))

@section('content')

	<section class="content-header">
		@if(isset ($messages) && count($messages) > 0)
			<div class="alert alert-danger">
				<h4>@lang('app.error')</h4>
				<p>{!!  $messages[array_rand($messages)];  !!}</p>
			</div>
		@endif
		@if(isset ($errors) && count($errors) > 0)
			<div class="alert alert-danger">
				<h4>@lang('app.error')</h4>
				@foreach($errors->all() as $error)
					<p>{{ $error }}</p>
				@endforeach
			</div>
		@endif
		@if(Session::get('success', false))
			<?php $data = Session::get('success'); ?>
			@if (is_array($data))
				@foreach ($data as $msg)
					<div class="alert alert-success">
						<h4>@lang('app.success')</h4>
						<p>{{ $msg }}</p>
					</div>
				@endforeach
			@else
				<div class="alert alert-success">
					<h4>@lang('app.success')</h4>
					<p>{{ $data }}</p>
				</div>
			@endif
		@endif
	</section>

    <div class="title">@lang('app.license_error')</div>

	@if(!$licensed)
    <div class="reason">
		
				<form role="form" action="<?= route('frontend.new_license.post') ?>" method="POST" >
					<input type="hidden" value="<?= csrf_token() ?>" name="_token">
				
					<p>@lang('app.licensed_code_address')</p>
					<br />
						<input type="text" size="50" name="code" value="" >
                    <br /><br />
						<button type="submit">OK</button>
                </form>
    </div>
	@endif
@stop