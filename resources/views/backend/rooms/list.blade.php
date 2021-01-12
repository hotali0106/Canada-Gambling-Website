@extends('backend.layouts.app')

@section('page-title', trans('app.rooms'))
@section('page-heading', trans('app.rooms'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>

	<section class="content">
		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">@lang('app.rooms')</h3>
				<div class="pull-right box-tools">
					<a href="{{ route('backend.room.create') }}" class="btn btn-block btn-primary btn-sm">ADD</a>
				</div>
			</div>
                    <div class="box-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
					<thead>
					<tr>
						<th>Name</th>
						<th>ID</th>
						<th>Credit</th>
						<th>Percent</th>
						<th>Frontend</th>
						<!--<th>Category</th>-->
						<th>Currency</th>
						<th>Order</th>
						<th>Status</th>						
						<th>@lang('app.pay_in')</th>
						<th>@lang('app.pay_out')</th>
					</tr>
					</thead>
					<tbody>
					@if (count($rooms))
						@foreach ($rooms as $room)
							@include('backend.rooms.partials.row')
						@endforeach
					@else
						<tr><td colspan="12">No data available in table</td></tr>
					@endif
					</tbody>
					<thead>
					<tr>
						<th>Name</th>
						<th>ID</th>
						<th>Credit</th>
						<th>Percent</th>
						<th>Frontend</th>
						<!--<th>Category</th>-->
						<th>Currency</th>
						<th>Order</th>
						<th>Status</th>
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
				<form action="{{ route('backend.room.balance') }}" method="POST">
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
							<input type="hidden" id="AddId" name="room_id">
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
				<form action="{{ route('backend.room.balance') }}" method="POST">
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
							<input type="hidden" id="OutId" name="room_id">
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
		$('#rooms-table').dataTable();
		$("#view").change(function () {
			$("#rooms-form").submit();
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
		});
	</script>
@stop
