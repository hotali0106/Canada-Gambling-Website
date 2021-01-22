
'use Strict'

jQuery(function($){

	var deposit_amount;
    var deposit_currency;
    
    $("#search_game").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".section-content .game-item").filter(function() {
                $(this).toggle($(this).attr("for-filter").toLowerCase().indexOf(value) > -1)
            });
        });
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
    }
    fn_price=(value)=>{
        deposit_amount = value;
        deposit_currency = $("#deposit_currency option:selected").text();
        $("input[name='amount']").val(value+" "+$("#deposit_currency option:selected").text());
    }
    fn_deposit_request=()=>{  
        window.open("/deposit/payment", "_blank", "toolbar,scrollbars,resizable,top=500,left=500,width=400,height=400"); 
        /*
        $.ajax({
            url:'/deposit/payment',
            type:'GET',
            data:{
                amount:deposit_amount,
                currency:deposit_currency
            },
            dataType:"JSON",
            success:()=>{
            },
            error:()=>{
            }
        });*/
    }
	$("img").lazyload({
		effect : "fadeIn"
	});

	$("#menu-toggle").on("click", function(){
		if ( $("#menu_checkbox").prop("checked") )
			$("#menu_checkbox").prop("checked", false)
		else
			$("#menu_checkbox").prop("checked", true)

		$("header").toggleClass("active");
		$("main").toggleClass("active");
		$("body").toggleClass("position-fixed");
	})

	$("#menu_label").on("click", function(e){
		e.stopPropagation();
	})

	$("a[href='#signin-modal']").on("click", function(e){
		$("#signin-modal").modal({
			fadeDuration: 300
		})
	})

	/* Sign-up Modal functions*/
	$("a[href='#signup-modal']").on("click", function(e){
		$("#signup-modal").modal({
			fadeDuration: 300
		})
	})

	var form = $("#sign-up-form").show();

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
	})

	$(".dropdown-toggle").on("click", function (e) {
		$(".category-toggle-button").toggleClass("show");
		$(".dropdown-menu").toggleClass("show");
	})

	$(".dropdown-menu").on("click", function (e) {
		e.stopPropagation()
	})

});