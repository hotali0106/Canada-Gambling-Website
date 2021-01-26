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
                    <table class="table">
                        <thead>
                            <tr>
                                <th style="width: 20%" scope="col">Currency</th>
                                <th style="width: 20%" scope="col">Amount</th>
                                <th style="width: 20%" scope="col">Available to cash out</th>
                                <th style="width: 40%" scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-radio custom-control-inline cursor-pointer">
                                        <input type="radio" id="currency_usd" name="currency" class="custom-control-input">
                                        <label class="custom-control-label" for="currency_usd">USD</label>
                                    </div>
                                </th>
                                <td>0 USD</td>
                                <td>0 USD</td>
                                <td>
                                    <button type="button" class="btn btn-success">Deposit</button>
                                    <button type="button" class="btn btn-info">Cash Out</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="currency_cad" name="currency" class="custom-control-input" checked="checked">
                                        <label class="custom-control-label" for="currency_cad">CAD</label>
                                    </div>
                                </th>
                                <td>0 CAD</td>
                                <td>0 CAD</td>
                                <td>
                                    <button type="button" class="btn btn-success">Deposit</button>
                                    <button type="button" class="btn btn-info">Cash Out</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-md-12">
                            <button type="button" class="btn btn-outline-success">Add Currency</button>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col-md-4">Comp Points</div>
                    </div>
                    <div class="row my-2">
                        <div class="col-md-4">Lottery Tickets</div>
                    </div>
                    <div class="row my-2">
                        <div class="col-md-12">
                            <div class="code-input-content py-3 px-5 mt-2 border border-secondary rounded bg-light">
                                <h3>Add Promo Code</h3>
                                <label for="pin_code" class="mt-2">And Receive a Bonus</label>
                                <div class="row">
                                    <div class="col-md-8">
                                        <input type="text" class="form-control mt-2" id="pin_code" />
                                    </div>
                                    <div class="col-md-4">
                                        <button class="btn btn-primary mt-2">Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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