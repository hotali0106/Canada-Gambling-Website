@extends('backend.layouts.app')

@section('page-title', trans('app.info'))
@section('page-heading', trans('app.info'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>

	<section class="content">
		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">Helper</h3>
				@permission('helpers.add')
				<div class="pull-right box-tools">
					<a href="{{ route('backend.info.create') }}" class="btn btn-block btn-primary btn-sm">@lang('app.add')</a>
				</div>
				@endpermission
			</div>
			<div class="box-body">
				<div class="table-responsive">
					<table class="table table-bordered table-striped">
						<thead>
						<tr>
							<th>@lang('app.href')</th>
							<th>@lang('app.title')</th>
							<th>@lang('app.roles')</th>
						</tr>
						</thead>
						<tbody>
						@if (count($info))
							@foreach ($info as $info_item)
								@include('backend.info.partials.row')
							@endforeach
						@else
							<tr><td colspan="4">@lang('app.no_data')</td></tr>
						@endif
						</tbody>
						<thead>
						<tr>
							<th>@lang('app.href')</th>
							<th>@lang('app.title')</th>
							<th>@lang('app.roles')</th>
						</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>

	</section>

@stop