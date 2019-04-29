<template>
    <v-container>
        <v-layout row warp v-for="meetup in allMeetUps" :key="meetup.id" class="mb-2">
            <v-flex sm8 offset-sm2 >
                <v-card class="info" dark hover tag="div" >
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3 class="d-sm-block">
                                <v-img
                                    :src="meetup.image_path"
                                    aspect-ratio="2"

                                ></v-img>
                            </v-flex>
                            <v-flex xs7 sm8>
                                <v-card-title>
                                    <div >
                                        <h5 class="headline mb-0" >{{ meetup.title }}</h5>
                                        <div>{{ meetup.date }}</div>
                                        <v-card-actions >

                                            <v-btn
                                                class="teal accent-4"
                                                :to="'/meetup/' + meetup.id"
                                            >
                                                <v-icon left>visibility</v-icon>
                                                View MeetUp
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </v-card-title>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Meetups",

        computed:{
            ...mapGetters([
                'allMeetUps'
            ])
        }
    }
</script>

<style scoped>

</style>