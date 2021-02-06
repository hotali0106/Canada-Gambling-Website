@extends('frontend.Default.layouts.user')
@section('profile')
<main class="profile">
    <div class="profile container pt-5">
        <div class="row">
            <div class="side-menu col-md-3 p-0">
                @include('frontend.Default.user.tab')
            </div>
            <div class="col-md-9 p-0">
                <div class="main-section px-4 py-4">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Balance</h3>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Available to cash out</th>
                                    <th scope="col">Currency</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{Auth::user()->balance}}</td>
                                    <td>{{Auth::user()->total_balance}}</td>
                                    <td>USD</td>
                                    <td>
                                        <button type="button" class="btn btn-success" onclick="fn_deposit('1')">Deposit</button>
                                        <button type="button" class="btn btn-info" onclick="fn_cashout_modal()">Cash Out</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row my-2">
                        <div class="col-md-4">Total Bonus: {{Auth::user()->count_bonus}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
</main>
@endsection
