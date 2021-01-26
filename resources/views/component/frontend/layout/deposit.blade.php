<div id="deposit-modal" class="deposit-modal modal">
	<div class="deposit-modal-content">
		<form id="deposit-form" class="modal-form container" action="#">
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
					<button type="button" class="btn btn-success btn-block mb-2 rounded-0" onclick="fn_deposit_request()">Deposit</button>
				</div>
			</div>
		</form>
	</div>
</div>
