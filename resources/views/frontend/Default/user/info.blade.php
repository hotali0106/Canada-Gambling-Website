@extends('frontend.Default.layouts.user')
@section('profile')
<main class="profile">
    <div class="profile container pt-5">
        <div class="row">
            <div class="side-menu col-md-3 p-0">
                @include('frontend.Default.user.tab')
            </div>
            <div class="col-md-9 p-0">
                <div class="main-section px-4 py-4">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Profile Info</h3>
                        </div>
                    </div>
                    <hr class="divider"/>
                    <div class="profile-content py-5 px-3">
                        <div class="row">
                            <div class="col-md-6 mt-2 mt-md-0">
                                <h5>Personal</h5>
                            </div>
                            <div class="col-md-3 mt-2 mt-md-0">
                                <button type="button" class="btn btn-info btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#FFFFFF" width="16" height="16"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg> Edit Profile
                                </button>
                            </div>
                            <div class="col-md-3 mt-2 mt-md-0">
                                <button type="button" class="btn btn-info btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#FFFFFF" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg> Subscribe
                                </button>
                            </div>
                        </div>
                        <div class="row border-bottom mt-4">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Username</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $user->username }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Email</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $user->email }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Birthday</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $user->birthday }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Last Name</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $user->last_name }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Last Name</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $user->first_name }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Country</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $country }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>City</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $user->city }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Address</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $user->address }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Postal Code</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $user->postalCode }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Status</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ Auth::user()->status }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="profile-content py-5 px-3">
                        <div class="row">
                            <div class="col-md-6 mt-2 mt-md-0">
                                <h5>Verified Phone</h5>
                            </div>
                            <div class="col-md-3 mt-2 mt-md-0">
                                <button type="button" class="btn btn-info btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#FFFFFF" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg> Verify
                                </button>
                            </div>
                        </div>
                        <div class="row border-bottom mt-4">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Phone</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>{{ $user->phone }}</p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Verify status</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p>False</p>
                            </div>
                        </div>
                    </div>
                    <div class="profile-content py-5 px-3">
                        <div class="row">
                            <div class="col-md-6 mt-2 mt-md-0">
                                <h5>Change Password</h5>
                            </div>
                            <div class="col-md-3 mt-2 mt-md-0">
                                <button type="button" class="btn btn-info btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#FFFFFF" width="16" height="16"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg> Change Password
                                </button>
                            </div>
                        </div>
                        <div class="row border-bottom mt-4">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Old Password</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p></p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>New Password</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p></p>
                            </div>
                        </div>
                        <div class="row border-bottom mt-2">
                            <div class="col-md-8 mt-2 mt-md-0">
                                <p>Confirm</p>
                            </div>
                            <div class="col-md-4 mt-2 mt-md-0">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>		
</main>
@endsection