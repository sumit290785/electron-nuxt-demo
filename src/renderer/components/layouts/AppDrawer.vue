<template>
  <v-navigation-drawer
    absolute
    permanent
    fixed
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" alt="">
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
</template>

