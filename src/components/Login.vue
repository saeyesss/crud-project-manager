<template>
  <div>
    <v-app
      :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
      :dark="darkTheme"
      id="inspire"
    >
      <v-container class="py-15">
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" dark color="#FF882D" tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="h2">
                    {{ platformName }}
                  </h3>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <p>Sign in with your E-mail:</p>
                <v-form>
                  <v-text-field
                    outline
                    filled
                    label="E-mail"
                    type="text"
                    v-model="form.email"
                  ></v-text-field>
                  <v-text-field
                    outline
                    filled
                    hide-details
                    label="Password"
                    type="password"
                    v-model="form.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <router-link to="/register" tag="button" id="getstar"
                  ><v-btn class="blue lighten-1" flat>
                    Register
                    <v-icon dense right color="white">mdi-account-plus</v-icon>
                  </v-btn>
                </router-link>
                <v-spacer></v-spacer>
                <v-btn
                  class="blue lighten-1"
                  dark
                  flat
                  :medium="$vuetify.breakpoint.smAndUp"
                  @keypress.enter="loginUser"
                  @click="loginEmail"
                >
                  Sign in <v-icon right>mdi-login</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-divider></v-divider>
            <v-container text-center>
              <v-btn
                class="blue lighten-1"
                dark
                text-center
                @click="loginGoogle"
                ><v-icon dense left color="white">mdi-google</v-icon> Sign in
                with Google</v-btn
              >
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  data() {
    return {
      darkTheme: true,
      platformName: "Login",
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },

  methods: {
    loginEmail() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          alert("Welcome " + data.user.displayName + " You are now logged in");
          this.$router.replace({ name: "Dashboard" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    loginGoogle() {
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((data) => {
          alert("Logged in with Google" + data.email);
          this.$router.replace({ name: "Dashboard" });
        })
        .catch((err) => {
          this.error = err.message;
          alert(this.error);
        });
    },
  },
};
</script>

<style>
#inspire {
  background-color: indigo;
  background: url("../assets/8.png") no-repeat center center;
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
.v-btn,
.v-card {
  border-radius: 10px;
}

.v-card__title {
  text-transform: uppercase;
}
</style>
