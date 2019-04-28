<template>
    <v-container>
        <v-layout row warp>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h5 class="headline primary--text">Single MeetUp</h5>
                    </v-card-title>
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                        aspect-ratio="1.4"
                        max-height="400"
                    ></v-img>
                    <v-card-text>
                        <div class="subheading info--text mb-1">
                            <v-icon class="deep-orange--text">access_alarm</v-icon>
                            17 july 2019 - Where it take place</div>
                        <div>
                            Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.
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
        name: "SingleMeetUp"
    }
</script>

<style scoped>

</style>