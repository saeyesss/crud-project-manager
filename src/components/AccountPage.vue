<template>
  <v-app id="accountbg">
    <div class="fluid m-0 p-0">
      <Navbar />
      <span> <h1 class="display-4" id="accounthead">Account</h1></span>
    </div>

    <v-container class="my-6" id="dashboard-view" tag="section"> </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
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
