import Index from './pages/Index.vue'
import AboutUs from './pages/About.vue'
import UserOpinion from './pages/Opinions.vue'
import Courses from './pages/Courses.vue'
import Trainers from './pages/Trainers.vue'

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
    },
    {
        path: '/Courses',
        component: Courses
    },
    {
        path: '/Trainers',
        component: Trainers
    }
];