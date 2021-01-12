@extends('backend.layouts.app')

@section('page-title', trans('app.shops'))
@section('page-heading', trans('app.shops'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>

	<section class="content">

		<div class="row">
			<div class="col-lg-3 col-xs-6">
				<!-- small box -->
				<div class="small-box bg-light-blue">
					<div class="inner">
						<h3>{{ $stats['shops'] }}</h3>
						<p>@lang('app.total_shops')</p>
					</div>
					<div class="icon">
						<i class="fa fa-refresh"></i>
					</div>
				</div>
			</div>
			<!-- ./col -->
			@if(auth()->user()->hasRole('admin'))
			<div class="col-lg-3 col-xs-6">
				<!-- small box -->
				<div class="small-box bg-green">
					<div class="inner">
						<h3>{{ ($stats['agents']) }}</h3>
						<p>@lang('app.total_agents')</p>
					</div>
					<div class="icon">
						<i class="fa fa-level-up"></i>
					</div>
				</div>
			</div>
			<!-- ./col -->
			@endif
			@if(auth()->user()->hasRole(['admin','agent']))
			<div class="col-lg-3 col-xs-6">
				<!-- small box -->
				<div class="small-box bg-yellow">
					<div class="inner">
						<h3>{{ ($stats['distributors']) }}</h3>
						<p>@lang('app.total_distributors')</p>
					</div>
					<div class="icon">
						<i class="fa fa-level-down"></i>
					</div>
				</div>
			</div>
			<!-- ./col -->
			@endif
			@if(auth()->user()->hasRole(['agent','distributor']))
				<div class="col-lg-3 col-xs-6">
					<!-- small box -->
					<div class="small-box bg-yellow">
						<div class="inner">
							<h3>{{ ($stats['managers']) }}</h3>
							<p>@lang('app.total_managers')</p>
						</div>
						<div class="icon">
							<i class="fa fa-level-down"></i>
						</div>
					</div>
				</div>
				<!-- ./col -->
			@endif
			@if(auth()->user()->hasRole(['distributor','manager']))
				<div class="col-lg-3 col-xs-6">
					<!-- small box -->
					<div class="small-box bg-yellow">
						<div class="inner">
							<h3>{{ ($stats['cashiers']) }}</h3>
							<p>@lang('app.total_cashiers')</p>
						</div>
						<div class="icon">
							<i class="fa fa-level-down"></i>
						</div>
					</div>
				</div>
				<!-- ./col -->
			@endif
			@if(auth()->user()->hasRole(['manager','cashier']))
				<div class="col-lg-3 col-xs-6">
					<!-- small box -->
					<div class="small-box bg-yellow">
						<div class="inner">
							<h3>{{ ($stats['users']) }}</h3>
							<p>@lang('app.total_users')</p>
						</div>
						<div class="icon">
							<i class="fa fa-level-down"></i>
						</div>
					</div>
				</div>
				<!-- ./col -->
			@endif
			<div class="col-lg-3 col-xs-6">
				<!-- small box -->
				<div class="small-box bg-red">
					<div class="inner">
						<h3>{{ number_format( $stats['credit'], 2 ) }}</h3>
						<p>@lang('app.total_credit')</p>
					</div>
					<div class="icon">
						<i class="fa fa-line-chart"></i>
					</div>
				</div>
			</div>
			<!-- ./col -->

		</div>



		<form action="" method="GET">
			<div class="box box-danger collapsed-box shops_show">
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
								<label>@lang('app.name')</label>
								<input type="text" class="form-control" name="name" value="{{ Request::get('name') }}">
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label>@lang('app.credit_from')</label>
								<input type="text" class="form-control" name="credit_from" value="{{ Request::get('credit_from') }}">
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label>@lang('app.credit_to')</label>
								<input type="text" class="form-control" name="credit_to" value="{{ Request::get('credit_to') }}">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>@lang('app.frontend')</label>
								<input type="text" class="form-control" name="frontend" value="{{ Request::get('frontend') }}">
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label>@lang('app.percent_from')</label>
								<input type="text" class="form-control" name="percent_from" value="{{ Request::get('percent_from') }}">
							</div>
						</div>
						<div class="col-md-3">
							<div class="form-group">
								<label>@lang('app.percent_to')</label>
								<input type="text" class="form-control" name="percent_to" value="{{ Request::get('percent_to') }}">
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>@lang('app.order')</label>
								@php
									$orders = array_combine(array_merge([''], \VanguardLTE\Shop::$values['orderby']), array_merge([''], \VanguardLTE\Shop::$values['orderby']));
								@endphp
								{!! Form::select('order', $orders, Request::get('status'), ['id' => 'order', 'class' => 'form-control']) !!}
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>@lang('app.currency')</label>
								@php
									$currencies = array_combine(\VanguardLTE\Shop::$values['currency'], \VanguardLTE\Shop::$values['currency']);
								@endphp
								{!! Form::select('currency', $currencies, Request::get('currency'), ['id' => 'currency', 'class' => 'form-control']) !!}
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>@lang('app.categories')</label>
								{!! Form::select('categories[]', $categories->pluck('title','id'), Request::get('categories'), ['id' => 'type', 'class' => 'form-control select2', 'multiple' => true, 'style' => 'width: 100%;']) !!}

							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>@lang('app.status')</label>
								{!! Form::select('status', ['' => __('app.all'), '1' => __('app.active'), '0' => __('app.disabled')], Request::get('status'), ['id' => 'type', 'class' => 'form-control']) !!}
							</div>
						</div>

						@if(auth()->user()->hasRole('admin'))
							<div class="col-md-6">
								<div class="form-group">
									<label>@lang('app.agents') & @lang('app.distributors')</label>
									{!! Form::select('users', ['' => '---'] + $agents + $distributors, Request::get('users'), ['id' => 'users', 'class' => 'form-control select2']) !!}
								</div>
							</div>
						@endif

						@if(auth()->user()->hasRole(['agent']))
							<div class="col-md-6">
								<div class="form-group">
									<label>@lang('app.distributors')</label>
									{!! Form::select('users', ['' => '---'] + $distributors, Request::get('users'), ['id' => 'users', 'class' => 'form-control select2']) !!}
								</div>
							</div>
						@endif

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
				<h3 class="box-title">@lang('app.shops')</h3>
				@if(auth()->user()->hasRole('admin'))
					<div class="pull-right box-tools">
						<a href="{{ route('backend.shop.admin_create') }}" class="btn btn-block btn-primary btn-sm">@lang('app.add')</a>
					</div>
				@endif
				@if(auth()->user()->hasRole('distributor'))
					<div class="pull-right box-tools">
						<a href="{{ route('backend.shop.create') }}" class="btn btn-block btn-primary btn-sm">@lang('app.add')</a>
					</div>
				@endif
			</div>
                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
					<thead>
					<tr>
						<th>@lang('app.name')</th>
						<th>@lang('app.go_to_shop')</th>
						<th>@lang('app.distributor')</th>
						<th>@lang('app.id')</th>
						<th>@lang('app.credit')</th>
						<th>@lang('app.percent')</th>
						<th>@lang('app.frontend')</th>
						<th>@lang('app.currency')</th>
						<th>@lang('app.order')</th>
						<th>@lang('app.status')</th>
						<th>@lang('app.pay_in')</th>
						<th>@lang('app.pay_out')</th>
					</tr>
					</thead>
					<tbody>
					@if (count($shops))
						@foreach ($shops as $shop)
							@include('backend.shops.partials.row')
						@endforeach
					@else
						<tr><td colspan="12">@lang('app.no_data')</td></tr>
					@endif
					</tbody>
					<thead>
					<tr>
						<th>@lang('app.name')</th>
						<th>@lang('app.go_to_shop')</th>
						<th>@lang('app.distributor')</th>
						<th>@lang('app.id')</th>
						<th>@lang('app.credit')</th>
						<th>@lang('app.percent')</th>
						<th>@lang('app.frontend')</th>
						<th>@lang('app.currency')</th>
						<th>@lang('app.order')</th>
						<th>@lang('app.status')</th>
						<th>@lang('app.pay_in')</th>
						<th>@lang('app.pay_out')</th>
					</tr>
					</thead>
                            </table>

							{{ $shops->links() }}
                        </div>
                    </div>
		</div>

	</section>

	<!-- Modal -->
	<div class="modal fade" id="openAddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<form action="{{ route('backend.shop.balance') }}" method="POST">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">@lang('app.balance') @lang('app.pay_in')</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="AddSum">@lang('app.sum')</label>
							<input type="text" class="form-control" id="AddSum" name="summ" placeholder="@lang('app.sum')" required>
							<input type="hidden" name="type" value="add">
							<input type="hidden" id="AddId" name="shop_id">
							<input type="hidden" name="_token" value="{{ csrf_token() }}">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">@lang('app.close')</button>
						<button type="submit" class="btn btn-primary">@lang('app.pay_in')</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="modal fade" id="openOutModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<form action="{{ route('backend.shop.balance') }}" method="POST" id="outForm">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">@lang('app.balance') @lang('app.pay_out')</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="OutSum">@lang('app.sum')</label>
							<input type="text" class="form-control" id="OutSum" name="summ" placeholder="@lang('app.sum')" required>
							<input type="hidden" id="outAll" name="all" value="0">
							<input type="hidden" name="type" value="out">
							<input type="hidden" id="OutId" name="shop_id">
							<input type="hidden" name="_token" value="{{ csrf_token() }}">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">@lang('app.close')</button>
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
		$('#shops-table').dataTable();
		$("#view").change(function () {
			$("#shops-form").submit();
		});
		$('.addPayment').click(function(event){
			console.log($(event.target));
			var item = $(event.target).hasClass('addPayment') ? $(event.target) : $(event.target).parent();
			var id = item.attr('data-id');
			$('#AddId').val(id);
		});

		$('.outPayment').click(function(event){
			console.log($(event.target));
			var item = $(event.target).hasClass('outPayment') ? $(event.target) : $(event.target).parent();
			var id = item.attr('data-id');
			$('#OutId').val(id);
			$('#outAll').val('0');
		});


		$('#doOutAll').click(function () {
			$('#outAll').val('1');
			$('form#outForm').submit();
		});

		$('.btn-box-tool').click(function(event){
			if( $('.shops_show').hasClass('collapsed-box') ){
				$.cookie('shops_show', '1');
			} else {
				$.removeCookie('shops_show');
			}
		});

		if( $.cookie('shops_show') ){
			$('.shops_show').removeClass('collapsed-box');
			$('.shops_show .btn-box-tool i').removeClass('fa-plus').addClass('fa-minus');
		}
	</script>
@stop
