<template>
  <nav>
    <v-toolbar flat app color="#0C6FF9">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title shrink-on-scroll class="white--text text-uppercase">
        <span class="font-weight-light">Health</span>
        <span class="font-weight-heavy">Calculators</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer
      flat
      v-model="drawer"
      app
      floating
      width="300"
      absolute
      temporary
      color="#0C6FF9"
    >
      <!-- <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <v-img src="src/assets/1.png" alt="Avatar"></v-img>
          </v-avatar>
          <p class="white--text">Username</p>
        </v-flex>
      </v-layout> -->
      <v-card class="mx-auto" width="256" tile> </v-card>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block flat @click="signOut()">
            Logout
            <v-icon right>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  components: {},
  data() {
    return {
      drawer: false,

      //add webpages to links array
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/Dashboard" },
        { icon: "mdi-account", text: "Account", route: "/AccountPage" },
        { icon: "mdi-information-variant", text: "About", route: "/About" },
      ],
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logged out");
          this.$router.replace({
            name: "Login",
          });
        });
    },
  },
};
</script>

<style></style>
