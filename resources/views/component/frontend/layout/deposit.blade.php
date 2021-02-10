<div id="deposit-modal" class="deposit-modal modal">
	<div class="deposit-modal-content">
		<form id="deposit-form" class="modal-form container" action="{{route('frontend.deposit.payment')}}" method="GET" target="_blank">
			<h2 class="text-center mb-5 text-light">Deposit</h2>
			<div class="row">
				<div class="col-sm-4">
					<label for="currency" class="mb-2 text-light">Currency</label>
					<select class="mb-4" id="deposit_currency" name="deposit_currency" placeholder="Currency" onchange="fn_change_currency()">
						@if(isset($currencys) && count($currencys))
                        @foreach($currencys as $currency)
                        <option value="{{$currency->id}}">{{$currency->currency}}</option>
                        @endforeach
                        @endif
					</select>
					<label class="mb-2 text-light">All Payment</label>
					<div class="btn-group-vertical w-100 payment-button-group">
						<button type="button" class="btn btn-outline-success mb-1 rounded-0">
                            <img src="{{asset('frontend/Default/img/interac-payment-icon.jpg')}}" alt="">
                        </button>
						<button type="button" class="btn btn-outline-success rounded-0">
                            <img src="{{asset('frontend/Default/img/bitcoin-payment-icon.png')}}" alt="">
                        </button>
					</div>
				</div>
				<div class="col-sm-8">
                    <span class="mb-2 text-light">Amount</span>
					<div class="btn-group w-100 mb-4">
						<button type="button" class="btn btn-outline-success m-1 rounded-0" onclick="fn_price(25)">25</button>
						<button type="button" class="btn btn-outline-success m-1 rounded-0" onclick="fn_price(75)">75</button>
						<button type="button" class="btn btn-outline-success m-1 rounded-0" onclick="fn_price(125)">125</button>
						<button type="button" class="btn btn-outline-success m-1 rounded-0" onclick="fn_price(250)">250</button>
						<button type="button" class="btn btn-outline-success m-1 rounded-0" onclick="fn_price(500)">500</button>
					</div>
					<div class="custom-control custom-checkbox mb-4">
						<input type="checkbox" class="custom-control-input" id="customCheck1">
						<label class="custom-control-label text-light p-1" for="customCheck1">I don't want to receive any bonus</label>
					</div>
                    <div class="form-group m-0">
                        <label class="mb-2 text-light" for="deposit_amount">Amount</label>
                        <div class="d-flex align-items-center mb-3 deposit-amount-wrap">
                            <input type="text" id="deposit_amount" name="deposit_amount" class="border-0 m-0 p-0" oninput="fn_amount_input()" />
                            <span id="deposit_currency"></span>
                        </div>
                    </div>
                    <div class="form-group m-0">
                        <label class="form-group text-light p-1 m-0" for="deposit_email">Email</label>
                        <input type="text" id="deposit_email" name="deposit_email" />
                    </div>
                    <div class="form-group">
                        <label class="form-group text-light p-1 m-0" for="deposit_phone">Phone</label>
                        <input type="text" id="deposit_phone" name="deposit_phone" />
                    </div>
					<input type="hidden" name="cur_deposit_currency" id="cur_deposit_currency"/>
					<button type="button" class="btn btn-success btn-block mb-2 rounded-0" onclick="fn_deposit_request()">Deposit</button>
				</div>
			</div>
		</form>
	</div>
</div>

<div id="withdraw-modal" class="withdraw-modal modal">
    <div class="withdraw-modal-content">
        <form id="withdraw-form" class="modal-form container" action="#">
            <h2 class="text-center mb-5 text-light">Cash Out</h2>
            <label for="amount" class="mb-2 text-light">Amount</label>
            <input type="text" name="amount" id="amount" />
            <label for="email" class="mb-2 text-light">Email</label>
            <input type="email" name="email" id="email" aria-describedby="emailHelp" />
            <label for="phone" class="mb-2 text-light">Phone</label>
            <input type="text" id="phone" name="phone" data-format="+1 (ddd) ddd-dddd">
            <button type="button" class="btn btn-success btn-block mb-2 rounded-0" onclick="fn_cashout()">Cash Out</button>
        </form>
    </div>
</div>

