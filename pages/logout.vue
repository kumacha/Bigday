<template>
  <v-container>
    <v-row wrap justify="center" align="center">
      <v-col>
        <p class="text-center">ログアウトはコチラから。</p>
        <div class="pa-5">
          <v-btn
            block
            outlined
            color="#F6A05C"
            @click="signOut"
          >
            ログアウト
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.container{
  margin-top: 56px;
}
</style>
<script>
export default {
  methods: {
    signOut: function(err) {
      this.$store
        .dispatch('signOut')
        .then(() => {
          this.$router.push({
            name: 'login'
          })
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  }
}
</script>