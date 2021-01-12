<tr>
    <td>
        <a href="{{ route('backend.user.edit', $user->id) }}">
            {{ $user->username ?: trans('app.n_a') }}
        </a>
    </td>

	@permission('users.balance.manage')
	<td>{{ $user->balance }}</td>
	<td>{{ $user->bonus }}</td>
	<td>{{ $user->wager }}</td>
	<td>
		@if( 
			(Auth::user()->hasRole('admin') && $user->hasRole(['agent'])) ||
			(Auth::user()->hasRole('agent') && $user->hasRole(['distributor'])) ||
			(Auth::user()->hasRole('cashier') && $user->hasRole('user'))
		)
		<a class="newPayment addPayment" href="#" data-toggle="modal" data-target="#openAddModal" data-id="{{ $user->id }}" >
		<button type="button" class="btn btn-block btn-success btn-xs">@lang('app.add')</button>
		</a>
		@else
			<button type="button" class="btn btn-block btn-success disabled btn-xs">@lang('app.add')</button>
		@endif
	</td>
	<td>
		@if(
    		$user->wager == 0 &&
    		(
				(Auth::user()->hasRole('admin') && $user->hasRole(['agent'])) ||
				(Auth::user()->hasRole('agent') && $user->hasRole(['distributor'])) ||
				(Auth::user()->hasRole('cashier') && $user->hasRole('user'))
			)
		)
		<a class="newPayment outPayment" href="#" data-toggle="modal" data-target="#openOutModal" data-id="{{ $user->id }}" >
		<button type="button" class="btn btn-block btn-danger btn-xs">@lang('app.out')</button>
		</a>
		@else
			<button type="button" class="btn btn-block btn-danger disabled btn-xs">@lang('app.out')</button>
		@endif
	</td>
    @endpermission

	@if(isset($show_shop) && $show_shop)
		@if($user->shop)
			<td><a href="{{ route('backend.shop.edit', $user->shop->id) }}">{{ $user->shop->name }}</a></td>
			@else
			<td></td>
		@endif
	@endif
</tr>