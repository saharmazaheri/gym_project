<template>
    <div>
        <!-- Page Header Start -->
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>کافی شاپ</h2>
                    </div>
                    <div class="col-12">
                        <a href="">خانه</a>
                        <a href="">کافی شاپ</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page Header End -->

        <!-- Service Start -->
        <div class="service" dir="rtl">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>منو کافه</p>
                    <h2>مشاهده منو کافه</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s" v-for="item in coffee">
                        <div class="service-item active">
                            <div class="service-icoon">
                                <img :src="item.imge" alt="Image">
                            </div>
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.comments }}</p>
                            <p>{{ item.price }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Service End -->
    </div>
</template>


<script>
export default {
    computed: {
        coffee() {
            return this.$store.getters.GetCoffee;
        }
    }
};
</script>
