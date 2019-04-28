<template>
    <div>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
        >
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile v-for="(item, index) in menuItems" :key="index">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon}}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon
                    @click.stop="drawer = !drawer"
                    class="hidden-sm-and-up"
            ></v-toolbar-side-icon>

            <v-toolbar-title class="white--text">Vue js MeetUp App</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat v-for="(item, index) in menuItems" :key="index">
                    <v-icon left>{{ item.icon}}</v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>

</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return{
                drawer: false,
                menuItems:[
                    {icon:'group', title:'View MeetUps'},
                    {icon:'room', title:'Organize MeetUp'},
                    {icon:'person', title:'Profile'},
                    {icon:'face', title:'Sign Up'},
                    {icon:'lock_open', title:'Sign In'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>