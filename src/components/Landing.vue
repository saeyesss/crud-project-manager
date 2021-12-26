<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height p-4">
      <div class="container">
        <div class="text-center pa-4 my-auto">
          <h1 class="display-4 pa-4" id="healthcalc">SAEBHIT</h1>
          <h2 class="display-1" id="tracky">
            Project Tracker with CRUD operations
          </h2>
        </div>

        <div class="text-center pa-5 my-auto">
          <router-link to="/register" tag="button" id="getstar"
            ><v-btn color="ivory" x-large router :to="link.route"
              >Get Started!</v-btn
            ></router-link
          >
        </div>
        <div class="text-center pa-5 my-auto">
          <router-link to="/About" tag="button" id="getstar"
            ><v-btn dense dark color="#A273C6" large router :to="link2.route"
              >About</v-btn
            ></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      link: [{ route: "/Login" }],
      link2: [{ route: "/About" }],
    };
  },
};
</script>
<style scoped>
.full-height {
  min-height: 100vh;
}
#home-page {
  background-color: indigo;
  background: url("../assets/11.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
  background-position: center;
  float: left;
  width: 100%;
}
#about {
  min-height: 40%;
}
#healthcalc {
  margin: 1em 0 0.5em 0;
  color: rgb(148, 54, 145);

  font-weight: 900;
  font-family: "Ultra", sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
}
#tracky {
  margin: 1em 0 0.5em 0;
  color: rgb(214, 69, 209);
  font-weight: 500;
  font-family: "Ultra", sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
}
#learnmoreBtn {
  flex-direction: column;
}
</style>
