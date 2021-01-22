@extends('frontend.Default.layouts.app')
@section('slider')
<section id="hero-section">
    <iframe style="overflow:hidden !important; height:370px; padding:0px !important; margin:0px !important; border: none !important;" width="100%" src="https://canada777.com/slider" allowfullscreen scrolling="no"></iframe>
</section>
@endsection
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
</section>
@endsection
