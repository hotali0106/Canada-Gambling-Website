<tr>        
    <td><a href="{{ route('backend.returns.edit', $return->id) }}">{{ $return->min_pay }}</a></td>
	<td><a href="{{ route('backend.returns.edit', $return->id) }}">{{ $return->max_pay }}</a></td> 
	<td><a href="{{ route('backend.returns.edit', $return->id) }}">{{ $return->percent }}</a></td>
	<td>{{ $return->min_balance }}</td>
	<td>
		@if(!$return->status)
			<small><i class="fa fa-circle text-red"></i></small>
		@else
			<small><i class="fa fa-circle text-green"></i></small>
		@endif
	</td>
</tr>