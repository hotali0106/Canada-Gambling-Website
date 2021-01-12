<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.title')</label>
        <input type="text" class="form-control" id="title" name="name" placeholder="@lang('app.title')" required value="{{ $edit ? $room->name : '' }}">
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.percent')</label>
        @php
            $percents = array_combine(\VanguardLTE\Room::$values['percent'], \VanguardLTE\Room::$values['percent']);
        @endphp
        {!! Form::select('percent', $percents, $edit ? $room->percent : '90', ['class' => 'form-control']) !!}
    </div>
</div>



<div class="col-md-6">
    <div class="form-group">
        <label>@lang('app.frontend')</label>
        {!! Form::select('frontend', $directories, $edit ? $room->frontend : '', ['class' => 'form-control']) !!}
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>Order</label>
        @php
            $orders = array_combine(\VanguardLTE\Room::$values['orderby'], \VanguardLTE\Room::$values['orderby']);
        @endphp
        {!! Form::select('orderby', $orders, $edit ? $room->orderby : '', ['class' => 'form-control']) !!}
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label>Currency</label>
        @php
            $currencies = array_combine(\VanguardLTE\Room::$values['currency'], \VanguardLTE\Room::$values['currency']);
        @endphp
        {!! Form::select('currency', $currencies, $edit ? $room->currency : '', ['class' => 'form-control']) !!}
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="device">Categories</label>
        <select class="form-control select2" name="categories[]" {{ $edit ? 'disabled' : ''  }} multiple="multiple" required>
            @foreach ($categories as $key=>$category)
                <option value="{{ $category->id }}" {{ ($edit && in_array($category->id, $cats) )  ? 'selected':'' }}>{{ $category->title }}</option>
                @foreach ($category->inner as $inner)
                    <option value="{{ $inner->id }}" {{ ( $edit && in_array($inner->id, $cats) ) ? 'selected':'' }}>{{ $inner->title }}</option>
                @endforeach
            @endforeach
        </select>
    </div>
</div>

