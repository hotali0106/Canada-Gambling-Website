<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.name')</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="@lang('app.name')" required value="{{ $edit ? $jackpot->name : '' }}">
    </div>
</div>
@if( Auth::user()->hasRole('distributor') )
    <div class="col-md-6">
        <div class="form-group">
            <label>@lang('app.balance')</label>
            <input type="text" class="form-control" id="balance" name="balance" placeholder="0.00" disabled value="{{ $edit ? $jackpot->balance : '' }}">
        </div>
    </div>
@endif
<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.start_balance')</label>
        <input type="text" class="form-control" id="start_balance" name="start_balance" placeholder="0.00" value="{{ $edit ? $jackpot->start_balance : '' }}">
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.trigger')</label>
        <input type="text" class="form-control" id="pay_sum" name="pay_sum" placeholder="@lang('app.pay_sum')" required value="{{ $edit ? $jackpot->pay_sum : '' }}">
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.percent')</label>
        @php
            $percents = array_combine(\VanguardLTE\JPG::$values['percent'], \VanguardLTE\JPG::$values['percent']);
        @endphp
        {!! Form::select('percent', $percents, $edit ? $jackpot->percent : '', ['class' => 'form-control']) !!}
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.status')</label>
        {!! Form::select('view', ['0' => 'Disabled', '1' => 'Active'], $jackpot->view, ['id' => 'view', 'class' => 'form-control']) !!}
    </div>
</div>