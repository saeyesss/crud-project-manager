<template>
  <v-container>
    <v-row align="center">
      <v-col
        v-for="(link, i) in links"
        :key="i"
        class="text-center white--text"
        cols="6"
        md="auto"
      >
        <a
          id="contribcss"
          :href="link.href"
          class="text-decoration-none text-uppercase text-caption font-weight-regular"
          rel="noopener"
          target="_blank"
          v-text="link.text"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="auto">
        <div
          class="text-body-1 font-weight-light pt-6 pt-md-0 text-center white--text"
        >
          {{ new Date().getFullYear() }}, Made with 💓
          <a
            id="linkcss"
            href="https://github.com/saeyesss/healthcalculators"
            class="text-decoration-none white--text"
            >Go to Git</a
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "links",

  data: () => ({
    links: [
      {
        href: "https://www.linkedin.com/in/vinol-fernandes/",
        text: "Vinol Fernandes",
      },
      {
        href: "https://www.linkedin.com/in/shreyas-n-1568b2228/",
        text: "Shreyas N",
      },
      {
        href: "https://www.linkedin.com/in/ranjan-ranjan-19a3bb1ab/",
        text: "Ranjan Upadhya",
      },
    ],
  }),
};
</script>

<style lang="css">
#linkcss {
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
}
#contribcss {
  color: #b4e7f8;
  /* border-bottom: 0.05em solid #b4e7f8; */
  /* box-shadow: inset 0 -0.05em 0 #b4e7f8; */

  text-decoration: none;
}
#contribcss a:hover,
#contribcss a:focus,
#contribcss a:active,
#contribcss a {
  background-color: #b4e7f8;
}
</style>
