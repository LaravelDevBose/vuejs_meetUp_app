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

                <v-list-tile
                    v-for="(item, index) in menuItems"
                    :key="index"
                    router
                    :to="item.url"
                >

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

            <v-toolbar-title class="white--text">
                <router-link to="/" tag="span" style="cursor: pointer">
                    Vue js MeetUp App
                </router-link>

            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                    flat
                    v-for="(item, index) in menuItems"
                    :key="index"
                    router
                    :to="item.url"
                >
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
                    {icon:'group', title:'View MeetUps', url:'/meetups'},
                    {icon:'room', title:'Organize MeetUp', url:'/create-meetUps'},
                    {icon:'person', title:'Profile', url:'/profile'},
                    {icon:'face', title:'Sign Up', url:'/sign-up'},
                    {icon:'lock_open', title:'Sign In', url:'/sign-in'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>