<template>
  <v-app>
    <!-- Horizontal Navbar --> 
    <v-app-bar fixed color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
        Vueshare
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field flex prepend-icon="search" placeholder="Search posts" single-line hide-details></v-text-field>
    <v-spacer></v-spacer>
    <!--Horizontal Navbar Links-->
    <v-toolbar-items class="hidden-xs-only">
      <v-btn text v-for="item in horizontalNavItems" :key="item.title" to="item.link">
        <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
        {{item.title}}
      </v-btn>
    </v-toolbar-items>
    </v-app-bar>
    <!--App content-->
    <main>
    <v-container class="mt-4">
    <router-view/>
    </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name:'App',
  computed: {
    horizontalNavItems() {
      return [
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'},
        {icon: 'create', title: 'Sign Up', link: '/signup'}
      ]
    }
  }
}
</script>
