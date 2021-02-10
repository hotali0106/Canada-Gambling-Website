
'use Strict';

jQuery(function($){

	var deposit_amount;
    var deposit_currency;

	if($("#loginresult").val()){
		$("#signin-modal").modal({
            fadeDuration: 300
        });
	}

    fn_cashout_modal=()=>{
        $("#withdraw-modal").modal({
            fadeDuration: 300
        })
    }

    fn_cashout=()=>{
    	$.ajax({
    		url:'/ajax/balance/cashout',
    		type:'POST',
    		headers: {
		        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		    },
		    data:{
		    	amount: 100,
		    	system: 'interac',
		    	type: 'out'
		    },
		    success:(data)=>{
		    	alert("Just a moment. Admin will check your withdraw.");
		    },
		    error:()=>{

		    },
		    complete:()=>{

		    }
    	});
    }

    fn_deposit=(auth)=>{
        if(!auth){
            $("#signin-modal").modal({
                fadeDuration: 300
            });
        }else{
            $("#deposit-modal").modal({
                fadeDuration: 300
            })
        }
    };
    fn_price=(value)=>{
        deposit_amount = value;
        deposit_currency = $("#deposit_currency option:selected").text();
        $("#deposit_amount").val(deposit_amount);
        $("#cur_deposit_currency").val(deposit_currency);
        $("input[name='deposit_amount']").val(value);
        $("span#deposit_currency").text($("#deposit_currency option:selected").text());
    };
    fn_amount_input=()=>{
        $("span#deposit_currency").text($("#deposit_currency option:selected").text());
    };
    fn_change_currency=()=>{
        $("span#deposit_currency").text($("#deposit_currency option:selected").text());
    };
    fn_deposit_request = () => {
		if($("#deposit_amount").val()){
			$("#deposit-form").submit();
		}
        // window.open("/deposit/payment", "_blank");
    };
	$("img").lazyload({
		effect : "fadeIn"
	});

	$("#menu-toggle").on("click", function(){
		if ( $("#menu_checkbox").prop("checked") )
        {
            console.log("true");
            $("#menu_checkbox").attr("checked", false);
            $("#menu_checkbox").prop("checked", false);
        }
		else
        {
            console.log("false");
            $("#menu_checkbox").attr("checked", true);
            $("#menu_checkbox").prop("checked", true);
        }

		$("header").toggleClass("active");
		$("main").toggleClass("active");
		$("body").toggleClass("position-fixed");
	});

	$("#menu_label").on("click", function(e){
		e.stopPropagation();
	});

	$("a[href='#signin-modal']").on("click", function(e){
		$("#signin-modal").modal({
			fadeDuration: 300
		});
	});

	/* Sign-up Modal functions*/
	$("a[href='#signup-modal']").on("click", function(e){
		$("#signup-modal").modal({
			fadeDuration: 300
		});
	});

	var form = $("#sign-up-form").show();

    form.validate({
        rules: {
            password: {
                minlength: 8
            },
        }
    });
	form.steps({
		headerTag: "h3",
		bodyTag: "fieldset",
		transitionEffect: "slideLeft",
		onStepChanging: function (event, currentIndex, newIndex)
		{
	        // Allways allow previous action even if the current form is not valid!
	        if (currentIndex > newIndex)
	        {
	        	return true;
	        }
	        // Forbid next action on "Warning" step if the user is to young
	        if (newIndex === 3 && Number($("#age-2").val()) < 18)
	        {
	        	return false;
	        }
	        // Needed in some cases if the user went back (clean up)
	        if (currentIndex < newIndex)
	        {
	            // To remove error styles
	            form.find(".body:eq(" + newIndex + ") label.error").remove();
	            form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
	        }
	        form.validate().settings.ignore = ":disabled,:hidden";
	        return form.valid();
	    },
	    onStepChanged: function (event, currentIndex, priorIndex)
	    {
	        // Used to skip the "Warning" step if the user is old enough.
	        if (currentIndex === 2 && Number($("#age-2").val()) >= 18)
	        {
	        	form.steps("next");
	        }
	        // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
	        if (currentIndex === 2 && priorIndex === 3)
	        {
	        	form.steps("previous");
	        }
	    },
	    onFinishing: function (event, currentIndex)
	    {
	    	form.validate().settings.ignore = ":disabled";
	    	return form.valid();
	    },
	    onFinished: function (event, currentIndex)
	    {
	    	form.submit();
	    }
	}).validate({
		errorPlacement: function errorPlacement(error, element) { element.before(error); },
		rules: {
			acceptAge: {
				required: true
			}
		}
	});


	/* datepicker */
	var date_input=$('input[name="birthday"]'); //our date input has the name "date"
	var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
	date_input.datepicker({
		format: 'mm/dd/yyyy',
		container: container,
		todayHighlight: true,
		autoclose: true,
        startDate: '1910-01-01',
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() - 18))
	});

    var phones = [{ "mask": "(###) ###-####" }];
    $('#phoneNumber').inputmask({
        mask: phones,
        greedy: false,
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} });

    $('.top-category-list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 967,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.mobile-top-category-list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
    });

    $(".dropdown-toggle").on("click", function (e) {
		$(".category-toggle-button").toggleClass("show");
		$(".dropdown-menu").toggleClass("show");
	});

	$(".dropdown-menu").on("click", function (e) {
		e.stopPropagation();
	});

});
