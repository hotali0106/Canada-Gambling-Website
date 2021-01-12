<tr>
	<td>{{ $jackpot->id }}</td>
	<td><a href="{{ route('backend.jackpot.edit', $jackpot->id) }}">{{ $jackpot->name }}</a></td>
	<td>{{ $jackpot->balance }}</td> 
	<td>{{ $jackpot->start_balance }}</td>
	<td>{{ $jackpot->pay_sum }}</td>
	<td>{{ $jackpot->percent }}</td>
	<td>
		@if(!$jackpot->view)
			<small><i class="fa fa-circle text-red"></i></small>
		@else
			<small><i class="fa fa-circle text-green"></i></small>
		@endif
	</td>
	<td>
		@if( Auth::user()->hasRole('distributor') )
		<a class="addPayment" href="#" data-toggle="modal" data-target="#openAddModal" data-id="{{ $jackpot->id }}" >
		<button type="button" class="btn btn-block btn-success btn-xs">@lang('app.add')</button>
		</a>
		@else
			<button type="button" class="btn btn-block btn-success disabled btn-xs">@lang('app.add')</button>
		@endif
	</td>
	<td>
		@if( Auth::user()->hasRole('distributor') )
		<a class="outPayment" href="#" data-toggle="modal" data-target="#openOutModal" data-id="{{ $jackpot->id }}" >
		<button type="button" class="btn btn-block btn-danger btn-xs">@lang('app.out')</button>
		</a>
		@else
			<button type="button" class="btn btn-block btn-danger disabled btn-xs">@lang('app.out')</button>
		@endif
	</td>
</tr>