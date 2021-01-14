<header class="header">
    <div class="header__bar">
        <div class="bar">
            <button class="bar__button" id="bar" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">
                <span class="font-icons font-icons--bar"></span>
                <span class="font-icons font-icons--close"></span>
            </button>
            <div class="bar__container" aria-labelledby="#bar">
                <div class="bar__menu">
                    <ul class="top-menu--bar top-menu" type="top-menu" template="top-menu">
                        <li class="top-menu__item">
                            <a data-toggle="modal" data-target="#deposit_funds" data-dismiss="modal" class="top-menu__link top-menu__link--current">
                                <span class="top-menu__block-icon">
                                    <img class="top-menu__icon">
                                    <img class="top-menu__icon top-menu__icon--hover">
                                </span>
                                <span class="top-menu__title " >Deposit</span>
                            </a>
                        </li>
                        <li class="top-menu__item">
                           <a class="top-menu__link top-menu__link--current" href="https://canada777.com">
                                <span class="top-menu__block-icon">
                                    <img class="top-menu__icon">
                                    <img class="top-menu__icon top-menu__icon--hover">
                                </span>
                                <span class="top-menu__title " >GAME LOBBY</span>
                            </a>
                        </li>
                        <li class="top-menu__item">
                            <a  class="top-menu__link"  href="#">
                                <span class="top-menu__block-icon">
                                    <img class="top-menu__icon">
                                    <img class="top-menu__icon top-menu__icon--hover">
                                </span>
                                <span class="top-menu__title " >&nbsp; Slots</span>
                            </a>
                        </li>
                        <li class="top-menu__item">
                            <a class="top-menu__link" href="">
                                <span class="top-menu__block-icon">
                                    <img class="top-menu__icon"  >
                                    <img class="top-menu__icon top-menu__icon--hover">
                                </span>
                                <span class="top-menu__title " >jackpots</span>
                            </a>
                        </li>
                        <li class="top-menu__item">
                            <a class="top-menu__link" href="#">
                                <span class="top-menu__block-icon">
                                    <img class="top-menu__icon">
                                    <img class="top-menu__icon top-menu__icon--hover">
                                </span>
                                <span class="top-menu__title " >promotions</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="header__search">
        <div class="search" template="games_autocomplete" limit="10">
            <div class="search__input-block">
                <form name="searchForm" method="get" action="http://canada777.com/categories/all">
        			 <input id="search" name="search" type="text" value="" class="search__input" autocomplete="off" placeholder="Find your game">
        		</form>
                <span class="search__icon font-icons font-icons--search"></span>
                <span class="search__close font-icons font-icons--close" type="button"></span>
            </div>
        </div>
    </div>
    <div class="header__logo" class="logo" href="#">
        <img class="logo__text" style="width:98%" src="{{asset('frontend/Default/ico/logo.png')}}">
    </div>
    <div class="header__auth">
        <div class="auth">
            <div class="auth__inner auth__inner--anon">
                <div class="auth__buttons-anon">
                    <div class="auth__buttons-default">
                        <a class="button button--nowrap button--uppercase"  data-toggle="modal" data-target="#exampleModal2">Sign Up</a>
                        <a class="button button--border button--nowrap" data-toggle="modal" data-target="#exampleModal">Login</a>
         
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="display:none;" class="header__lang">
        <div class="locales">
            <div class="locales__button" id="17-locales" type="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">
                <img class="locales__icon" alt="en" src="https://cdn2.softswiss.net/flags/square/en.svg">
                <span class="locales__caret">
                    <span class="font-icons font-icons--caret"></span>
                </span>
            </div>
            <div class="locales__container" aria-labelledby="#52-locales">
                <ul role="menu" class="locales__menu">
                    <li class="locales__item locales__item--active">
                        <a class="locales__link">
                            English
                           
                        </a>
                    </li>
                    <li class="locales__item">
                        <a class="locales__link">
                            Русский
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>