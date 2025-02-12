import Vue from 'vue';
import Router from 'vue-router';


//TICKETS
import Ticket_Home from './views/Ticket-Home.vue';
import Ticket_Home_Request from './views/Ticket-Home-Request.vue';
import Ticket_Home_FollowUp from './views/Ticket-Home-FollowUp.vue';
import Ticket_Home_Feedback from './views/Ticket-Home-Feedback.vue';
import Ticket_Rating from './views/Rating.vue';



Vue.use(Router);

const routes = [

    {
        path: '/home',
        name: 'home',
        component: Ticket_Home
    },

    {
        path: '/request',
        name: 'request',
        component: Ticket_Home_Request
    },
    {
        path: '/followup',
        name: 'followup',
        component: Ticket_Home_FollowUp
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: Ticket_Home_Feedback
    },

    {
        path: '/rating/:id',
        name: 'rating',
        component: Ticket_Rating
    },


    {
        path: '/',
        name: '',
        component: Ticket_Home
    }
];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;
