<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label>@lang('app.title')</label>
            <input type="text" class="form-control" id="title" name="name" placeholder="@lang('app.title')" required value="{{ $edit ? $shop->name : old('name') }}">
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label>@lang('app.percent')</label>
            @php
                $percents = array_combine(\VanguardLTE\Shop::$values['percent'], \VanguardLTE\Shop::$values['percent']);
            @endphp
            {!! Form::select('percent', $percents, $edit ? $shop->percent : old('percent')?:'90', ['class' => 'form-control']) !!}
        </div>
    </div>



    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.frontend')</label>
            {!! Form::select('frontend', $directories, $edit ? $shop->frontend : old('frontend')?:'Default', ['class' => 'form-control']) !!}
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.order')</label>
            @php
                $orders = array_combine(\VanguardLTE\Shop::$values['orderby'], \VanguardLTE\Shop::$values['orderby']);
            @endphp
            {!! Form::select('orderby', $orders, $edit ? $shop->orderby : old('orderby'), ['class' => 'form-control']) !!}
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label> @lang('app.currency')</label>
            @php
                $currencies = array_combine(\VanguardLTE\Shop::$values['currency'], \VanguardLTE\Shop::$values['currency']);
            @endphp
            {!! Form::select('currency', $currencies, $edit ? $shop->currency : old('currency')?:'USD', ['class' => 'form-control']) !!}
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label for="device"> @lang('app.categories')</label>
            <select class="form-control select2" name="categories[]" {{ $edit ? 'disabled' : ''  }} multiple="multiple" required>
                <option value="0" {{ ((old('categories') && in_array(0, old('categories')) ) || ($edit && in_array(0, $cats) )) ? 'selected':'' }}>All</option>
                @foreach ($categories as $key=>$category)
                    <option value="{{ $category->id }}"
                            {{
    ((old('categories') && in_array($category->id, old('categories')) )  || ($edit && in_array($category->id, $cats) ))
    ? 'selected':'' }}
                    >{{ $category->title }}</option>
                    @foreach ($category->inner as $inner)
                        <option value="{{ $inner->id }}"
                                {{
    (( old('categories') && in_array($inner->id, old('categories')) || ( $edit && in_array($inner->id, $cats) )) ) ? 'selected':''

    }}>{{ $inner->title }}</option>
                    @endforeach
                @endforeach
            </select>
        </div>
    </div>
</div>
<div class="row">
    @if($edit && count($blocks))
    <div class="col-md-6">
        <div class="form-group">
            <label for="device">
                @lang('app.status'):
                @if($shop->is_blocked)
                    @lang('app.block')
                @else
                    @lang('app.unblock')
                @endif
            </label>
            {!! Form::select('is_blocked', $blocks, $edit ? $shop->is_blocked : old('is_blocked'), ['class' => 'form-control']) !!}
        </div>
    </div>
    @endif
</div>


