<tr>
    <td>{{ $stat->game }}</td>
	<td>{{ $stat->user->username }}</td>
	<td><span class="text-green">{{ $stat->balance }}</span></td>
	<td>{{ $stat->bet }}</td>
	<td>{{ $stat->win }}</td>
	<td>{{ $stat->percent }}</td>
	<td>{{ $stat->percent_jps }}</td>
	<td>{{ $stat->percent_jpg }}</td>
	@if(auth()->user()->hasRole('admin'))
	<td>{{ $stat->profit }}</td>
	@endif
	<td>{{ $stat->denomination }}</td>
	<td>{{ date(config('app.date_time_format'), strtotime($stat->date_time)) }}</td>
    @if(isset($show_shop) && $show_shop)
        @if($stat->shop)
            <td><a href="{{ route('backend.shop.edit', $stat->shop->id) }}">{{ $stat->shop->name }}</a></td>
        @else
            <td>@lang('app.no_shop')</td>
        @endif
    @endif
</tr>