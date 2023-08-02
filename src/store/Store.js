import Vue from "vue"
import Vuex from 'vuex'

import Courses from "./Modules/Courses"
import Trainers from "./Modules/Trainers"
import CoffeeShop from "./Modules/CoffeeShop"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    modules:{
        Courses,
        Trainers,
        CoffeeShop
    }
});
