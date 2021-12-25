<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/footer";

export default {
  components: {
    Footer,
  },
  name: "App",
  data() {
    return {};
  },
  metaInfo: {
    title: "CRUD Project Manager",
    htmlAttrs: { lang: "en" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};
</script>
