<tr>
	<td>{{ $happyhour->id }}</td>
	<td><a href="{{ route('backend.happyhour.edit', $happyhour->id) }}">{{ $happyhour->multiplier }}</a></td>
	<td>{{ $happyhour->wager }}</td>
	<td>{{ \VanguardLTE\HappyHour::$values['time'][$happyhour->time] }}</td>
	<td>
		@if(!$happyhour->status)
			<small><i class="fa fa-circle text-red"></i></small>
		@else
			<small><i class="fa fa-circle text-green"></i></small>
		@endif
	</td>

</tr>