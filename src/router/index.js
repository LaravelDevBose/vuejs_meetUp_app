import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/Home'
import MeetUps from '../components/MeetUp/Meetups'
import CreateMeetUp from '../components/MeetUp/CreateMeetUp'
import Profile from "../components/User/Profile";
import SignUp from "../components/User/SignUp";
import SignIn from "../components/User/SignIn";

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/meetups',
        name:'MeetUps',
        component:MeetUps
    },{
        path:'/create-meetUps',
        name:'CreateMeetUps',
        component:CreateMeetUp
    },
    {
        path:'/profile',
        name:'Profile',
        component:Profile
    },
    {
        path:'/sign-up',
        name:'SignUp',
        component:SignUp
    },
    {
        path:'/sign-in',
        name:'SignIn',
        component:SignIn
    },

];

export default new VueRouter({
    routes, // short for `routes: routes`,
    mode: 'history',
})