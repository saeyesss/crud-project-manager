<template>
  <div fluid-container id="aboutbg">
    <Navbar />

    <div>
      <v-container>
        <v-layout>
          <v-flex>
            <span> <h1 class="display-4" id="abouthead">About</h1></span>

            <v-card class="ma-3">
              <v-list-item>
                <v-list-item-content>
                  <div
                    class="title text-center ml-2"
                    style="text-align: center; background-color: white"
                  >
                    This website focuses on providing a user-friendly experience
                    in managing projects with CRUD operations.
                  </div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <div class="overline ml-2 text-justify"></div>
              </v-card-actions>
            </v-card>

            <v-card class="ma-3">
              <v-list-item>
                <v-list-item-content>
                  <div class="overline text-left">
                    <h1 id="titles">Bibliography</h1>
                  </div>
                  <div><v-divider></v-divider></div>
                  <div class="link9">
                    <v-row align="center" justify="center">
                      <v-col cols="6" md="auto">
                        <a
                          class="headline"
                          id="linkcss"
                          href="https://vuetifyjs.com/en/getting-started/installation/"
                          >Vuetify Documentation</a
                        >
                      </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                      <v-col cols="6" md="auto">
                        <a
                          class="headline"
                          id="linkcss"
                          href="https://firebase.google.com/docs"
                          >Firebase Documentation</a
                        >
                      </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                      <v-col cols="6" md="auto">
                        <a
                          class="headline"
                          id="linkcss"
                          href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"
                          >Bootstrap</a
                        >
                      </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                      <v-col cols="6" md="auto">
                        <a
                          class="headline"
                          id="linkcss"
                          href="https://get.headspace.com/hs-backgrounds"
                          >Background Images from Headspace
                        </a>
                      </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                      <v-col cols="6" md="auto">
                        <a
                          class="headline"
                          id="linkcss"
                          href=" https://materialdesignicons.com/"
                          >Material Design Icons</a
                        >
                      </v-col>
                    </v-row>
                  </div>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <div class="overline ml-2 text-justify"></div>
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
  background-position: center;
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
/* #linkcss {
  border-bottom: 0.05em solid #b4e7f8;
  box-shadow: inset 0 -0.05em 0 #b4e7f8;
  color: inherit;
  text-decoration: none;
}
#linkcss a:hover,
#linkcss a:focus,
#linkcss a:active,
#linkcss a {
  background-color: #00516d;
} */
.link9 a {
  color: inherit;
  text-decoration: none;
  box-shadow: inset 0 -0.125em 0 0 #ddd;

  transition-property: color;
  transition-duration: 0.25s;
  trasition-timing-function: cubic-bezier(0, 0, 0.58, 1);
}

.link9 a:hover {
  color: #ccc;
}
</style>
