@extends('frontend.Default.layouts.app')
@section('page-title', $title)

@section('content')

	<!-- MAIN -->
	<main class="main">
		<div class="container">
			<!-- MENU BEGIN -->
			<div class="menu">
				<div class="menu__wrap">
				@if( settings('use_all_categories') )
					<a href="{{ route('frontend.game.list.category', 'all') }}" class="menu__link @if($currentSliderNum != -1 && $currentSliderNum == 'all') active @endif">@lang('app.all')</a>
				@endif
				@if ($categories && count($categories))
					@foreach($categories AS $index=>$category)
					<a href="{{ route('frontend.game.list.category', $category->href) }}" class="menu__link @if($currentSliderNum != -1 && $category->href == $currentSliderNum) active @endif"">{{ $category->title }}</a>
					@endforeach
				@endif
				</div>
				<div class="navBurger" role="navigation" id="navToggle"></div> 
				<!-- MENU END -->
			</div>
						@php
							$return = \VanguardLTE\Returns::where('shop_id', Auth::user()->shop_id)->first();
                            $pincodes = \VanguardLTE\Pincode::where(['shop_id' => Auth::user()->shop_id, 'status' => 1, 'activated_at' => null])->count();
							$happyhour = \VanguardLTE\HappyHour::where(['shop_id' => auth()->user()->shop_id, 'time' => date('G'), 'status' => 1])->first();
							if(!$happyhour){
								$happyhour = \VanguardLTE\HappyHour::where(['shop_id' => auth()->user()->shop_id, 'status' => 1])->where('time', '>',date('G'))->first();
							}
							if(!$happyhour){
								$happyhour = \VanguardLTE\HappyHour::where(['shop_id' => auth()->user()->shop_id, 'status' => 1])->first();
							}
						@endphp
			<!-- SLIDER - BEGIN -->
			<div class="slider">
					<div class="grid">
						<div class="grid-item grid-item--width3 grid-item--height4">
							<div class="grid__content">
								<!-- JACKPOT - BEGIN -->
								<div class="jackpot">
									<h2 class="jackpot__title">JACKPOT PROGRESSIVE</h2>
									<div class="jackpot__block">
										<div class="jackpot__item jackpot__item-major">
											<span class="jackpot__level">
												GRAND
											</span>
											<span class="jackpot__value jackpot0">
								            @if( count($jpgs) > 0 )
									            {{ $jpgs[0]->balance }}
								            @endif											
											</span>
										</div>
										<div class="jackpot__item jackpot__item-maxi">
											<span class="jackpot__level">
												MAXI
											</span>
											<span class="jackpot__value jackpot1">
								            @if( count($jpgs) > 1 )
									            {{ $jpgs[1]->balance }}
								            @endif											
											</span>
										</div>
										<div class="jackpot__item jackpot__item-minor">
											<span class="jackpot__level">
												MAJOR
											</span>
											<span class="jackpot__value jackpot2">
								            @if( count($jpgs) > 2 )
									            {{ $jpgs[2]->balance }}
								            @endif											
											</span>
										</div>
										<div class="jackpot__item jackpot__item-mini">
											<span class="jackpot__level">
												MINOR
											</span>
											<span class="jackpot__value jackpot3">
								            @if( count($jpgs) > 3 )
									            {{ $jpgs[3]->balance }}
								            @endif											
											</span>
										</div>
										<div class="jackpot__item jackpot__item-full">
											<span class="jackpot__level">
												MINI
											</span>
											<span class="jackpot__value jackpot4">
								            @if( count($jpgs) > 4 )
									            {{ $jpgs[4]->balance }}
								            @endif											
											</span>
										</div>
										<div class="jackpot__item jackpot__item-mega">
											<span class="jackpot__level">
												LITE
											</span>
											<span class="jackpot__value jackpot5">
								            @if( count($jpgs) > 5 )
									            {{ $jpgs[5]->balance }}
								            @endif											
											</span>
										</div>
									</div>
								</div>
								<!-- JACKPOT - BEGIN -->
							</div>
						</div>
						<!-- GAMES - BEGIN -->
				@if ($games && count($games))
					@foreach ($games as $key=>$game)
						<div class="grid-item grid-item--height2 grid-item--width2">
							<div class="grid__content games">
								<div class="games__item">
									<div class="games__content">
										<img src="{{ $game->name ? '/frontend/Default/ico/' . $game->name . '.jpg' : '' }}" alt="{{ $game->title }}">										
										<a href="{{ route('frontend.game.go', $game->name) }}" class="play-btn btn">Play</a>
										<span class="game-name">{{ $game->title }}</span>
									</div>
								</div>
							</div>
						</div>					
					@endforeach
				@endif
						<!-- GAMES - BEGIN -->
					</div>
			</div>
			<!-- SLIDER - END -->
		</div>
	</main>
	<footer class="footer">
		<div class="container">
			<div class="footer__block">
				<div class="footer__left">
					@if ( $return && auth()->user()->present()->count_return > 0 && auth()->user()->present()->balance <= $return->min_balance )
					<a href="#" data-name="modal-bonus" class="gift" id="returns">
						<img src="/frontend/Default/img/_src/gift-active.png" alt="" class="gift-icon active">
					</a>
					@endif
					<!--
					<a href="#" class="wheel">
						<img src="/frontend/Default/img/_src/wheel-active.png" alt="" class="gift-icon active">
						<img src="/frontend/Default/img/_src/wheel.png" alt="" class="gift-icon disabled">
					</a>
					-->
				</div>
				<div class="footer__center">
					<div class="footer__info">
						<span class="account-id"><em>ID</em> {{ Auth::user()->username }}</span>
						<a href="#modal-pin" class="footer__btn modal-btn btn" data-name="modal-pin">Cashier</a>
						<span class="account-money" id="balanceValue">{{ number_format(Auth::user()->balance, 2,".","") }} <em>@if( auth()->user()->present()->shop ){{ auth()->user()->present()->shop->currency }}@endif</em></span>
					</div>
					<ul class="balance__info">
						<li>
							<p>Bonus</p>
							<span class="amount">{{ number_format(Auth::user()->bonus, 2,".","") }} @if( auth()->user()->present()->shop ){{ auth()->user()->present()->shop->currency }}@endif</span>
						</li>
						<li>
							<p>Wager</p>
							<span class="amount">{{ number_format(Auth::user()->wager, 2,".","") }} @if( auth()->user()->present()->shop ){{ auth()->user()->present()->shop->currency }}@endif</span>
						</li>
						<li>
							<p>CashBack</p>
							<span class="amount count_return">{{ number_format(Auth::user()->count_return, 2,".","") }} @if( auth()->user()->present()->shop ){{ auth()->user()->present()->shop->currency }}@endif</span>
						</li>
					</ul>
				</div>
				<div class="footer__right">
					<a href="/logout" class="footer__icon"><img src="/frontend/Default/img/_src/close.svg" alt=""></a>
				</div>
			</div>
		</div>
	</footer>
	<div class="overlay"></div>
	<div class="modal modal-bonus" >
		<div class="modal__block">
			<h3 class="modal__title">Cash Back Bonus</h3>
			<p class="modal__text cashBankText"></p>
			<button class="btn modal-close">OK</button>
		</div>
		<span class="close-btn">
			<img src="/frontend/Default/img/_src/close.svg" alt="">
		</span>
	</div>
	<div class="modal modal-pin">
		<div class="modal__block">
			<h3 class="modal__title">PIN - code</h3>
			<p class="modal__text">Enter PIN - code to replenish your account<span id="error" style="color: red;"></span></p>
			<div class="input__group">
				<input type="text" id="inputPin">
			</div>
			<button type="submit" class="btn" id="send">OK</button>
		</div>
			<span class="close-btn">
				<img src="/frontend/Default/img/_src/close.svg" alt="">
			</span>
	</div>
	<!-- /.MAIN -->

	<script type="text/javascript">


		$('body').on('click', '#send', function(event){
			var pincode = $('#inputPin').val();
			$.ajax({
				url: "{{ route('frontend.profile.pincode') }}",
				type: "GET",
				data: {pincode : pincode},
				dataType: "json",
				success: function(data){
					if( data.fail ){
						$('#error').html('<br>' + data.error);
					}
					if( data.success ){
						window.location.reload();
					}
				}
			});
		});


		$(document).on('click', '#returns', function(e) {
			e.preventDefault();
			$.get('{{ route('frontend.profile.returns')  }}', function(data) {
				if (data.success) {
					$('.cashBankText').html('@lang('app.your_cash_back_bonus') <b>' + data.value + ' '+ data.currency +'</b> @lang('app.has_been_added_to_the_balance'). <br />@lang('app.have_a_good_game_in') <b>{{ config('app.name') }}</b>.');
					$("div.modal-bonus").addClass("active");
					$(".overlay").fadeIn();
					$('.balanceValue').text(data.balance + ' ' + data.currency);
					$('.count_return').text(data.count_return + ' ' + data.currency);
					$('#balanceValue').html(data.balance + '&ensp;<em>'+ data.currency +'</em>');

					$('#returns').remove();
				}
				if (data.fail) {
					$.modal(data.text);
				}
			}, 'json');
		});

		setInterval(function(){
			$.get('{{ route('frontend.profile.jackpots')  }}', function(data) {
				if( data.length >= 7 ){
					for(var i=0; i<7; i++){
						$('.jackpot' + i).text((data[i]['balance']));
					}
				}
			});
		}, 5000);

		$(document).on('keyup', '#search', function() {
			var query = $(this).val().toLowerCase();
			doSearch(query);
		});

		function OnSearch(input) {
			var query = input.value.toLowerCase();
			doSearch(query);
		}

		function doSearch(query){
			$(".games__item").each(function(event) {
				var name = $(this).data('name').toLowerCase();
				var title = $(this).data('title').toLowerCase();
				var item = $( this ).parents('.grid-item');
				if(query){
					if (name.search(query) != -1 || title.search(query) != -1){
						item.css('display', 'inherit')
					} else{
						item.css('display', 'none')
					}
				} else{
					item.css('display', 'inherit')
				}
			});
		}


	</script>

@stop