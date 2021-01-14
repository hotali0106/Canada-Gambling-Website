<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="google" content="notranslate">
    	<meta charset="utf-8">

    	<title>@yield('page-title') - {{ settings('app_name') }}</title>

        <meta name="author" content="JamesJ & AppleWood">
    	<meta name="description" content="HTML template">
        <meta name="keywords" content="Canada777+online+casino">
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    	<meta name="viewport" content="width=device-width">
        <meta name="theme-color" content="#2d325a">

        <meta name="description" content="Canada777 online casino makes gambling simpler. Easy and fast payouts and account verification, promotions and VIP loyalty program.">

    	<link rel="icon" href="{{asset('frontend/Default/img/favicon.png')}}" >
        <link rel="stylesheet" href="{{asset('frontend/Default/css/slick.css')}}"> 
    	<link rel="stylesheet" href="{{asset('frontend/Default/css/grid.css')}}">
    	<link rel="stylesheet" href="{{asset('frontend/Default/css/styles.min.css')}}">
    	<script src="{{asset('frontend/Default/js/jquery-3.4.1.min.js')}}"></script>
        <link rel="stylesheet" href="{{asset('frontend/Page/page.css')}}">

        <!-- end first resources -->

        <link href="{{asset('frontend/Page/examples.css')}}" rel="stylesheet" type="text/css">
        <link rel="alternate" hreflang="ru" href="ru/index.html">

        <link rel="stylesheet" href="{{asset('frontend/Page/app4ebe.css')}}">
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&amp;display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('frontend/Page/app4ebe.css')}}">
        <script src="{{asset('frontend/Page/lib.js')}}"></script>
        <script src="{{asset('frontend/Page/app.js')}}"></script>
        <style>
            .content {display:none;}
            .preload { 
                        width:100px;
                        height: 100px;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                     } 
        </style>
        <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-185160427-1"></script> -->

        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-185160427-1');
        </script>

    </head>
    <body  class="content body page- device-desktop page- body--anon body--no-pnp lang-en page-home layout-default">
        <div class="preload"><img src="https://i.imgur.com/KUJoe.gif"></div>
        <div class="body__main">
            @include('component.frontend.layout.header')
            @include('component.frontend.layout.sidebar')
            @include('component.frontend.layout.content')
            @include('component.frontend.layout.footer')
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-dialog">
                    <div class="modal-content" modal-transclude="">
                        <div class="modal__body">
                            <div class="modal__header">
                                <div>Sign In</div>
                            </div>
                        <div class="modal__content">
                            <div class="modal__form">
                                <div class="form-content">
                                    <h1 class="">Log in to continue</h1>
                                <form class="text-left" action="http://canada777.com/login" method="POST" id="login-form" autocomplete="off">
                                    @csrf
                                    <div class="form">
                                        <div class="form-element">
                                            <div class="form-element__content">
                                                <div class="form-label">
                                                    <div class="form-label__name">
                                                        <label>Email</label>
                                                    </div>
                                                    <div class="form-label__control">
                                                        <input class="form-input" id="email" name="username" type="text" class="form-control" placeholder="Enter your email" >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-element">
                                            <div class="form-element__content">
                                                <div class="form-label">
                                                    <div class="form-label__name">
                                                        <label>Password</label>
                                                    </div>
                                                    <div class="form-label__control">
                                                        <input class="form-input" name="password" type="password" class="form-control" placeholder="Password"  placeholder="Enter your password">
                                                        <span class="form-label__btn-show">
                                                            <span class="font-icons font-icons--pass-show"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form__button">
                                            <button type="submit" class="btn btn-primary" value=""> Log In</button>
                                        </div>
                                    </div>
                                </form>
                            </div> 
                        </div>
                    </div>
                    <div class="modal__footer">
                        <div class="info-links">
                            <p><span>Don't have an account?</span> 
                            <a data-toggle="modal" data-target="#exampleModal2" data-dismiss="modal">Sign Up</a>
                        </div>
                    </div>
                    <button class="modal__close font-icons font-icons--close" title="Close" data-dismiss="modal"></button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width:500px !important;">
                <div class="modal-dialog">
                    <div class="modal-content" modal-transclude="">
                        <div class="modal-registr">
                            <div class="modal-registr__col modal-registr__col--form">
                                <div class="modal__body modal__body--registr">
                                    <div class="modal__header">
                                        <div>Sign Up</div>
                                    </div>
                                    <div class="modal__content">
                                        <form class="text-left" action="http://canada777.com/register" method="POST">
                                            @csrf
                                            <div class="form">
                                                <div id="username-field" class="field-wrapper input">
                                                    <input id="first_name" name="first_name" type="text" class="form-control" placeholder="Firstname">
                                                </div>
                                                <br/>
                                                <div id="username-field" class="field-wrapper input">
                                                    <input id="last_name" name="last_name" type="text" class="form-control" placeholder="Lastname">
                                                </div>
                                                <br/>
                                                <div id="phone-field" class="field-wrapper input">
                                                    <input id="phone" name="phone" type="text" class="form-control" placeholder="Phone">
                                                </div>
                                                <br/>
                                                <div id="email-field" class="field-wrapper input">
                                                    <input onkeyup="populateSecondTextBox();" id="emailx" name="email" class="form-control" type="text"  placeholder="Email">
                                                    <input id="usernamex" name="username" type="hidden" class="form-control" placeholder="Username">
                                                </div>
                                                <br/>
                                                <br/>
                                                <div id="password-field" class="field-wrapper input">
                                                    <input id="password" class="form-control" name="password" type="password" value="" placeholder="Password">
                                                </div>
                                                <div class="field-wrapper terms_condition">
                                                    <div class="n-chk new-checkbox checkbox-outline-primary">
                                                        <label class="new-control new-checkbox checkbox-outline-primary">
                                                          <input type="checkbox" class="new-control-input">
                                                          <span class="new-control-indicator"></span><span>I agree to the <a href="javascript:void(0);">  terms and conditions </a></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div class="d-sm-flex justify-content-between">
                                                    <div class="field-wrapper">
                                                        <button type="submit" class="btn btn-primary" value="">Register</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>    
                                    </div>
                                    <div class="modal__footer">
                                        <div class="info-links">
                                            <span>Already have an account?</span> 
                                            <a data-toggle="modal" data-target="#exampleModal" data-dismiss="modal">Login</a>
                                        </div>
                                    </div>
                                    <button class="modal__close font-icons font-icons--close" title="Close" data-dismiss="modal"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deposit_funds" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" style="width:80vw !important;">
               <div class="modal-dialog">
                   <div class="modal-content" modal-transclude="">
                       <div class="modal-registr">
                            <div class="modal-registr__col modal-registr__col--form">
                                <div class="modal__body modal__body--registr" style="position: relative;
                                    display: block;
                                    padding: 0;
                                    margin: 0;
                                    border-radius: 14px;
                                    border: 3px solid #363636;
                                    background-color: #232323;
                                    color: #000;
                                    font-size: 14px;
                                    line-height: 1.2;
                                    font-family: 'Open Sans', sans-serif;
                                    font-style: normal;
                                    text-align: left;
                                    text-transform: none;
                                    letter-spacing: normal;">
                                    
                                    <div class="modal__header" style="position: relative;
                                        border-radius: 14px 14px 0 0;
                                        background: #101010;
                                        padding: 10px;
                                        margin: 0;
                                        text-align: justify;">
                                    <div style="width:100%;">Deposit  <button style="float:right;" class="font-icons font-icons--close" title="Close" data-dismiss="modal"></button></div>
                                    <div class="modal__content">
                                        <div class="tab">
                                            <button class="tablinks" onclick="openCity(event, 'etranfer')" id="defaultOpen"><img src="{{asset('frontend/Default/ico/a.png')}}" style="width:100%;"/></button>
                                            <button class="tablinks" onclick="openCity(event, 'visa')"><img src="{{asset('frontend/Default/ico/b.png')}}" style="width:100%;"/></button>
                                        </div>
                                    </div>
                                    <div id="etranfer" class="tabcontent">
                                        <ul id="moneylist" style="width:100% !important;">
                                            <li><button id="25" type="button" class="btn btn-primary">25$</button></li>
                                            <li><button id="75" type="button" class="btn btn-primary">75$</button></li>
                                            <li><button id="125" type="button" class="btn btn-primary">125$</button></li>
                                            <li><button id="250" type="button" class="btn btn-primary">250$</button></li>
                                            <li><button id="500" type="button" class="btn btn-primary">500$</button></li>
                                        </ul>
                                        <br/>
                                        <center>
                                            <label for="deposit_amount">Amount	</label>
                                            <input id="deposit_amount" type="text" value="" placeholder="$"/>
                                        </center>
                                    </div>
                                    <div id="visa" class="tabcontent">
                                        <h3>Visa / mastercard</h3>
                                        <p>Coming soon</p> 
                                    </div>
                                    <div class="modal__footer">
                                        <div class="info-links">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script>
        $(function() {
            $(".preload").fadeOut(2000, function() {
                $(".content").fadeIn(1000);        
            });
        });
        function populateSecondTextBox() {
            document.getElementById('usernamex').value = document.getElementById('emailx').value;
        }
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }
        document.getElementById("defaultOpen").click();
        $('#25').click(function(){
            $('#deposit_amount').val('25');
        });

        $('#75').click(function(){
            $('#deposit_amount').val('75');
        });

        $('#125').click(function(){
            $('#deposit_amount').val('125');
        });

        $('#250').click(function(){
            $('#deposit_amount').val('250');
        });

        $('#500').click(function(){
            $('#deposit_amount').val('500');
        });
    </script>
    <script>
        $(document).on('keyup', '#search', function() {
    	    var search = $(this).val();
    		$.ajax({
    			url: "http://canada777.com/search",
    			type: "GET",
    			data: {
    			    pincode : pincode,
    			    search : search
    			},
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

    	function OnSearch(input) {
    		var query = input.value.toLowerCase();
    		doSearch(query);
    	}

    	function doSearch(query){
    		$(".games__item").each(function(event) {
    			var name = $(this).data('name').toLowerCase();
    			var title = $(this).data('title').toLowerCase();
    			var item = $(this).parents('.grid-item');
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
	<!-- SCRIPTS -->
	<script src="{{asset('frontend/Default/js/slick.min.js')}}"></script>
	<script src="{{asset('frontend/Default/js/masonry-docs.min.js')}}"></script>
	<script src="{{asset('frontend/Default/js/custom.js')}}"></script>
</html>