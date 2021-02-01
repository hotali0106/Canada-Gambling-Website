<ul>
    <li class="@php if($tab == 'balance') echo 'active'; @endphp">
        <a href="{{ route('frontend.profile.balance') }}" class="d-block px-5 py-3 text-decoration-none">Balance</a>
    </li>
    <li class="@php if($tab == 'history') echo 'active'; @endphp">
        <a href="{{ route('frontend.profile.history.payment') }}" class="d-block px-5 py-3 text-decoration-none">History</a>
    </li>
    <li>
        <a href="#" class="d-block px-5 py-3 text-decoration-none">Bonuses</a>
    </li>
    <li>
        <a href="#" class="d-block px-5 py-3 text-decoration-none">Affiliate</a>
    </li>
    <li class="@php if($tab == 'info') echo 'active'; @endphp">
        <a href="{{ route('frontend.profile.info') }}" class="d-block px-5 py-3 text-decoration-none">Profile Info</a>
    </li>
    <li>
        <a href="#" class="d-block px-5 py-3 text-decoration-none">Documents</a>
    </li>
</ul>