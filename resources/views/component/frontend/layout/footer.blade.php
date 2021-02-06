<footer>
    <div class="footer-service">
        <ul>
            <li>
                <a href="#">
                    <img data-original="{{asset('frontend/Default/img/footer-services/info-icons__img__1.png')}}" alt="">
                    <span>1000+ Games</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img data-original="{{asset('frontend/Default/img/footer-services/info-icons__img__2.png')}}" alt="">
                    <span>Fast Payments</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img data-original="{{asset('frontend/Default/img/footer-services/info-icons__img__3.png')}}" alt="">
                    <span>24/7 Support</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img data-original="{{asset('frontend/Default/img/footer-services/info-icons__img__4.png')}}" alt="">
                    <span>Only Licensed Games</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img data-original="{{asset('frontend/Default/img/footer-services/info-icons__img__5.png')}}" alt="">
                    <span>Multi-Currency</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img data-original="{{asset('frontend/Default/img/footer-services/info-icons__img__6.png')}}" alt="">
                    <span>100% Secure</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img data-original="{{asset('frontend/Default/img/footer-services/info-icons__img__7.png')}}" alt="">
                    <span>Awesome Promos</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img data-original="{{asset('frontend/Default/img/footer-services/info-icons__img__8.png')}}" alt="">
                    <span>Responsible Gambling Limits</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="footer-content">
        <div class="footer-banner">
            <img src="{{asset('frontend/Default/img/footer-banner.png')}}" alt="" />
            @if(!Auth::check())
                <a href="#signup-modal" class="footer-sign-up-button d-md-block d-none">Sign Up Now</a>
            @endif
        </div>
        <div class="footer-support">
            <div class="payment">
                <ul>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/etransfer.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/interac.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/skrill.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/visa.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/maestro.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/mastercard.png')}}" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="company">
                <ul>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/pragmatic.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/netent.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/playtech.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/isoftbet.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/wazdan.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/amatic.png')}}" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="support">
                <ul>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/18plus.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/gambling_therapy.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/gamblers_anonymous.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/gamanon.png')}}" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img data-original="{{asset('frontend/Default/img/footer-logos/gamcare.png')}}" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-menu">
        <div class="footer-menu-content d-none d-lg-flex">
            <div class="quick-menu footer-menu-section">
                <h5 class="footer-menu-header-text">Quick</h5>
                <ul>
                    <li><a href="#">All Games</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Promotions</a></li>
                    <li><a href="#">Games Rules</a></li>
                    <li><a href="#">Games Max Limits</a></li>
                    <li><a href="#">Affiliates</a></li>
                </ul>
            </div>
            <div class="quick-menu footer-menu-section">
                <h5 class="footer-menu-header-text">Info</h5>
                <ul>
                    <li><a href="#">Registration Procedure</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Bonus Terms</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Responsible Gaming</a></li>
                    <li><a href="#">Complaints</a></li>
                </ul>
            </div>
            <div class="quick-menu footer-menu-section">
                <h5 class="footer-menu-header-text">Games</h5>
                <ul>
                    <li><a href="#">Slots</a></li>
                    <li><a href="#">Live</a></li>
                    <li><a href="#">Card</a></li>
                    <li><a href="#">Roulette</a></li>
                    <li><a href="#">Jackpot</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Bonus Buy</a></li>
                </ul>
            </div>
            <div class="quick-menu footer-menu-section">
                <h5 class="footer-menu-header-text">Contact</h5>
                <ul>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Affiliates</a></li>
                </ul>
                <div class="footer-menu-support d-none d-xl-block">
                    <ul>
                        <li>
                            <a href="#">
                                <img data-original="{{asset('frontend/Default/img/footer-logos/18plus.png')}}" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img data-original="{{asset('frontend/Default/img/footer-logos/gambling_therapy.png')}}" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img data-original="{{asset('frontend/Default/img/footer-logos/gamblers_anonymous.png')}}" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img data-original="{{asset('frontend/Default/img/footer-logos/gamanon.png')}}" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img data-original="{{asset('frontend/Default/img/footer-logos/gamcare.png')}}" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-mobile-section d-block d-lg-none">
            <ul>
                <li><a href="#">All Games</a></li>
                <li><a href="#">Bonus Terms</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
    </div>
</footer>
