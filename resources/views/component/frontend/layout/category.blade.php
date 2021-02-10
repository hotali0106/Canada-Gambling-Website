<section id="category-section">
    <div class="top-category-list d-none d-md-block">
        @if( settings('use_all_categories') )
            <a href="{{ route('frontend.game.list.category', 'all') }}" class="@if($currentSliderNum != -1 && $currentSliderNum == 'all') active @endif">
                <img src="{{asset('frontend/Page/image/icon')}}/Game lobby.png" alt="">
                <span class="mt-1">@lang('app.all')</span>
            </a>
        @endif
        @if ($categories)
            @foreach($categories as $category)
                @if($category->position < 6 &&  $category->icon)
                    <a href="{{ route('frontend.game.list.category', $category->href) }}" class="@if($currentSliderNum != -1 && $category->href == $currentSliderNum) active @endif">
                        <img src="{{asset('frontend/Page/image/icon')}}/{{$category->icon}}" alt="">
                        <span class="mt-1">{{ $category->title }}</span>
                    </a>
                @endif
            @endforeach
        @endif
    </div>
    <div class="mobile-top-category d-block d-md-none">
        <div class="mobile-top-category-list">
            @if( settings('use_all_categories') )
                <a href="{{ route('frontend.game.list.category', 'all') }}" class="@if($currentSliderNum != -1 && $currentSliderNum == 'all') active @endif">@lang('app.all')</a>
            @endif
            @if ($categories)
                @foreach($categories as $category)
                    @if($category->position < 7)
                        <a href="{{ route('frontend.game.list.category', $category->href) }}" class="@if($currentSliderNum != -1 && $category->href == $currentSliderNum) active @endif">{{ $category->title }}</a>
                    @endif
                @endforeach
            @endif
        </div>
    </div>
    <form method="GET">
    <div class="search-box">
        <input type="text" name="search_game" placeholder="Find Your Game" value="{{$search_game}}" />
        <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='14'
        viewBox='0 0 14 14'
        >
        <path
        data-name='_ionicons_svg_ios-search (5)'
        d='M77.845,76.9l-3.9-3.932a5.553,5.553,0,1,0-.843.854l3.871,3.906a.6.6,0,0,0,.846.022A.6.6,0,0,0,77.845,76.9Zm-8.26-3.031a4.384,4.384,0,1,1,3.1-1.284A4.358,4.358,0,0,1,69.586,73.865Z'
        transform='translate(-64 -63.9)'
        fill='currentColor'
        />
    </svg>
    </div>
    </form>
    <div class="category-toggle-button dropdown">
        <button class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">game provider</button>
        <div class="dropdown-menu dropdown-large">
            <ul>
                @if($categories)
                    @foreach($categories as $category)
                        @if($category->position >5)
                        <li><a href="{{ route('frontend.game.list.category', $category->href) }}" class="@if($currentSliderNum != -1 && $category->href == $currentSliderNum) active @endif">{{ $category->title }}</a></li>
                        @endif
                    @endforeach
                @endif
            </ul>
        </div>
    </div>
</section>
