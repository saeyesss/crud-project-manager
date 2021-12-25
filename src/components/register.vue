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
              <v-card-title align-center>
                <v-layout align-center justify-space-between>
                  <h3 class="h2">
                    {{ platformName }}
                  </h3>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-form>
                  <v-text-field
                    outline
                    label="Name"
                    type="text"
                    v-model="form.name"
                    filled
                  ></v-text-field>
                  <v-text-field
                    outline
                    label="E-mail"
                    type="text"
                    v-model="form.email"
                    filled
                  ></v-text-field>
                  <v-text-field
                    outline
                    hide-details
                    label="Password"
                    type="password"
                    v-model="form.password"
                    filled
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <router-link to="/Login" tag="button"
                  ><v-btn class="blue lighten-1" flat>
                    <v-icon dense left color="white">mdi-login</v-icon> Login
                  </v-btn>
                </router-link>
                <v-spacer></v-spacer>
                <v-btn
                  v-on:keyup.enter="registerUser()"
                  @click="registerUser()"
                  id="regbtn"
                  class="blue lighten-1"
                >
                  <v-icon dense left color="white">mdi-account-plus</v-icon>
                  Register</v-btn
                >
              </v-card-actions>
            </v-card>
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
      platformName: "Register",
      form: { password: "", name: "", email: "" },
      error: null,
    };
  },

  methods: {
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {});
          alert("New User:" + data.user.displayName);
          this.$router.replace({ name: "Login" });
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
