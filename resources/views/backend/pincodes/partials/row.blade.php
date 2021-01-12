<tr>        
    <td><a href="{{ route('backend.pincode.edit', $pincode->id) }}">{{ $pincode->code?:$pincode->id }}</a></td>
	<td>{{ $pincode->nominal }}</td>
	<td>{{ $pincode->created_at }}</td>
    <td>
        @if( $pincode->status )
            <small><i class="fa fa-circle text-green"></i></small>
        @else
            <small><i class="fa fa-circle text-red"></i></small>
        @endif
    </td>
</tr>