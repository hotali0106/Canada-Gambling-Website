{!! Form::open(['route' => 'backend.settings.auth.update', 'id' => 'auth-throttle-settings-form']) !!}

    <div class="form-group">
        <label>
            @lang('app.maximum_number_of_attempts')
            <small class="text-muted">@lang('app.max_number_of_incorrect_login_attempts')</small>
        </label>
        <input type="text" name="throttle_attempts" class="form-control" value="{{ settings('throttle_attempts', 10) }}">
    </div>

    <div class="form-group">
        <label>@lang('app.lockout_time')</label>
        <input type="text" name="throttle_lockout_time" class="form-control" value="{{ settings('throttle_lockout_time', 1) }}">
    </div>
    <div class="form-group">
        <input type="hidden" value="0" name="throttle_enabled">
        <label class="checkbox-container">
            @lang('app.throttle_authentication')
            {!! Form::checkbox('throttle_enabled', 1, settings('throttle_enabled'), ['id' => 'switch-throttle']) !!}
            <span class="checkmark"></span>
        </label>
    </div>