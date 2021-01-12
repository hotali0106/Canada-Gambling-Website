@extends('backend.layouts.app')

@section('page-title', trans('app.add_pincode'))
@section('page-heading', trans('app.add_pincode'))

@section('content')

<section class="content-header">
@include('backend.partials.messages')
</section>

    <section class="content">

        {!! Form::open(['route' => 'backend.pincode.massadd', 'files' => true]) !!}
        <div class="box box-default">
            <div class="box-header with-border">
                <h3 class="box-title">ADD PIN</h3>
            </div>

            <div class="box-body">
                <div class="row">

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>@lang('app.count2')</label>
                            <select name="count" class="form-control">
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label>@lang('app.nominal')</label>
                            <input type="text" class="form-control" id="title" name="nominal" value="0">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="status">@lang('app.status')</label>
                            {!! Form::select('status', [__('app.disabled'), __('app.active')], 1, ['class' => 'form-control', 'id' => 'status']) !!}
                        </div>
                    </div>

                </div>
            </div>

            <div class="box-footer">
                <button type="submit" class="btn btn-primary">
                    ADD PIN
                </button>
            </div>
        </div>
        {!! Form::close() !!}


            {!! Form::open(['route' => 'backend.pincode.store', 'files' => true, 'id' => 'user-form']) !!}
      <div class="box box-default">
        <div class="box-header with-border">
          <h3 class="box-title">ADD PIN</h3>
        </div>

        <div class="box-body">
          <div class="row">
		  
                @include('backend.pincodes.partials.base', ['edit' => false, 'profile' => false])
								
          </div>
        </div>

        <div class="box-footer">
            <button type="submit" class="btn btn-primary">
                ADD PIN
            </button>
        </div>
      </div>

            {!! Form::close() !!}

    </section>

@stop

@section('scripts')
    <script>
        $(function() {
            $('[data-mask]').inputmask({
                mask: "****-****-****-****",
                definitions: {'5': {validator: "[0-9A-Z]"}}
            });
            $('#datepicker').datetimepicker({
                locale: 'ru',
                format: 'YYYY-MM-DD HH-mm',
            })
        });
    </script>
@stop