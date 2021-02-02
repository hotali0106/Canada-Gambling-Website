<tr>        
    <td><a href="{{ route('backend.info.edit', $info_item->id) }}">/backend/{{ $info_item->link }}</a></td>
    <td>{{ $info_item->title }}</td>
    <td>{{ str_replace('|', ', ', $info_item->roles) }}</td>
</tr>