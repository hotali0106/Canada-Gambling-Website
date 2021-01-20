@extends('backend.layouts.app')

@section('page-title', trans('app.country'))
@section('page-heading', trans('app.country'))

@section('content')

	<section class="content-header">
		@include('backend.partials.messages')
	</section>

	<section class="content">
		<div class="box box-primary">
			<div class="box-header with-border">
				<h3 class="box-title">@lang('app.country')</h3>
				<div class="pull-right box-tools">
					<a href="" class="btn btn-block btn-primary btn-sm">ADD</a>
				</div>
			</div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped" id="country-table">
						<thead>
							<tr>
								<th>Country</th>
								<th>Created_at</th>
								<th>Edit</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							@foreach($countrys as $country)
							<tr>
								<td>{{$country->country}}</td>
								<td>{{$country->created_at}}</td>
								<td>
									<button type="button" class="btn btn-block btn-success btn-xs">Edit</button>
								</td>
								<td>
									<button type="button" class="btn btn-block btn-danger btn-xs">Delete</button>
								</td>
							</tr>
							@endforeach
						</tbody>
                    </table>
                </div>
            </div>
		</div>
	</section>
@stop

@section('scripts')
	<script>
		$('#country-table').dataTable();
	</script>
@stop
