<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon >
             {{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
            <v-divider  />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    </v-app>
</template>

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
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-account-cog-outline",
          title: "プロフィール",
          to: "/setting"
        },
        {
          icon: "mdi-ticket-confirmation-outline",
          title: "クーポン",
          to: "/coupon"
        },
        {
          icon: "mdi-message-alert-outline",
          title: "お問い合わせ",
          to: "/form"
        },
        {
          icon: "mdi-text-box-check-outline",
          title: "利用規約",
          to: "/rule"
        },
        {
          icon: "mdi-web",
          title: "公式HP",
          href: "https://www.bigfuji.co.jp/store00033.html"
        },
        {
          icon: "mdi-twitter",
          title: "Twitter",
          to: "/"
        },
        {
          icon: "mdi-instagram",
          title: "Instagram",
          to: "/"
        },
        {
          icon: "mdi-github",
          color: "#211F1F",
          title: "GitHub",
          to: "/"
        },
        {
          icon: "mdi-logout",
          title: "ログアウト",
          to: "/logout"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "BIGDAY"
    };
  }
};
</script>