@extends('backend.layouts.app')

@section('page-title', trans('app.api_generator'))
@section('page-heading', trans('app.api_generator'))

@section('content')

<section class="content-header">
@include('backend.partials.messages')
</section>

    <section class="content">
    {!! Form::open(['route' => 'backend.settings.generator.post', 'id' => 'generator-form']) !!}
    <div class="box box-primary">
    <div class="box-header with-border">
    <h3 class="box-title">@lang('app.api_generator')</h3>
    </div>
    <div class="box-body">
    <div class="row">

            

            <div class="col-md-6">
              <div class="form-group">
                <label>@lang('app.api')</label>
                {{ Form::select('key', $api, Request::old('key'), ['class' => 'form-control', 'id' => 'keys']) }}
			  </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>@lang('app.view')</label>
                {{ Form::select('view', $view, Request::old('view'), ['class' => 'form-control changing', 'id' => 'view']) }}
			  </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>@lang('app.device')</label>
                {{ Form::select('device[]', $device, Request::old('device'), ['class' => 'form-control changing', 'multiple' => 'multiple', 'id' => 'device']) }}
			  </div>
            </div>

        <div class="col-md-12">
            <div class="form-group">
                <label for="device">@lang('app.categories')</label>
                <select name="categories_ids[]" id="categories" class="form-control select2 changing" multiple="multiple" style="width: 100%;" >
                    @foreach ($categories as $key=>$category)
                        <option value="{{ $category->id }}" {{ (Request::get('categories_ids') && in_array($category->id, Request::get('categories_ids')))? 'selected="selected"' : '' }}>{{ $category->title }}</option>
                        @foreach ($category->inner as $inner)
                            <option value="{{ $inner->id }}" {{ (Request::get('categories_ids') && in_array($inner->id, Request::get('categories_ids')))? 'selected="selected"' : '' }}>{{ $inner->title }}</option>
                        @endforeach
                    @endforeach
                </select>
            </div>
        </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>@lang('app.games')</label>
					<select name="game_ids[]" multiple="multiple" class="form-control" id="games">
						@foreach ($games as $game)
							<option value="{{ $game }}" @php if(Request::get('game_ids') && in_array($game, Request::get('game_ids'))) {echo 'selected';} @endphp >{{ $game }}</option>
					@endforeach
					</select>
			  </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label>@lang('app.jackpots')</label>
                {{ Form::select('jackpot_ids[]', $jackpots, Request::old('jackpot_ids'), ['class' => 'form-control', 'multiple' => 'multiple']) }}
			  </div>
            </div>

			@if( $text )
            <div class="col-md-12">
              <div class="form-group">
                <label>@lang('app.generate_api_code')</label>
					<textarea class="form-control" rows="5">{{ $text }}</textarea>
			  </div>
            </div>
			@endif

    </div>
    </div>
        <div class="box-footer">
            <button type="submit" class="btn btn-primary">
                @lang('app.api_generator')
            </button>
        </div>
    </div>
    {{ Form::close() }}
    </section>

@stop

@section('scripts')
    <script>
        $(".changing").change(function () {

			var categories = $('#categories').val();
			var device = $('#device').val();
			var view = $('#view').val();


            $.ajax({
				dataType: "json",
				url: "{{ route('backend.game.list.json') }}",
				data: {view: view, categories: categories, device: device},
				success: function(data){

					var games = '';

					$.each(data, function(index, item) {
						games += '<option value="' + item + '">' + item + '</option>';
					});

					$('#games')
						.find('option')
						.remove()
						.end()
						.append(games);
				}
			});
        });
    </script>
@stop