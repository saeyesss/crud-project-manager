<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height p-4">
      <div class="container">
        <div class="text-center pa-4 my-auto">
          <h1 class="display-4 pa-4" id="healthcalc">Health Calculators</h1>
          <h2 class="display-1" id="tracky">Track your health today!</h2>
        </div>

        <div class="text-center pa-5 my-auto">
          <router-link to="/register" tag="button" id="getstar"
            ><v-btn color=" rgb(214, 69, 170)" x-large router :to="link.route"
              >Get Started!</v-btn
            ></router-link
          >
        </div>
      </div>
    </div>
    <div id="about" class="bg-light p-3 p-md-5">
      <div class="row">
        <div class="col-lg" align="justify">
          <h4 class="text-center">BMI</h4>
          <v-divider></v-divider>
          <h5 class="ml-md-4 mr-md-5">
            Body Mass Index (BMI) is a person's weight in kilograms divided by
            the square of height in meters. A high BMI can indicate high body
            fatness. BMI screens for weight categories that may lead to health
            problems, but it does not diagnose the body fatness or health of an
            individual.
          </h5>
          <v-btn
            class="justify-center"
            outlined
            block
            center
            href="https://www.calculator.net/bmi-calculator.html"
            target="_blank"
          >
            <v-icon>mdi-window</v-icon> Learn more
          </v-btn>
        </div>
        <div class="col-lg" align="justify">
          <h4 class="text-center">BMR</h4>
          <v-divider></v-divider>
          <h5 class="ml-md-4 mr-md-5">
            Basal metabolic rate (BMR) is the amount of energy needed while
            resting in a temperate environment when the digestive system is
            inactive. It is the equivalent of figuring out how much gas an idle
            car consumes while parked.
          </h5>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            block
            center
            href="https://www.calculator.net/bmr-calculator.html"
            target="_blank"
          >
            <v-icon>mdi-window</v-icon> Learn more
          </v-btn>
        </div>
        <div class="col-lg" align="justify">
          <h4 class="text-center">Ideal Weight</h4>
          <v-divider></v-divider>
          <h5 class="ml-md-4 mr-md-5 justify">
            Ideal weight gives off the ideal weight of an average human being
            considering different factors such as gender, height and age. Ideal
            weight is mostly used in cases of different sports and the military.
          </h5>
          <v-btn
            outlined
            block
            center
            href="https://www.calculator.net/ideal-weight-calculator.html"
            target="_blank"
          >
            <v-icon>mdi-window</v-icon> Learn more
          </v-btn>
        </div>
        <div class="col-lg" align="justify">
          <h4 class="text-center">Body fat percentage</h4>
          <v-divider></v-divider>
          <h5 class="ml-md-4 mr-md-5">
            The body fat percentage (BFP) of a human or other living being is
            the total mass of fat divided by total body mass, multiplied by 100;
            body fat includes essential body fat and storage body fat. Essential
            is necessary to maintain life and reproductive functions.
          </h5>
          <v-btn
            outlined
            block
            center
            href="https://www.calculator.net/body-fat-calculator.html"
            target="_blank"
          >
            <v-icon>mdi-window</v-icon> Learn more
          </v-btn>
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
  background: url("../assets/2.png") no-repeat center center;
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
