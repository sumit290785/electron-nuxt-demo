<template>
  <v-navigation-drawer absolute permanent left app>
    <template #prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg">
        </v-list-item-avatar>
      </v-list-item>
    </template>
    <v-divider />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppDrawer extends Vue {

}
</script>

<style scoped>

</style>
