<div id="deposit-modal" class="deposit-modal modal">
	<div class="deposit-modal-content">
		<form id="deposit-form" class="modal-form container" action="#">
			<h2 class="text-center mb-2">Deposit</h2>
			<div class="row">
				<div class="col-sm-4">
					<label for="currency" class="mb-2">Currency</label>
					<select class="mb-2" id="deposit_currency" name="deposit_currency" placeholder="Currency">
						@if(isset($currencys) && count($currencys))
                        @foreach($currencys as $currency)
                        <option value="{{$currency->id}}">{{$currency->currency}}</option>
                        @endforeach
                        @endif
					</select>
					<label class="mb-2">All Payment</label>
					<div class="btn-group-vertical w-100">
						<button type="button" class="btn btn-primary btn-block mb-2 rounded-0">Gigadat</button>
						<button type="button" class="btn btn-primary btn-block mb-2 rounded-0">Bitcoin</button>
						<button type="button" class="btn btn-primary btn-block mb-2 rounded-0">PayPal</button>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="btn-group w-100">
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(25)">25</button>
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(75)">75</button>
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(125)">125</button>
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(250)">250</button>
						<button type="button" class="btn btn-primary mb-2 rounded-0" onclick="fn_price(500)">500</button>
					</div>
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="customCheck1">
						<label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
					</div>
					<input type="text" name="amount" style="font-size: 20px;" readonly="true" />
					<button type="button" class="btn btn-warning btn-block mb-2 rounded-0" onclick="fn_deposit_request()">Deposit</button>		
				</div>
			</div>
		</form>
	</div>
</div>