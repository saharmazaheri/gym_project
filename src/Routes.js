import Index from './pages/Index/Index.vue'
import AboutUs from './pages/AboutUs/About.vue'
import UserOpinion from './pages/UserOpinion/Opinions.vue'

export const Routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/AboutUs',
        component: AboutUs
    },
    {
        path: '/UserOpinion',
        component: UserOpinion
    }
];