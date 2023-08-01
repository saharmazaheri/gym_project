import Vue from "vue"
import Vuex from 'vuex'

import Courses from "./Modules/Courses"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    modules:{
        Courses
    }
})
