<template>
    <div>
        <!-- Page Header Start -->
    <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>ورود</h2>
                </div>
                <div class="col-12">
                    <a href="index.html">خانه</a>
                    <a href="">ورود</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->


    <!-- sign in -->
    <div class="contact">
        <div class="container">
            <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>ورود / ثبت نام</p>
                <h2>ورود</h2>
            </div>
            <div class="row">
                <div class="col-12 wow fadeInUp text-center" data-wow-delay="0.1s">
                    <p class="c-form text-center">وارد ناحیه کاربری خود شوید</p>
                    <div class="contact-form">
                        <div id="success">
                            <form name="sentMessage" id="contactForm">
                                <div class="control-group">
                                    <input type="text" id="username" placeholder="نام کاربری" 
                                        data-validation-required-message="لطفا نام کاربری خود را وارد کنید" />
                                    <span class="input-group-addon">
                                        <i class="fa fa-user"></i>
                                    </span>
                                    <span></span>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="password" id="password" placeholder="رمز عبور"
                                        data-validation-required-message="لطفا رمز عبور خود را وارد کنید" />
                                    <span class="input-group-addon">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                    <span data-label=""></span>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="text-center">
                                    <button class="btn login-width" type="submit" id="sendinfoButton">ورود</button>
                                </div>
                            </form>
                            <br>
                            <div class="icon">
                                <p>رمز عبور خود را فراموش کردید؟</p>
                                <p>حساب کاربری ندارید؟ <a href="signup.html"><i class="fa fa-lock"></i>ساخت حساب</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- sign in -->

    </div>
</template>