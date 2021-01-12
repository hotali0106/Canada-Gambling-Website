<div class="box-body box-profile">


    <div class="form-group">
        <label>@lang('app.role')</label>
        {!! Form::select('role_id', Auth::user()->available_roles( true ), $edit ? $user->role_id : '',
            ['class' => 'form-control', 'id' => 'role_id', 'disabled' => true]) !!}
    </div>

        <div class="form-group">
            <label>@lang('app.shops')</label>
            {!! Form::select('shops[]', $shops, ($edit && $user->hasRole(['admin', 'agent', 'distributor'])) ? $user->shops(true) : Auth::user()->shop_id,
                ['class' => 'form-control', 'id' => 'shops', ($edit) ? 'disabled' : '', ($edit && $user->hasRole(['agent','distributor'])) ? 'multiple' : '']) !!}
        </div>
        @if($user->hasRole(['agent','distributor']))
            <div class="form-group">
                <label>@lang('app.free_shops')</label>
                {!! Form::select('free_shops[]', $free_shops, [],
                    ['class' => 'form-control', 'id' => 'free_shops', 'multiple' => 'multiple']) !!}
            </div>
        @endif

    <div class="form-group">
        <label>@lang('app.status')</label>
        {!! Form::select('status', $statuses, $edit ? $user->status : '' ,
            ['class' => 'form-control', 'id' => 'status', 'disabled' => ($user->hasRole(['admin']) || $user->id == auth()->user()->id) ? true: false]) !!}
    </div>

    <div class="form-group">
        <label>@lang('app.username')</label>
        <input type="text" class="form-control" id="username" name="username" placeholder="(@lang('app.optional'))" value="{{ $edit ? $user->username : '' }}">
    </div>

    @if( $user->email != '' )
    <div class="form-group">
        <label>@lang('app.email')</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="(@lang('app.optional'))" value="{{ $edit ? $user->email : '' }}">
    </div>
    @endif

    <div class="form-group">
        <label>@lang('app.lang')</label>
        {!! Form::select('language', $langs, $edit ? $user->language : '', ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        <label>{{ $edit ? trans("app.new_password") : trans('app.password') }}</label>
        <input type="password" class="form-control" id="password" name="password" @if ($edit) placeholder="@lang('app.leave_blank_if_you_dont_want_to_change')" @endif>
    </div>

    <div class="form-group">
        <label>{{ $edit ? trans("app.confirm_new_password") : trans('app.confirm_password') }}</label>
        <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" @if ($edit) placeholder="@lang('app.leave_blank_if_you_dont_want_to_change')" @endif>
    </div>

</div>

<div class="box-footer">
    <button type="submit" class="btn btn-primary" id="update-details-btn">
        @lang('app.edit_user')
    </button>
</div>