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
        path: '/about-us',
        component: AboutUs
    },
    {
        path: '/user-opinion',
        component: UserOpinion
    },
    {
        path: '/courses',
        component: Courses
    },
    {
        path: '/trainers',
        component: Trainers
    }
];