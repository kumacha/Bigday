<template>
  <v-app>
    <my-header />
    <my-footer />
    <v-container>
            <nuxt />
    </v-container>
  </v-app>
</template>

<script>
import myHeader from '~/components/header.vue'

export default {
  components: {
    myHeader,
  }
}
</script>