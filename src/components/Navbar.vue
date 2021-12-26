<template>
  <nav>
    <v-app-bar flat app color="#123456">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title shrink-on-scroll class="white--text text-uppercase">
        <span class="font-weight-light">Project</span>
        <span class="font-weight-heavy">Manager</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      flat
      floating
      width="300"
      absolute
      temporary
      color="#123456"
    >
      <v-layout column align-center>
        <v-flex class="ma-5">
          <!-- <v-avatar size="100">
            <v-img src="src/assets/1.png" alt="Avatar"></v-img>
          </v-avatar> -->
          <span class="headline white--text" id="displayName">{{
            getUserDisplayName()
          }}</span>
        </v-flex>
      </v-layout>
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

      <div class="pa-2">
        <v-btn large block flat class="ivory" @click="signOut()">
          Logout
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
      </div>
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
      displayName: "",
      //add webpages to links array
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/Dashboard" },
        { icon: "mdi-account", text: "Account", route: "/AccountPage" },
        { icon: "mdi-information-variant", text: "About", route: "/About" },
      ],
    };
  },
  methods: {
    getUserDisplayName() {
      this.displayName = firebase.auth().currentUser.displayName;
      return this.displayName;
    },
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

<style>
#displayName {
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: #202020;
  text-transform: uppercase;
  word-spacing: 1px;
  letter-spacing: 2px;
}
</style>
