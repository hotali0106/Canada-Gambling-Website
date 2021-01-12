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
                                @if( !in_array($permission->id, [1,3,6,7,11,12,13,14,37]))

                                <tr>
                                    <td><a href="{{ route('backend.permission.edit', $permission->id) }}">{{ $permission->name ?: $permission->name }}</a></td>

                                    @foreach ($roles as $role)
                                        <td>

                                                @if(
                                                    in_array($role->id, [1,6]) ||
                                                    ($permission->id == 54 && $role->id != 2)
                                                    //||
                                                    //($permission->id == 42 && $role->id == 3)

                                                    )
                                                    <label class="checkbox-container" for="cb-{{ $role->id }}-{{ $permission->id }}">
                                                    {!!
                                                    Form::checkbox(
                                                        "roles_temp[{$role->id}][]",
                                                        $permission->id,
                                                        $role->hasOnePermission($permission->id),
                                                        [
                                                            'id' => "cb-{$role->id}-{$permission->id}",
                                                            'disabled' => 'disabled'
                                                        ]
                                                    )
                                                    !!}
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    {!!
                                                    Form::checkbox(
                                                        "roles[{$role->id}][]",
                                                        $permission->id,
                                                        $role->hasOnePermission($permission->id),
                                                        [
                                                            'id' => "cb-{$role->id}-{$permission->id}",
                                                            'style' => 'display: none;'
                                                        ]
                                                    )
                                                    !!}
                                                @else
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
                                                @endif
                                        </td>
                                    @endforeach
                                </tr>

                                @else

                                    <!-- disabled -->
                                    @foreach ($roles as $role)
                                        {!!
                                                    Form::checkbox(
                                                        "roles[{$role->id}][]",
                                                        $permission->id,
                                                        $role->hasOnePermission($permission->id),
                                                        [
                                                            'class' => 'custom-control-input',
                                                            'id' => "cb-{$role->id}-{$permission->id}",
                                                            'style' => 'display: none;'
                                                        ]
                                                    )
                                                    !!}
                                    @endforeach
                                    <!-- end disabled -->

                                @endif
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