<template>
  <v-app id="accountbg">
    <div class="fluid m-0 p-0">
      <Navbar />
      <span> <h1 class="display-4" id="accounthead">Account</h1></span>
    </div>

    <v-container class="py-6" id="dashboard-view" tag="section">
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card class="pa-5" elevation="4" dark color="#123456" tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="h2">Account Details</h3>
              </v-layout>
            </v-card-title>
            <div><v-divider></v-divider></div>
            <div>
              <span class="headline">Name: {{ getUserDisplayName() }}</span>

              <br />
              <br />
              <span class="headline">Email: {{ getUserEmail() }}</span>
              <br />
              <br />
              <span class="headline">User ID: {{ getUID() }}</span>
            </div>
            <div><v-divider></v-divider></div>
            <v-form class="pa-5">
              <span class="title">CHANGE ACCOUNT DETAILS </span>
              <div><v-divider></v-divider></div>
              <div class="my-5">
                <v-text-field
                  filled
                  single-line
                  label="Enter new username:"
                  type="text"
                  v-model="newUserName"
                >
                </v-text-field>
                <v-btn light color="ivory" @click="updateUserName()">
                  Update Name<v-icon right>mdi-update</v-icon>
                </v-btn>
              </div>
              <div class="mt-5">
                <v-text-field
                  filled
                  single-line
                  label="Enter new email:"
                  type="text"
                  v-model="newEmail"
                >
                </v-text-field>
                <v-btn light color="ivory" @click="updateEmail()">
                  Update E-mail<v-icon right>mdi-update</v-icon>
                </v-btn>
              </div>
              <div class="mt-5">
                <v-text-field
                  filled
                  single-line
                  label="Enter new password:"
                  type="password"
                  v-model="newPassword"
                >
                </v-text-field>
                <v-btn light color="ivory" @click="updatePassword()">
                  Change Password<v-icon right>mdi-update</v-icon>
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
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
      uid: "",
      newUserName: "",
      newEmail: "",
      newPassword: "",
    };
  },
  computed: {},
  methods: {
    getUserDisplayName() {
      this.displayName = firebase.auth().currentUser.displayName;
      return this.displayName;
    },
    getUserEmail() {
      this.email = firebase.auth().currentUser.email;
      return this.email;
    },
    getUID() {
      this.uid = firebase.auth().currentUser.uid;
      return this.uid;
    },
    updateUserName() {
      let uname = this.newUserName;
      var user = firebase.auth().currentUser;
      user
        .updateProfile({ displayName: uname })
        .then(() => {
          alert("Username updated successfully. Hello " + uname);
        })
        .catch((err) => {
          alert("Error: " + err.message);
        });
    },
    updateEmail() {
      let uemail = this.newEmail;
      var user = firebase.auth().currentUser;
      user
        .updateEmail(uemail)
        .then(() => {
          alert("E-mail updated successfully. New E-mail: " + uemail);
        })
        .catch((err) => {
          alert("Error: " + err.message);
          if (err.message == "auth/requires-recent-login")
            user.reauthenticateWithCredential();
        });
    },
    updatePassword() {
      let upassword = this.newPassword;
      var user = firebase.auth().currentUser;
      user
        .updatePassword(upassword)
        .then(() => {
          alert("Password updated successfully.");
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
  color: #519ef6;
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
