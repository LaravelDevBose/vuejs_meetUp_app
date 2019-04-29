import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        meetups: [
            {
                id:1,
                userId:2,
                title:'Meetup In Dhaka',
                image_path: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                date:'2019-04-30',
                description:''
            },
            {
                id:2,
                userId:2,
                title:'Meetup In Bosundora',
                image_path: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                date:'2019-04-30',
                description:''
            },
            {
                id:3,
                userId:1,
                title:'Meetup In Mirpur-12',
                image_path: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                date:'2019-04-30',
                description:''
            },
            {
                id:4,
                userId:3,
                title:'Meetup In Gazipur',
                image_path: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                date:'2019-04-30',
                description:''
            }
        ],
        user:{
            id:1,
            userMeetUps:[3],
        }
    },
    mutations:{

    },
    actions:{

    },
    getters:{
        allMeetUps:state =>{
            return state.meetups.sort((meetupA, meetupB)=>{
                return meetupA.date > meetupB.date
            })
        },
        featureMeetUps:(state, getters)=>{
          return getters.allMeetUps.slice(0,5);
        },
        getMeetUpById: (state, getters)=>(id)=> {
            return state.meetups.find(meetup => meetup.id == id)
        },
    }
})