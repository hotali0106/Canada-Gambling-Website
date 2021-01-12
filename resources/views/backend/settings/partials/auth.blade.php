{!! Form::open(['route' => 'backend.settings.auth.update', 'id' => 'auth-general-settings-form']) !!}

    <div class="form-group">
        <label>
            @lang('app.reset_token_lifetime')
        </label>
        <input type="text" name="login_reset_token_lifetime" class="form-control" value="{{ settings('login_reset_token_lifetime', 30) }}">
    </div>

<div class="form-group">
    <label>
        @lang('app.frontend')
    </label>
    {!! Form::select('frontend', $directories, settings('frontend', 'Default'), ['class' => 'form-control']) !!}
</div>

<div class="form-group">
    <input type="hidden" value="0" name="use_email">
    <label class="checkbox-container">
        @lang('app.use_email')
        {!! Form::checkbox('use_email', 1, settings('use_email'), ['id' => 'use-email']) !!}
        <span class="checkmark"></span>
    </label>
</div>

    <div class="form-group">
        <input type="hidden" value="0" name="remember_me">
        <label class="checkbox-container">
            @lang('app.allow_remember_me')
            {!! Form::checkbox('remember_me', 1, settings('remember_me'), ['id' => 'switch-remember-me']) !!}
            <span class="checkmark"></span>
        </label>
    </div>

    <div class="form-group">
        <input type="hidden" value="0" name="reset_authentication">
        <label class="checkbox-container">
            @lang('app.reset_authentication')
            {!! Form::checkbox('reset_authentication', 1, settings('reset_authentication'), ['id' => 'switch-reset-authentication']) !!}
            <span class="checkmark"></span>
        </label>
    </div>


    <div class="form-group">
        <input type="hidden" value="0" name="check_active_tab">
        <label class="checkbox-container">
            @lang('app.check_active_tab')
            {!! Form::checkbox('check_active_tab', 1, settings('check_active_tab'), ['id' => 'switch-check_active_tab']) !!}
            <span class="checkmark"></span>
        </label>

    </div>

<div class="form-group">
    <input type="hidden" value="0" name="siteisclosed">
    <label class="checkbox-container">
        @lang('app.turn_off_the_site')
        {!! Form::checkbox('siteisclosed', 1, settings('siteisclosed'), ['id' => 'switch-siteisclosed']) !!}
        <span class="checkmark"></span>
    </label>
</div>

<div class="form-group">
    <input type="hidden" value="0" name="use_all_categories">
    <label class="checkbox-container">
        @lang('app.use_all_categories')
        {!! Form::checkbox('use_all_categories', 1, settings('use_all_categories'), ['id' => 'switch-use_all_categories']) !!}
        <span class="checkmark"></span>
    </label>
</div>

