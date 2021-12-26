<template>
  <v-app id="dashboardbg">
    <Navbar />
    <v-flex class="align-center">
      <span> <h1 class="display-4" id="weldas">Projects</h1></span>
    </v-flex>
    <v-container> </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
  methods: {},
};
</script>
<style scoped>
#weldas {
  margin: 1em 0 0.5em 0;
  color: #faf6f4;
  padding: 0.9em;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  /* text-transform: uppercase; */
  text-shadow: 0 2px #0c6ff9, 0 3px #777;
  font-family: "Helvetica Neue", "Helvetica";
}
#dashboardbg {
  background-color: indigo;
  background: url("../assets/11.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  background-position: 50% 50%;
}
</style>
