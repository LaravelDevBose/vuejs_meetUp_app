<template>
    <v-container>
        <v-layout row warp>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn
                    large
                    to="/meetups"
                    color="primary">
                    Explore MeetUps
                </v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn
                    to="/create-meetUps"
                    large
                    color="primary">
                    OrganizeMeetUp
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-carousel
                prev-icon="arrow_back_ios"
                next-icon="arrow_forward_ios"
            >
                <v-carousel-item
                    v-for="meetup in featureMeetUps"
                    :key="meetup.id"
                    :src="meetup.image_path"
                    @click="onLoadMeetUp(meetup.id)"
                    style="cursor: pointer"
                >
                    <div class="carousel-title">{{ meetup.title}}</div>
                </v-carousel-item>
            </v-carousel>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "Home",
        data(){
            return{
            }
        },
        methods:{
            ...mapActions([

            ]),
            onLoadMeetUp (id){
                this.$router.push('/meetup/'+id)
            }
        },
        computed:{
            ...mapGetters([
                'featureMeetUps'
            ]),
        }
    }
</script>

<style scoped>
.carousel-title{
    position: absolute;
    bottom: 50px;
    left: 20px;
    background-color: #4698e2;
    color: white;
    padding: 15px 30px;
    font-size: 2rem;
    font-weight: 600;
    align-content: center;
}
</style>