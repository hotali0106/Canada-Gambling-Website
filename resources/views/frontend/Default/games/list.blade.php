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
                <img src="{{asset('frontend/Default/ico/')}}/{{$game->name.'.jpg'}}" />
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
    $(document).ready(function(){
        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
                $('.filter').show('1000');
            }
            else
            {
                $(".filter").not('.'+value).hide('2000');
                $('.filter').filter('.'+value).show('2000');
            }

            $(".filter-button").removeClass("active");
            $(this).addClass("active");

        });

        $("#search_game").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".section-content .game-item").filter(function() {
                $(this).toggle($(this).attr("for-filter").toLowerCase().indexOf(value) > -1)
            });
        });
    });
</script>
@stop
