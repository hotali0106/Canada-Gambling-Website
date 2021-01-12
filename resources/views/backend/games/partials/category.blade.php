
<div class="row">
    <div class="col-md-12">
		<div class="form-group">
            @foreach ($categories as $key=>$category)
                <div class="row">
                    <div class="col-md-6">
                        <input name="category[]" id="category_{{ $category->id }}" type="checkbox" value="{{ $category->id }}" @if($edit && in_array($category->id, $cats)) checked="checked" @endif>
                        <label class="custom-control-label d-inline" for="category_{{ $category->id }}">&nbsp;{{ $category->title }}</label>
                    </div>
                </div>
                @foreach ($category->inner as $inner)
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-5">
                            <input name="category[]" id="category_{{ $inner->id }}" type="checkbox" value="{{ $inner->id }}" @if($edit && in_array($inner->id, $cats)) checked="checked" @endif>
                            <label class="custom-control-label d-inline" for="category_{{ $inner->id }}">&nbsp;{{ $inner->title }}</label>
                        </div>
                    </div>
                @endforeach
            @endforeach
        </div>
    </div>

    @if ($edit)
        <div class="col-md-12 mt-2">
            <button type="submit" class="btn btn-primary" id="update-details-btn">
                @lang('app.edit_game')
            </button>
        </div>
    @endif
</div>
