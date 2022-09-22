<template>
  <v-app dark>

    <v-navigation-drawer
      absolute
      permanent
      fixed
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>User Logged In</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      floating
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>
      <!-- navigation -->
      <!--      <v-tabs>-->
      <!--        <v-tab :to="{name: 'home'}" nuxt>Home</v-tab>-->
      <!--        <v-tab :to="{name: 'second-page'}" nuxt>Second Page</v-tab>-->
      <!--      </v-tabs>-->

      <!-- button with dropdown -->

    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>


