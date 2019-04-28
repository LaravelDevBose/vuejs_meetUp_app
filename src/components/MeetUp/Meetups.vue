<template>
    <v-container>
        <v-layout row warp>
            <v-flex sm8 offset-sm2>
                <v-card class="info" dark hover tag="div">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3 class="d-sm-block">
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                    aspect-ratio="1.7"

                                ></v-img>
                            </v-flex>
                            <v-flex xs7 sm8>
                                <v-card-title>
                                    <div >
                                        <h5 class="headline mb-0" >Kangaroo Valley Safari</h5>
                                        <div>17 july 2019</div>
                                        <v-card-actions >

                                            <v-btn
                                                class="teal accent-4"
                                                to="/meetup/1"
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
    export default {
        name: "Meetups"
    }
</script>

<style scoped>

</style>