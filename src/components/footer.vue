<template>
  <v-footer id="default-footer" color="#123456" padless>
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
