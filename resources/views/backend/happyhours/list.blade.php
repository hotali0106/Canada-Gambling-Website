@extends('backend.layouts.app')

@section('page-title', trans('app.happyhours'))
@section('page-heading', trans('app.happyhours'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>

	<section class="content">
		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">@lang('app.happyhours') - @lang('app.time') {{ \Carbon\Carbon::now()->format('H:i:s') }}</h3>
				@permission('happyhours.add')
				<div class="pull-right box-tools">
					<a href="{{ route('backend.happyhour.create') }}" class="btn btn-block btn-primary btn-sm">@lang('app.add')</a>
				</div>
				@endpermission
			</div>
                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
					<thead>
					<tr>
						<th>@lang('app.id')</th>
						<th>@lang('app.multiplier')</th>
						<th>@lang('app.wager')</th>
						<th>@lang('app.time')</th>
						<th>@lang('app.status')</th>
					</tr>
					</thead>
					<tbody>
					@if (count($happyhours))
						@foreach ($happyhours as $happyhour)
							@include('backend.happyhours.partials.row')
						@endforeach
					@else
						<tr><td colspan="6">@lang('app.no_data')</td></tr>
					@endif
					</tbody>
					<thead>
					<tr>
						<th>@lang('app.id')</th>
						<th>@lang('app.multiplier')</th>
						<th>@lang('app.wager')</th>
						<th>@lang('app.time')</th>
						<th>@lang('app.status')</th>
					</tr>
					</thead>
                            </table>
                        </div>
                    </div>
		</div>
	</section>

@stop

@section('scripts')
	<script>
	</script>
@stop