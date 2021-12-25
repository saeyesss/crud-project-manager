@@ -1,88 +1,102 @@
<template>
  <div id="aboutbg">
    <Navbar />
    <div>
      <v-container>
        <v-layout>
          <v-flex>
            <span> <h1 class="display-4" id="abouthead">About</h1></span>

            <div
              class="title text-center ml-2"
              style="text-align: center; background-color: white"
            >
              Our website focuses on giving a user friendly experience in
              helping you find various health calculators.
            </div>
            <v-card class="ma-3">
              <v-list-item>
                <v-list-item-content>
                  <div class="overline text-left">
                    <h1 id="titles">Body Mass Index</h1>
                  </div>
                  <div><v-divider></v-divider></div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <div class="overline ml-2 text-justify">
                  BMI is a measurement of a person's leanness or corpulence
                  based on their height and weight, and is intended to quantify
                  tissue mass. It is widely used as a general indicator of
                  whether a person has a healthy body weight for their height.
                  Specifically, the value obtained from the calculation of BMI
                  is used to categorize whether a person is underweight, normal
                  weight, overweight, or obese depending on what range the value
                  falls between.
                </div>
              </v-card-actions>
            </v-card>

            <v-card class="ma-3">
              <v-list-item>
                <v-list-item-content>
                  <div class="headline overline text-left">
                    <h1 id="titles">Basal Metabolic Rate</h1>
                  </div>
                  <div><v-divider></v-divider></div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <div class="overline ml-2 text-justify">
                  The Basal Metabolic Rate (BMR) Calculator estimates your basal
                  metabolic rate, the amount of energy expended while at rest in
                  a neutrally temperate environment. In most situations, the BMR
                  is estimated with equations summarized from statistical data.
                  The Mifflin-St Jeor Equation has been shown to be more
                  accurate in providing the Basal Metabolic rate of a person.
                </div>
              </v-card-actions>
            </v-card>

            <v-card class="ma-3">
              <v-list-item>
                <v-list-item-content>
                  <div class="overline text-left">
                    <h1 id="titles">Ideal Weight</h1>
                  </div>
                  <div><v-divider></v-divider></div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <div class="overline ml-2 text-justify">
                  Ideal Weight Calculator basically helps in finding the ideal
                  weight that a person belongs to according to their height and
                  gender. This was actually introduced to estimate dosages for
                  medical use, and the formulas that calculate it are not at all
                  related to how a person looks at a given weight. In today’s
                  world IWC is used widely in sports to keep track of an
                  athlete’s weight for the sport that they play in.
                </div>
              </v-card-actions>
            </v-card>

            <v-card class="ma-3">
              <v-list-item>
                <v-list-item-content>
                  <div class="overline text-left">
                    <h1 id="titles">Body Fat</h1>
                  </div>
                  <div><v-divider></v-divider></div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <div class="overline ml-2 text-justify">
                  Body fat includes essential body fat and storage body fat.
                  Essential body fat is a base level of fat that is found in
                  most parts of the body. It is necessary fat that maintains
                  life and reproductive functions. The amount of essential fat
                  differs between men and women, and is typically around 2-5% in
                  men, and 10-13% in women. The healthy range of body fat for
                  men is typically defined as 8-19%, while the healthy range for
                  women is 21-33%. There are two ways in calculating body fat of
                  an individual person while taking in consideration of the
                  inputs like : gender, age, weight, height. They are US Navy
                  method and the BMI method. The method which we follow in
                  analyzing the body fat of a human being is using the BMI
                  method.
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
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
#aboutbg {
  background-color: indigo;
  background: url("../assets/5.png") no-repeat center center;
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
#titles {
  /* margin: 1em 0 0.5em 0; */
  color: #8f098f;
  padding: 0.9em;
  font-weight: 900;
  font-family: "Ultra", sans-serif;
  font-size: 36px;
  line-height: 20px;
  text-transform: uppercase;
  text-shadow: 0 2px #ecda38, 0 3px #777;
}
#abouthead {
  /* margin: 0.8em 0 0.5em 0; */
  color: #1b1b00;
  padding: 0.9em;
  font-weight: 900;
  font-family: "Ultra", sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px #ffce00, 0 3px #777;
}
</style>
