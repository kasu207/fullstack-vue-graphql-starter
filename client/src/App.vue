<template>
  <v-app style="background:#E3E3EE">

    <!--Side Navbar -->
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-app-bar color="accent" dark flat>
        <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">Vueshare</h1>
        </router-link>
      </v-app-bar>

      <v-divider></v-divider>

      <!--Side Nav links-->
      <v-list>
        <v-list-item ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              {{item.title}}
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar --> 
    <v-app-bar fixed color="primary" dark>
      <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
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
      <v-btn text v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
        <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
        {{item.title}}
      </v-btn>
    </v-toolbar-items>
    </v-app-bar>

    <!--App content-->
    <main>
    <v-container class="mt-8">
      <transition name="fade">
        <router-view/>
      </transition>
    </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name:'App',
  data() {
    return{
      sideNav: false
    }
  },
  computed: {
    horizontalNavItems() {
      return [
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'},
        {icon: 'create', title: 'Sign Up', link: '/signup'}
      ]
    },
    sideNavItems() {
      return [
        {icon: 'chat', title: 'Posts', link: '/posts'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'},
        {icon: 'create', title: 'Sign Up', link: '/signup'}
      ]
    },
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active{
  transition-property: all;
  transition-duration: 0.25s;
}
.fade-enter-active{
  transition-delay: 0.25s;
}
.fade-enter,
.fade-leave-active{
  opacity: 0;
  transform: translateY(-25px);
}
</style>