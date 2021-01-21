@extends('frontend.Default.layouts.app')
@section('content')
<section id="game-list">
    <!-- GAMES - BEGIN -->
    <div class="game-category-section">
        <div class="section-content">
        @if ($games && count($games))
            @foreach ($games as $key=>$game)
            @php $filter_key = ($game->categories)[0]->category_id @endphp
            <div class="game-item filter {{$filter_key}}" for-filter="{{$game->title}}">
                <img data-original="{{asset('frontend/Default/ico/')}}/{{$game->name.'.jpg'}}" />
                <div class="game-overlay">
                    <a href="#">Play For Real</a>
                    <a href="#">Play For Fun</a>
                </div>
            </div>
            @endforeach
        @endif
        </div>
    </div>
@endsection
@section('page_bottom')
<script type="text/javascript">
    
    var deposit_amount;
    var deposit_currency;
    
    $(document).ready(function(){
        $("#search_game").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".section-content .game-item").filter(function() {
                $(this).toggle($(this).attr("for-filter").toLowerCase().indexOf(value) > -1)
            });
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
</script>
@stop
