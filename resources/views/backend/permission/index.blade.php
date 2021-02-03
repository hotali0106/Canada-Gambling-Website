@extends('backend.layouts.app')

@section('page-title', trans('app.permissions'))
@section('page-heading', trans('app.permissions'))

@section('content')

    <section class="content-header">
        @include('backend.partials.messages')
    </section>

    <section class="content">
        {!! Form::open(['route' => 'backend.permission.save', 'class' => 'mb-4']) !!}
        <div class="box box-primary">
            <div class="box-header with-border">
                <h3 class="box-title">@lang('app.permissions')</h3>
                @permission('permissions.add')
                <div class="pull-right box-tools">
                    <a href="{{ route('backend.permission.create') }}" class="btn btn-block btn-primary btn-sm">@lang('app.add')</a>
                </div>
                @endpermission
            </div>
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>@lang('app.name')</th>
                            @foreach ($roles as $role)
                                <th>{{ $role->name }}</th>
                            @endforeach
                        </tr>
                        </thead>
                        <tbody>
                        @if (count($permissions))
                            @foreach ($permissions as $permission)
                                <tr>
                                    <td><a href="{{ route('backend.permission.edit', $permission->id) }}">{{ $permission->name ?: $permission->name }}</a></td>

                                    @foreach ($roles as $role)
                                        <td>
                                            <label class="checkbox-container" for="cb-{{ $role->id }}-{{ $permission->id }}">
                                            {!!
                                            Form::checkbox(
                                                "roles[{$role->id}][]",
                                                $permission->id,
                                                $role->hasOnePermission($permission->id),
                                                [
                                                    'id' => "cb-{$role->id}-{$permission->id}"
                                                ]
                                            )
                                            !!}
                                                <span class="checkmark"></span>
                                            </label>
                                        </td>
                                    @endforeach
                                </tr>
                            @endforeach
                        @endif
                        </tbody>
                        <thead>
                        <tr>
                            <th>@lang('app.name')</th>
                            @foreach ($roles as $role)
                                <th>{{ $role->name }}</th>
                            @endforeach
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div class="box-footer">
                <button type="submit" class="btn btn-primary">
                    @lang('app.save_permissions')
                </button>
            </div>
            {!! Form::close() !!}
        </div>

    </section>

@stop
