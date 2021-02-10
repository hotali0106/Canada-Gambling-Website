@extends('backend.layouts.app')

@section('page-title', trans('app.withdraw'))
@section('page-heading', trans('app.withdraw'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>

	<section class="content">
		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">@lang('app.withdraw')</h3>
				<div class="pull-right box-tools">
					<a href="" class="btn btn-block btn-primary btn-sm">ADD</a>
				</div>
			</div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped" id="withdraw-table">
						<thead>
							<tr>
								<th>UserID</th>
								<th>Username</th>
								<th>RealBalance</th>
								<th>BonusBalance</th>
								<!-- <th>$Deposit with Bonus</th> -->
								<th>$Bonus</th>
								<th>$WagerTime</th>
								<th>$Wager</th>
								<th>Withdraw Req</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
						@if(isset($transactions) && count($transactions))
						@foreach($transactions as $transaction)
							<tr>
								<td>{{$transaction->username}}</td>
								<td>{{$transaction->first_name}}</td>
								<td>{{$transaction->balance}}</td>
								<td>{{$transaction->count_balance}}</td>
								<td>{{$transaction->count_bonus}}</td>
								<td>{{$transaction->wager_count}}</td>
								<td>{{abs($transaction->wager)}}</td>
								<td>{{$transaction->summ}}</td>
								<td class="d-flex">
									@if($transaction->approve)
									<button type="button" class="btn btn-block btn-success btn-xs">Approve</button>
									@else
									<button type="button" class="btn btn-block btn-success btn-xs" disabled="true">Approve</button>
									@endif
									<a href="{{ route('backend.reject.edit', $transaction->id) }}" type="button" class="btn btn-block btn-danger btn-xs">Reject</a>
								</td>
							</tr>
						@endforeach
						@endif
						</tbody>
                    </table>
                </div>
            </div>
		</div>
	</section>
@stop

@section('scripts')
	<script>
		$('#withdraw-table').dataTable();
	</script>
@stop
