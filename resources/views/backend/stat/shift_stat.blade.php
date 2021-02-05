@extends('backend.layouts.app')

@section('page-title', trans('app.shift_stats'))
@section('page-heading', trans('app.shift_stats'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>

	<section class="content">
		<form action="" method="GET">
			<div class="box box-danger collapsed-box shift_stat_show">
				<div class="box-header with-border">
					<h3 class="box-title">@lang('app.filter')</h3>
					<div class="box-tools pull-right">
						<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>
					</div>
				</div>
				<div class="box-body">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>@lang('app.user')</label>
								<input type="text" class="form-control" name="user" value="{{ Request::get('user') }}">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>@lang('app.date_start')</label>
								<input type="text" class="form-control" name="dates" value="{{ Request::get('dates') }}">
							</div>
						</div>
						<div class="col-md-12">
							<div class="form-group">
								@php
									$filter = ['' => '---'];
                                    $shifts = \VanguardLTE\OpenShift::orderBy('start_date', 'DESC')->get();
                                    if( count($shifts) ){
                                        foreach($shifts AS $shift){
                                            $filter[$shift->id] = $shift->id . ' - ' . $shift->start_date;
                                        }
                                    }
								@endphp
								<label>@lang('app.shifts')</label>
								{!! Form::select('shifts', $filter, Request::get('shifts'), ['id' => 'shifts', 'class' => 'form-control']) !!}
							</div>
						</div>
					</div>
				</div>
				<div class="box-footer">
					<button type="submit" class="btn btn-primary">
						@lang('app.filter')
					</button>
				</div>
			</div>
		</form>

		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">@lang('app.shift_stats')</h3>
			</div>
                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
					<thead>
					<tr>
						@if(!auth()->user()->hasRole('cashier'))
							<th>@lang('app.shift')</th>
						@endif
						<th>Open Shift</th>
						<th>@lang('app.date_start')</th>
						<th>@lang('app.date_end')</th>
						@if(!auth()->user()->hasRole('cashier'))
							<th>@lang('app.credit')</th>
							<th>@lang('app.in')</th>
							<th>@lang('app.out')</th>
						@endif
						<th>@lang('app.total') Credit</th>
						@permission('games.in_out')
							<th>@lang('app.banks')</th>
						@endpermission
						@if(!auth()->user()->hasRole('cashier'))
						<th>@lang('app.returns')</th>
					    @endif
						<th>User @lang('app.balance')</th>
						<th>@lang('app.in')</th>
						<th>@lang('app.out')</th>
						<th>@lang('app.total') Money</th>
						@if(auth()->user()->hasRole('admin'))
							<th>@lang('app.profit')</th>
						@endif
					</tr>
					</thead>
					<tbody>
					@if (count($open_shift))
						@foreach ($open_shift as $num=>$stat)
							@include('backend.stat.partials.row_shift_stat')
						@endforeach
					@else
						<tr><td colspan="15">@lang('app.no_data')</td></tr>
					@endif
					</tbody>
					<thead>
					<tr>
						@if(!auth()->user()->hasRole('cashier'))
							<th>@lang('app.shift')</th>
						@endif
						<th>Open Shift</th>
						<th>@lang('app.date_start')</th>
						<th>@lang('app.date_end')</th>
						@if(!auth()->user()->hasRole('cashier'))
							<th>@lang('app.credit')</th>
							<th>@lang('app.in')</th>
							<th>@lang('app.out')</th>
						@endif
						<th>@lang('app.total') Credit</th>
						@permission('games.in_out')
							<th>@lang('app.banks')</th>
						@endpermission
						@if(!auth()->user()->hasRole('cashier'))
						<th>@lang('app.returns')</th>
					    @endif
						<th>User @lang('app.balance')</th>
						<th>@lang('app.in')</th>
						<th>@lang('app.out')</th>
						<th>@lang('app.total') Money</th>
						@if(auth()->user()->hasRole('admin'))
							<th>@lang('app.profit')</th>
						@endif
					</tr>
					</thead>
                            </table>
                        </div>
						{{ $open_shift->appends(Request::except('page'))->links() }}
                    </div>			
		</div>
	</section>

@stop

@section('scripts')
	<script>
		$(function() {
			$('#stat-table').dataTable();
			$('input[name="dates"]').daterangepicker({
				timePicker: true,
				timePicker24Hour: true,
				startDate: moment().subtract(30, 'day'),
				endDate: moment().add(7, 'day'),

				locale: {
					format: 'YYYY-MM-DD HH:mm'
				}
			});

			$('.btn-box-tool').click(function(event){
				if( $('.shift_stat_show').hasClass('collapsed-box') ){
					$.cookie('shift_stat_show', '1');
				} else {
					$.removeCookie('shift_stat_show');
				}
			});

			if( $.cookie('shift_stat_show') ){
				$('.shift_stat_show').removeClass('collapsed-box');
				$('.shift_stat_show .btn-box-tool i').removeClass('fa-plus').addClass('fa-minus');
			}
		});
	</script>
@stop
