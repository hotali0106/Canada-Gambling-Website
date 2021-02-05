<tr>        
    <td><a href="{{ route('backend.api.edit', $api_item->id) }}">{{ $api_item->keygen }}</a></td>
    <td>{{ $api_item->ip }}</td>
    <td>
		<small><i class="fa fa-circle @if($api_item->status) text-green @else text-red @endif"></i></small>
    </td>
</tr>