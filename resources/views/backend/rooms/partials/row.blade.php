<tr>        
    <td><a href="{{ route('backend.room.edit', $room->id) }}">{{ $room->name }}</a></td>
	<td><a href="{{ route('frontend.jpstv', $room->id) }}" target="_blank">{{ $room->id }}</a></td>
    <td>{{ $room->balance }}</td>
	<td>{{ $room->percent }}</td>
	<td>{{ $room->frontend }}</td>
	<!--
	<td>
		@if( $room->categories )
			{{ $room->titles() }}
		@else
			---
		@endif
	</td>
	-->
	<td>{{ $room->currency }}</td>
	<td>{{ $room->orderby }}</td>
	<td>
		@if($room->is_blocked)
			<small><i class="fa fa-circle text-red"></i></small>
		@else
			<small><i class="fa fa-circle text-green"></i></small>
		@endif
	</td>
	<td>
		@if( Auth::user()->hasRole('dealer') )
		
		<a class="addPayment" href="#" data-toggle="modal" data-target="#openAddModal" data-id="{{ $room->id }}" >
		<button type="button" class="btn btn-block btn-success btn-xs">ADD</button>
	    </a>
		@else
			<button type="button" class="btn btn-block btn-success disabled btn-xs">ADD</button>
		@endif
	</td>
	<td>
		@if( Auth::user()->hasRole('dealer') )
		<a class="outPayment" href="#" data-toggle="modal" data-target="#openOutModal" data-id="{{ $room->id }}" >
	    <button type="button" class="btn btn-block btn-danger btn-xs">OUT</button>
		</a>
		@else
			<button type="button" class="btn btn-block btn-danger disabled btn-xs">OUT</button>
		@endif
	</td>
</tr>