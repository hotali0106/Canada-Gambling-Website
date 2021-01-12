@extends('backend.layouts.app')

@section('page-title', trans('app.jackpots'))
@section('page-heading', trans('app.jackpots'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>

	<section class="content">
		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">@lang('app.jackpots')</h3>
				@permission('jackpots.add')
				<div class="pull-right box-tools">
					<a href="{{ route('backend.jackpot.create') }}" class="btn btn-block btn-primary btn-sm">@lang('app.add')</a>
				</div>
				@endpermission
			</div>
                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
					<thead>
					<tr>
						<th>@lang('app.id')</th>
						<th>@lang('app.name')</th>
						<th>@lang('app.balance')</th>
						<th>@lang('app.start_balance')</th>
						<th>@lang('app.trigger')</th>
						<th>@lang('app.percent')</th>
						<th>@lang('app.status')</th>
						<th>@lang('app.pay_in')</th>
						<th>@lang('app.pay_out')</th>
					</tr>
					</thead>
					<tbody>
					@if (count($jackpots))
						@foreach ($jackpots as $jackpot)
							@include('backend.jackpots.partials.row')
						@endforeach
					@else
						<tr><td colspan="9">@lang('app.no_data')</td></tr>
					@endif
					</tbody>
					<thead>
					<tr>
						<th>@lang('app.id')</th>
						<th>@lang('app.name')</th>
						<th>@lang('app.balance')</th>
						<th>@lang('app.start_balance')</th>
						<th>@lang('app.trigger')</th>
						<th>@lang('app.percent')</th>
						<th>@lang('app.status')</th>
						<th>@lang('app.pay_in')</th>
						<th>@lang('app.pay_out')</th>
					</tr>
					</thead>
                            </table>
                        </div>
                    </div>
		</div>
	</section>

	<!-- Modal -->
	<div class="modal fade" id="openAddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<form action="{{ route('backend.jackpot.balance') }}" method="POST">
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
							<input type="hidden" id="AddId" name="jackpot_id">
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
				<form action="{{ route('backend.jackpot.balance') }}" method="POST">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title">@lang('app.balance') @lang('app.pay_out')</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="OutSum">@lang('app.sum')</label>
							<input type="text" class="form-control" id="OutSum" name="summ" placeholder="@lang('app.sum')" required>
							<input type="hidden" name="type" value="out">
							<input type="hidden" id="OutId" name="jackpot_id">
							<input type="hidden" name="_token" value="{{ csrf_token() }}">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">@lang('app.close')</button>
						<button type="submit" class="btn btn-primary">@lang('app.pay_out')</button>
					</div>
				</form>
			</div>
		</div>
	</div>

@stop

@section('scripts')
	<script>
		$('#jackpots-table').dataTable();
		$("#status").change(function () {
			$("#users-form").submit();
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
			console.log(item);
			var id = item.attr('data-id');
			$('#OutId').val(id);
		});
	</script>
@stop