<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.min_pay')</label>
        <input type="text" class="form-control" name="min_pay" placeholder="@lang('app.min_pay')" required value="{{ $edit ? $return->min_pay : '' }}">
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.max_pay')</label>
        <input type="text" class="form-control" name="max_pay" placeholder="@lang('app.max_pay')" required value="{{ $edit ? $return->max_pay : '' }}">
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.percent')</label>
        @php
            $percents = array_combine(\VanguardLTE\Returns::$values['percent'], \VanguardLTE\Returns::$values['percent']);
        @endphp
        {!! Form::select('percent', $percents, $edit ? $return->percent : '', ['class' => 'form-control']) !!}
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.min_balance')</label>
        <input type="text" class="form-control" name="min_balance" placeholder="@lang('app.min_balance')" required value="{{ $edit ? $return->min_balance : 0 }}">
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.status')</label>
        {!! Form::select('status', ['0' => __('app.disabled'), '1' => __('app.active')], $edit ? $return->status : 1, ['id' => 'status', 'class' => 'form-control']) !!}
    </div>
</div>