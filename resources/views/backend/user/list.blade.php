@extends('backend.layouts.app')

@section('page-title', trans('app.users'))
@section('page-heading', trans('app.users'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>



	<section class="content">

		@if(auth()->user()->hasRole('cashier') &&
			$openshift = \VanguardLTE\OpenShift::where(['shop_id' => auth()->user()->shop_id, 'end_date' => NULL])->first())

			@php $summ = \VanguardLTE\User::where(['shop_id' => auth()->user()->shop_id, 'role_id' => 1])->sum('balance'); @endphp

			<div class="row">
				<div class="col-lg-3 col-xs-6">
					<!-- small box -->
					<div class="small-box bg-light-blue">
						<div class="inner">
							@php
								$money = $openshift->users;
                                if($openshift->end_date == NULL){
                                    $money = $summ;
                                }
							@endphp

							<h3>{{ number_format($money, 2, ".", "") }}</h3>
							<p>User @lang('app.balance')</p>
						</div>
						<div class="icon">
							<i class="fa fa-refresh"></i>
						</div>
					</div>
				</div>
				<!-- ./col -->
				<div class="col-lg-3 col-xs-6">
					<!-- small box -->
					<div class="small-box bg-green">
						<div class="inner">
							<h3>{{ number_format($openshift->money_in, 2, ".", "") }}</h3>
							<p>@lang('app.in')</p>
						</div>
						<div class="icon">
							<i class="fa fa-level-up"></i>
						</div>
					</div>
				</div>
				<!-- ./col -->
				<div class="col-lg-3 col-xs-6">
					<!-- small box -->
					<div class="small-box bg-yellow">
						<div class="inner">
							<h3>{{ number_format ($openshift->money_out, 2, ".", "") }}</h3>
							<p>@lang('app.out')</p>
						</div>
						<div class="icon">
							<i class="fa fa-level-down"></i>
						</div>
					</div>
				</div>
				<!-- ./col -->
				<div class="col-lg-3 col-xs-6">
					<!-- small box -->
					<div class="small-box bg-red">
						<div class="inner">
							@php
								$total = $openshift->money_in - $openshift->money_out;
							@endphp

							<h3>{{ number_format ($total, 2, ".", "") }}</h3>
							<p>@lang('app.total') Money</p>
						</div>
						<div class="icon">
							<i class="fa fa-line-chart"></i>
						</div>
					</div>
				</div>
				<!-- ./col -->
			</div>

		@endif

		<div class="box box-danger collapsed-box users_show">
			<div class="box-header with-border">
				<h3 class="box-title">@lang('app.filter')</h3>
				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>
				</div>
			</div>
			<div class="box-body">
				<div class="row">
					<form action="" method="GET" id="users-form" >
						@if (Auth::user()->hasRole('cashier'))
							<div class="col-md-6">
								<label>Search</label>
								@endif

								@if (!Auth::user()->hasRole('cashier'))
									<div class="col-md-4">
										<label>@lang('app.search')</label>
										@endif
										<input type="text" class="form-control" name="search" value="{{ Request::get('search') }}" placeholder="@lang('app.search_for_users')">
									</div>
									@if (Auth::user()->hasRole('cashier'))
										<div class="col-md-6">
											<label>@lang('app.status')</label>
											@endif

											@if (!Auth::user()->hasRole('cashier'))
												<div class="col-md-4">
													<label>@lang('app.status')</label>
													@endif
													{!! Form::select('status', $statuses, Request::get('status'), ['id' => 'status', 'class' => 'form-control']) !!}
												</div>
												@if (!Auth::user()->hasRole('cashier'))
													<div class="col-md-4">
														<label>@lang('app.role')</label>
														{!! Form::select('role', $roles, Request::get('role'), ['id' => 'role', 'class' => 'form-control']) !!}
													</div>
												@endif
										</div>
							</div>
							<div class="box-footer">
								<button type="submit" class="btn btn-primary">
									@lang('app.filter')
								</button>
					</form>
				</div>
			</div>

			<div class="box box-primary">
				<div class="box-header with-border">
					<h3 class="box-title">@lang('app.users')</h3>
					<div class="pull-right box-tools">
						@permission('users.add')
						<a href="{{ route('backend.user.create') }}" class="btn btn-block btn-primary btn-sm">@lang('app.add')</a>
						@endpermission
					</div>
				</div>
				<div class="box-body">
					<div class="table-responsive">
						<table class="table table-bordered table-striped">
							<thead>
							<tr>
								<th>@lang('app.username')</th>

								@permission('users.balance.manage')
								<th>@lang('app.balance')</th>
								<th>@lang('app.bonus')</th>
								<th>@lang('app.wager')</th>
								<th>@lang('app.pay_in')</th>
								<th>@lang('app.pay_out')</th>
								@endpermission

							</tr>
							</thead>
							<tbody>
							@if (count($users))
								@foreach ($users as $user)
									@include('backend.user.partials.row')
								@endforeach
							@else
								<tr><td colspan="6">@lang('app.no_data')</td></tr>
							@endif
							</tbody>
							<thead>
							<tr>
								<th>@lang('app.username')</th>

								@permission('users.balance.manage')
								<th>@lang('app.balance')</th>
								<th>@lang('app.bonus')</th>
								<th>@lang('app.wager')</th>
								<th>@lang('app.pay_in')</th>
								<th>@lang('app.pay_out')</th>
								@endpermission

							</tr>
							</thead>
						</table>
					</div>
					{{ $users->appends(Request::except('page'))->links() }}
				</div>				
			</div>
	</section>

	<div class="modal fade" id="openAddModal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<form action="{{ route('backend.user.balance.update') }}" method="POST">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">@lang('app.balance') @lang('app.pay_in')</h4>
					</div>
					<div class="modal-body">
						@if($happyhour && auth()->user()->hasRole('cashier'))
							<div class="alert alert-success">
								<h4>@lang('app.happyhours')</h4>
								<p> @lang('app.all_player_deposits') {{ $happyhour->multiplier }}</p>
							</div>
						@endif
						<div class="form-group">
							<label for="OutSum">@lang('app.sum')</label>
							<input type="text" class="form-control" id="OutSum" name="summ" placeholder="@lang('app.sum')" required>
							<input type="hidden" name="type" value="add">
							<input type="hidden" id="AddId" name="user_id">
							<input type="hidden" name="_token" value="{{ csrf_token() }}">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default pull-left" data-dismiss="modal">@lang('app.close')</button>
						<button type="submit" class="btn btn-primary">@lang('app.pay_in')</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="modal fade" id="openOutModal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<form action="{{ route('backend.user.balance.update') }}" method="POST" id="outForm">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">@lang('app.balance') @lang('app.pay_out')</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="OutSum">@lang('app.sum')</label>
							<input type="text" class="form-control" id="OutSum" name="summ" required autofocus>
							<input type="hidden" name="type" value="out">
							<input type="hidden" id="outAll" name="all" value="0">
							<input type="hidden" id="OutId" name="user_id">
							<input type="hidden" name="_token" value="{{ csrf_token() }}">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default pull-left" data-dismiss="modal">@lang('app.close')</button>
						<button type="button" class="btn btn-danger" id="doOutAll">@lang('app.pay_out') @lang('app.all')</button>
						<button type="submit" class="btn btn-primary">@lang('app.pay_out')</button>
					</div>
				</form>
			</div>
		</div>
	</div>

@stop

@section('scripts')
	<script>

		$(function() {

		var table = $('#users-table').dataTable();
		$("#view").change(function () {
			$("#shops-form").submit();
		});

		$("#filter").detach().appendTo("div.toolbar");


		$("#status").change(function () {
			$("#users-form").submit();
		});
		$("#role").change(function () {
			$("#users-form").submit();
		});
		$('.addPayment').click(function(event){
			if( $(event.target).is('.newPayment') ){
				var id = $(event.target).attr('data-id');
			}else{
				var id = $(event.target).parents('.newPayment').attr('data-id');
			}
			$('#AddId').val(id);

		});

		$('.outPayment').click(function(event){
			if( $(event.target).is('.newPayment') ){
				var id = $(event.target).attr('data-id');
			}else{
				var id = $(event.target).parents('.newPayment').attr('data-id');
			}
			$('#OutId').val(id);
			$('#outAll').val('');
		});

		$('#doOutAll').click(function () {
			$('#outAll').val('1');
			$('form#outForm').submit();
		});


		$('.btn-box-tool').click(function(event){
			if( $('.users_show').hasClass('collapsed-box') ){
				$.cookie('users_show', '1');
			} else {
				$.removeCookie('users_show');
			}
		});

		if( $.cookie('users_show') ){
			$('.users_show').removeClass('collapsed-box');
			$('.users_show .btn-box-tool i').removeClass('fa-plus').addClass('fa-minus');
		}
		});
	</script>
@stop