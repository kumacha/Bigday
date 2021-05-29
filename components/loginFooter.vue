<template>
  <div>
    <v-bottom-navigation :value="value" color="#F6A05C" fixed>
        <v-btn>
          <span>モー子</span>
          <v-icon>mdi-credit-card-check-outline</v-icon>
        </v-btn>
        <v-btn>
          <span>クーポン</span>
          <v-icon>mdi-ticket-confirmation-outline</v-icon>
        </v-btn>
        <v-btn>
          <span>レシピ</span>
          <v-icon>mdi-chef-hat</v-icon>
        </v-btn>
        <v-btn>
          <span>チラシ</span>
          <v-icon>mdi-file-document-multiple-outline</v-icon>
        </v-btn>
        <v-btn>
          <span>設定</span>
          <v-icon>mdi-account-cog-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
  </div>
</template>

<script>
export default {
}
</script>