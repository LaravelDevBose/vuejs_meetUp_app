<template>
    <v-container>
        <v-layout row warp>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h5 class="headline primary--text">{{ meetup.title }}</h5>
                    </v-card-title>
                    <v-img
                        :src="meetup.image_path"
                        aspect-ratio="1.4"
                        max-height="400"
                    ></v-img>
                    <v-card-text>
                        <div class="subheading info--text mb-1">
                            <v-icon class="deep-orange--text">access_alarm</v-icon>
                            {{ meetup.date }} - Where it take place</div>
                        <div>
                            {{ meetup.description }}
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">
                            <v-icon left>add_circle_outline</v-icon>
                            Register
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props:['id'],
        name: "SingleMeetUp",
        computed:{
            meetup () {
                return this.$store.getters.getMeetUpById(this.id)
            }
        }
    }
</script>

<style scoped>

</style>