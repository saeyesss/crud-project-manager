<template>
  <v-footer id="default-footer" color="rgb(65,61,69)" padless>
    <!-- <v-card flat tile class="white--text text-center" color="rgb(65,61,69)">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px"> @mdi-linkedin </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 ">
       Our website focuses on giving a user friendly experience in helping you find various health calculators according to your needs
      </v-card-text>
    </v-card> -->
    <Links />
  </v-footer>
</template>

<script>
import Links from "@/components/links";

export default {
  components: {
    Links,
  },
};
</script>

<style scoped>
#inspire {
  background: url("../assets/69.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.v-btn,
.v-card {
  border-radius: 10px;
}

.v-card__title {
  text-transform: uppercase;
}
#regbtn {
  margin-left: 260px;
}
</style>
