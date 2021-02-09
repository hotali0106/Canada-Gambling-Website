<!DOCTYPE html>
<html>
<head>
    <title>{{ settings('app_name') }}</title>
    @include('component.frontend.layout.style')
</head>
<body>
    @include('component.frontend.layout.header')
    <main>
        <section id="hero-section border-bottom" style="border-bottom-color: white; border-bottom-width: 6px; border-bottom-style: solid;">
            <img class="hero-image" src="{{asset('frontend/Page/image/bonus-banner.jpg')}}" />
        </section>
        <section id="bonus-section">
            <div class="position-relative bonus-content py-5 px-5 d-flex justify-content-center">
                <img class="section-image" src="{{asset('frontend/Page/image/mobile-hero-image.jpg')}}" />
            </div>
            <p class="text-center text-light py-2 px-2 border-top border-default mb-0">*1st Deposit - Match Bonus up to C$ 400 • 2nd / 3rd Deposit - Match Bonus up to C$ 300 • New customers only • Min deposit C$ 10 • 70x wagering</p>
        </section>
    </main>
    @include('component.frontend.layout.auth')
    @include('component.frontend.layout.deposit')
    @include('component.frontend.layout.script')
</body>
</html>
