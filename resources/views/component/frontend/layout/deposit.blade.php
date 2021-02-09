<div id="deposit-modal" class="deposit-modal modal">
	<div class="deposit-modal-content">
		<form id="deposit-form" class="modal-form container" action="{{route('frontend.deposit.payment')}}" method="GET" target="_blank">
			<h2 class="text-center mb-5 text-light">Deposit</h2>
			<div class="row">
				<div class="col-sm-4">
					<label for="currency" class="mb-2 text-light">Currency</label>
					<select class="mb-4" id="deposit_currency" name="deposit_currency" placeholder="Currency">
						@if(isset($currencys) && count($currencys))
                        @foreach($currencys as $currency)
                        <option value="{{$currency->id}}">{{$currency->currency}}</option>
                        @endforeach
                        @endif
					</select>
					<label class="mb-2 text-light">All Payment</label>
					<div class="btn-group-vertical w-100 payment-button-group">
						<button type="button" class="btn rounded-0">
                            <img src="{{asset('frontend/Default/img/interac-payment-icon.jpg')}}" alt="">
                        </button>
						<button type="button" class="btn rounded-0">
                            <img src="{{asset('frontend/Default/img/bitcoin-payment-icon.png')}}" alt="">
                        </button>
					</div>
				</div>
				<div class="col-sm-8">
                    <label class="mb-2 text-light">Amount</label>
					<div class="btn-group w-100 mb-4">
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(25)">25</button>
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(75)">75</button>
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(125)">125</button>
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(250)">250</button>
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(500)">500</button>
					</div>
					<div class="custom-control custom-checkbox mb-4">
						<input type="checkbox" class="custom-control-input" id="customCheck1">
						<label class="custom-control-label text-light p-1" for="customCheck1">I don't want to receive any bonus</label>
					</div>
					<input type="text" name="amount" readonly="true" />
					<input type="hidden" name="deposit_amount" id="deposit_amount"/>
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

