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
                    <h1 id="titles">BIbliography</h1>
                  </div>
                  <div><v-divider></v-divider></div>
                  <div
                    class="title text-center ml-2"
                    style="text-align: center; background-color: white"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta aliquam vel, similique optio laboriosam sequi quas
                    libero! Impedit suscipit earum ducimus corporis eaque ipsa
                    quae perferendis voluptatum consectetur, nostrum eum.L Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit. Ex
                    aliquam, aspernatur quaerat nulla temporibus, cum ipsa
                    tenetur consectetur, quidem non distinctio error! Rerum
                    assumenda ut quia voluptatem repudiandae facilis nulla.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente distinctio dicta alias, deleniti officia
                    repudiandae? Vitae sunt pariatur eaque natus. Ipsam dicta
                    pariatur enim delectus assumenda corporis accusantium nobis
                    architecto. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Commodi facilis, architecto nam molestias
                    eligendi corrupti exercitationem expedita similique quo
                    quidem, blanditiis alias saepe eaque quae sint aliquid
                    repellendus voluptatum laudantium.
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
</style>
