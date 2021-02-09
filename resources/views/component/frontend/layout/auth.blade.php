<div id="signin-modal" class="signin-modal modal">
    <div class="sign-in-modal-content">
        <form id="sign-in-form" class="modal-form" action="{{url('login')}}" method="POST">
            @csrf
            <h2 class="text-center mb-2">Log In</h2>
            <fieldset>
                @if(isset($login_result))
                <div class="alert alert-danger alert-dismissible fade show">
                <input type="hidden" id="loginresult" value="{{$login_result}}">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Wrong!</strong> Your credentials is wrong.
                </div>
                @endif
                <label for="email" class="mb-2">Enter Your Email *</label>
                <input type="text" name="username" placeholder="Email" class="required" />
                <label for="password" class="mb-2">Enter Your Password *</label>
                <input type="password" name="password" placeholder="Password" class="required" />
                <a href="#" class="d-block text-center mb-2">Forgot your password?</a>
                <button type="submit" class="btn btn-success btn-lg btn-block mb-2">Login</button>
                <p><a href="#signup-modal" class="btn btn-outline-warning btn-lg btn-block">Sign Up</a></p>
            </fieldset>
        </form>
    </div>
</div>

<div id="signup-modal" class="signup-modal modal">
    <div class="sign-up-modal-content">
        <div class="modal-left-side modal-side">
            <div class="sign-up-header">
                <h2>Sign Up</h2>
                <p>Already have an account? <a href="#signin-modal">Sign In</a></p>
            </div>
            <div class="sign-up-banner">
                <img src="{{asset('frontend/Page/image/sign-up-banner.jpg')}}" />
            </div>
        </div>
        <div class="modal-right-side modal-side">
            <form id="sign-up-form" class="modal-form" action="{{url('register')}}" method="POST">
                @csrf
                <h3 class="fs-subtitle">Login Detail</h3>
                <fieldset>
                    <label for="username">Username *</label>
                    <input type="text" id="username" name="username" placeholder="Username" class="required" />
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" placeholder="Email" class="required" />
                    <label for="password">Password *</label>
                    <input type="password" id="password" name="password" placeholder="Password" class="required" />
                    <label for="currency">Currency</label>
                    <select id="currency" name="currency" placeholder="Currency">
                        @if(isset($currencys) && count($currencys))
                        @foreach($currencys as $currency)
                        <option value="{{$currency->id}}">{{$currency->currency}}</option>
                        @endforeach
                        @endif
                    </select>
                </fieldset>

                <h3 class="fs-subtitle">Personal Info</h3>
                <fieldset>
                    <label for="firstName">First Name *</label>
                    <input type="text" id="firstName" name="first_name" placeholder="First Name" class="required" />
                    <label for="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="last_name" placeholder="Last Name" class="required" />
                    <label for="birthday">Date of Birth *</label>
                    <input type="text" id="birthday" name="birthday" placeholder="Date of Birth" class="required" />
                    <label for="phoneNumber">Mobile Phone *</label>
                    <input type="text" id="phoneNumber" name="phone" placeholder="Mobile Phone" class="required" />
                </fieldset>

                <h3 class="fs-subtitle">Confirm Your Detail</h3>
                <fieldset>
                    <label for="country">Country *</label>
                    <select id="country" name="country" class="selectpicker" data-live-search="true">
                        @if(isset($countrys) && count($countrys))
                        @foreach($countrys as $country)
                        <option value="{{$country->id}}">{{$country->country}}</option>
                        @endforeach
                        @endif
                    </select>

                    <label for="city">City *</label>
                    <input type="text" id="city" name="city" placeholder="City" class="required" />
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label for="address">Address *</label>
                            <input type="text" id="address" name="address" placeholder="Address" class="required" />
                        </div>
                        <div class="col-sm-6">
                            <label for="postalCode">Postal Code *</label>
                            <input type="text" id="postalCode" name="postalCode" placeholder="Postal Code" class="required" />
                        </div>
                    </div>
                    <label class="checkbox-container">Receive Email Promos
                        <input type="checkbox" id="receiveEmail" name="receiveEmail" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container">Receive SMS Promos
                        <input type="checkbox" id="receiveSMS" name="receiveSMS" />
                        <span class="checkmark"></span>
                    </label>
                </fieldset>

                <h3 class="fs-subtitle">Welcome Package</h3>
                <fieldset>
                    <legend>Terms and Conditions</legend>
                    <!-- <legend>Terms and Conditions</legend>

                    <input id="acceptTerms-2" name="acceptTerms" type="checkbox" class="required"> <label for="acceptTerms-2">I agree with the Terms and Conditions.</label> -->

                    <label class="checkbox-container" for="acceptTerms-2">I agree with the Terms and Conditions.
                        <input type="checkbox" id="acceptTerms-2" name="acceptTerms"class="required" />
                        <span class="checkmark"></span>
                    </label>
                    <br>
                    <br>
                    <label class="checkbox-container">I am 18 years old and I accept the Terms and Conditions and Privacy Policy
                        <input type="checkbox" id="acceptAge" name="acceptAge" />
                        <span class="checkmark"></span>
                    </label>
                </fieldset>
            </form>
        </div>
    </div>
</div>
