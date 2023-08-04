import Index from './pages/Index.vue'
import AboutUs from './pages/About.vue'
import UserOpinion from './pages/Opinions.vue'
import Courses from './pages/Courses.vue'
import Trainers from './pages/Trainers.vue'
import CoffeeShop from './pages/CoffeeShop.vue'
import TrainerPage from './pages/TrainerPage.vue'

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
    },
    {
        path: '/coffee-shop',
        component: CoffeeShop
    },
    {
        path: '/trainers/trainer-page/:id',
        component: TrainerPage,
        name:'trainerpage'
    }
];