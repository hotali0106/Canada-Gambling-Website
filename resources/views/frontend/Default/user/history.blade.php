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
                    <div class="sub-menu mb-4">
                        <ul class="d-flex">
                            <li>
                                <a href="#" class="active py-2 px-4">Transaction History</a>
                            </li>
                            <li>
                                <a href="#" class="py-2 px-4">Bets History</a>
                            </li>
                            <li>
                                <a href="#" class="py-2 px-4">Bonus History</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="divider"></hr>
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Payments</h3>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col-md-12">
                            <div class="code-input-content py-4 px-5 mt-2 border border-secondary rounded bg-light">
                                <div class="form-inline">
                                    <div class="form-group">
                                        <label for="currency">Currency</label>
                                        <select class="form-control ml-2" id="currency">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>                                           
                                    </div>
                                    <div class="form-group ml-4">
                                        <label for="action">Action</label>
                                        <select class="form-control ml-2" id="action">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>                                           
                                    </div>
                                    <div class="form-group ml-4">
                                        <label for="action">Status</label>
                                        <select class="form-control ml-2" id="status">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>                                           
                                    </div>
                                    <button type="submit" class="btn btn-primary ml-4">Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <table class="table">
                        <thead>
                            <tr>
                                <th style="width: 40%" scope="col">Date</th>
                                <th style="width: 20%" scope="col">Status</th>
                                <th style="width: 20%" scope="col">Payment System</th>
                                <th style="width: 20%" scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if(count($historys))
                            @foreach($historys as $history)
                            <tr>
                                <td>{{ $history->created_at }}</td>
                                <td>{{ $history->status }}</td>
                                <td>{{ $history->system }}</td>
                                <td>{{ $history->summ }}</td>
                            </tr>
                            @endforeach
                            @endif
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>		
</main>
@endsection