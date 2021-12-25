<template>
  <v-app id="dashboardbg">
    <Navbar />
    <v-flex class="align-center">
      <v-avatar size="80px">
        <v-img src="person.avatar"></v-img>
      </v-avatar>

      <span> <h1 class="display-4" id="weldas">Dashboard</h1></span>
    </v-flex>
    <v-container>
      <v-layout row wrap col>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-content>
                <div class="title text-left">BMI</div>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="overline ml-2">Your BMI is : {{ bmi }}</div>
              <v-spacer></v-spacer>

              <v-flex class="align-center"><BMI /></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-content>
                <div class="title text-left">BMR</div>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="overline ml-2">Your BMR is : {{ bmr }} (calorie)</div>
              <v-spacer></v-spacer>
              <v-flex class="align-center"><BMR /></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-content>
                <div class="title text-left">Ideal Weight</div>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="overline ml-2">
                Your Ideal Weight is : {{ bmi }} (KG)
              </div>
              <v-spacer></v-spacer>
              <v-flex class="align-center"><idealw /></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-content>
                <div class="title text-left">Body Fat</div>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="overline ml-2">Your Body fat is (%) : {{ bfp }}</div>
              <v-spacer></v-spacer>
              <v-flex class="align-center"><bodyfat /></v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapGetters } from "vuex";

import BMI from "@/components/BMI";
import BMR from "@/components/BMR";
import idealw from "@/components/idealw";
import bodyfat from "@/components/bodyfat";

export default {
  components: {
    Navbar,
    BMI,
    BMR,
    bodyfat,
    idealw,
  },
  methods: {
    showBMI() {},
  },

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
<style scoped>
#weldas {
  margin: 1em 0 0.5em 0;
  color: #faf6f4;
  padding: 0.9em;
  font-weight: 900;
  font-family: "Ultra", sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px #0c6ff9, 0 3px #777;
}
#dashboardbg {
  background-color: indigo;
  background: url("../assets/7.png") no-repeat center center;
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
