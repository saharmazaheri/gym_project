<template>
    <div>
         <!-- Page Header Start -->
    <div class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>ثبت نام</h2>
                </div>
                <div class="col-12">
                    <a href="index.html">خانه</a>
                    <a href="">ثبت نام</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- sign in -->
    <div class="contact">
        <div class="container">
            <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>ثبت نام</p>
                <h2 class="c-form text-center">ایجاد ناحیه کاربری</h2>
            </div>
            <div class="row">
                <div class="col-12 wow fadeInUp text-center" data-wow-delay="0.1s">
                    <div class="contact-form">
                        <div id="success" dir="rtl">
                            <form class="resume-form" name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <input class="resume-input" type="text" id="family"
                                        placeholder="نام و نام‌ خانوادگی"
                                        data-validation-required-message="لطفا نام‌ و نام خانوادگی خود را وارد کنید" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input class="resume-input" type="text" id="code" placeholder="کد ملی"
                                        data-validation-required-message="لطفا کد ملی خود را وارد کنید" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input class="resume-input" type="text" id="date" placeholder="تاریخ تولد"
                                        data-validation-required-message="لطفا تاریح تولد خود را وارد کنید" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input class="resume-input" type="text" id="Address" placeholder="آدرس محل زندگی"
                                        data-validation-required-message="لطفا آدرس محل زندگی خود را وارد کنید" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input class="resume-input" type="text" id="Phone-number" placeholder="شماره موبایل"
                                        data-validation-required-message="لطفا شماره موبایل  خود را وارد کنید" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input class="resume-input" type="email" id="email" placeholder="ایمیل"
                                        data-validation-required-message="لطفا  ایمیل  خود را وارد کنید" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input autocomplete="off" class="resume-input" data-val="true"
                                        data-val-length="طول نام کاربری بايد حداقل  6 کاراکتر باشد."
                                        data-val-length-max="100" data-val-length-min="6"
                                        data-val-regex="فقط حروف انگلیسی، اعداد و کاراکترهای - . _ @ مورد قبول است"
                                        data-val-regex-pattern="^[a-zA-Z0-9._@-]+$"
                                        data-val-required="وارد کردن آدرس ایمیل الزامیست." dir="ltr" id="UserName"
                                        name="UserName" placeholder="نام کاربری" type="text" value=""
                                        data-validation-required-message="لطفا  نام کاربری  خود را وارد کنید" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input autocomplete="off" class="resume-input" data-val="true"
                                        data-val-length="طول کلمه عبور بايد حداقل  6 کاراکتر باشد."
                                        data-val-length-max="100" data-val-length-min="6"
                                        data-val-required="وارد کردن کلمه عبور الزامیست." dir="ltr" id="Password"
                                        name="Password" placeholder="کلمه عبور" type="password"
                                        data-validation-required-message="لطفا  کلمه عبور  خود را وارد کنید" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input autocomplete="off" class="resume-input" data-val="true"
                                        data-val-equalto="کلمه عبور جديد و تکرار آن يکسان نمی‌باشند."
                                        data-val-equalto-other="*.Password" dir="ltr" id="ConfirmPassword"
                                        name="ConfirmPassword" placeholder="تکرار کلمه عبور" type="password"
                                        data-validation-required-message="لطفا  تکرار کلمه عبور  خود را وارد کنید" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="text-center">
                                    <br>
                                    <button class="btn signup-width" type="submit" id="sendinfoButton">ثبت نام
                                    </button>
                                </div>
                            </form>
                            <br>
                            <div class="icon">
                                <p>از قبل حساب کاربری دارید؟ <a href="login.html"><i class="fa fa-lock"></i>ورود</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>