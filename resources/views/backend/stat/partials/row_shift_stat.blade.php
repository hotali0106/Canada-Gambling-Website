<tr>
	@if(!auth()->user()->hasRole('cashier'))
	<td>{{ $stat->id }}</td>
	@endif
	<td>{{ $stat->user->username }}</td>
	<td>{{ date(config('app.date_time_format'), strtotime($stat->start_date)) }}</td>
	<td>{{ $stat->end_date ? date(config('app.date_time_format'), strtotime($stat->end_date)) : '' }}</td>
	@if(!auth()->user()->hasRole('cashier'))
		<td>{{ $stat->balance }}</td>
	<td>{{ $stat->balance_in }}</td>
	<td>{{ $stat->balance_out }}</td>
	@endif
	<td>{{ number_format ($stat->balance + $stat->balance_in - $stat->balance_out, 4, ".", "") }}</td>
	@permission('games.in_out')
	@php
			$banks = !$stat->end_date ? $stat->banks() : $stat->last_banks;
	@endphp
	<td>{{ number_format ($banks, 4, ".", "") }}</td>
	@endpermission
	@if(!auth()->user()->hasRole('cashier'))
	<td>
		@if( !$stat->end_date )
			{{ $stat->returns() }}
		@else
			{{ $stat->last_returns }}
		@endif
	</td>
    @endif
	@php
		$money = $stat->users;
		if($stat->end_date == NULL){
			$money = $summ;
		}
	@endphp

	<td>{{ $money }}</td>
	<td>{{ $stat->money_in }}</td>
	<td>{{ $stat->money_out }}</td>

	@php
		$total = $stat->money_in - $stat->money_out;
	@endphp

	<td>{{ number_format ($total, 4, ".", "") }}</td>

	@if(auth()->user()->hasRole('admin'))
	<td>{{ number_format ($stat->profit(), 4, ".", "") }}</td>
	@endif
</tr>