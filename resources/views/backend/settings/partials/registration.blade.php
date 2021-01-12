{!! Form::open(['route' => 'backend.settings.auth.update', 'id' => 'registration-settings-form']) !!}


<div class="form-group">
    <input type="hidden" value="0" name="reg_enabled">
    <label class="checkbox-container">
        @lang('app.allow_registration')
        {!! Form::checkbox('reg_enabled', 1, settings('reg_enabled'), ['id' => 'switch-reg-enabled']) !!}
        <span class="checkmark"></span>
    </label>
</div>

<div class="form-group">
    <input type="hidden" value="0" name="forgot_password">
    <label class="checkbox-container">
        @lang('app.forgot_password')
        {!! Form::checkbox('forgot_password', 1, settings('forgot_password'), ['id' => 'switch-forgot_password']) !!}
        <span class="checkmark"></span>
    </label>
</div>
