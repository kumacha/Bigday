<template>
    <v-app dark>
      <login-header />
    <v-container>          
            <nuxt />
      </v-container>
      <my-footer v-if="!$store.state.loggedIn" />
  </v-app>
</template>
<style>
.v-application--wrap{
  min-height: 0%;
}
</style>

<script>
import loginHeader from '~/components/loginHeader.vue'
import myFooter from '~/components/loginFooter.vue'
export default {
  components: {
    loginHeader,
    myFooter
  }
};
</script>