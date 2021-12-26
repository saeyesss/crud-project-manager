<template>
  <v-app id="accountbg">
    <div class="fluid m-0 p-0">
      <Navbar />
      <span> <h1 class="display-4" id="accounthead">Account</h1></span>
    </div>

    <v-container class="my-6" id="dashboard-view" tag="section">
      <div>
        <h1>UserName is {{ getUserDisplayName() }}</h1>
        <h1>Email is {{ getUserEmail() }}</h1>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import firebase from "firebase/compat/app";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      displayName: "",
      email: "",
    };
  },
  methods: {
    getUserDisplayName() {
      this.displayName = firebase.auth().currentUser.displayName;
      return this.displayName;
    },
    getUserEmail() {
      this.email = firebase.auth().currentUser.email;
      return this.email;
    },
    updateUserName() {
      let newUserName = this.userName;
      var user = firebase.auth().currentUser;
      user
        .updateProfile({ displayName: newUserName })
        .then(() => {
          alert("User Name updated successfully. Hello " + newUserName);
        })
        .catch((err) => {
          alert("Error: " + err.message);
        });
    },
  },
};
</script>
<style>
#accounthead {
  margin: 0.8em 0 0.5em 0;
  color: #388bff;
  padding: 0.9em;
  font-weight: 900;
  font-family: "Ultra", sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px #ffce00, 0 3px #777;
}
#accountbg {
  background-color: indigo;
  background: url("../assets/9.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
  background-position: 50% 50%;
}
</style>
