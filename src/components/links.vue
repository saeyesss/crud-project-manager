<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6" md="auto">
        <div
          class="linkcss text-body-1 center caption pt-6 pt-md-0 text-center white--text"
        >
          {{ new Date().getFullYear() }}, Made with 💓
          <a
            href="https://github.com/saeyesss/crud-project-manager"
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
};
</script>

<style lang="css">
.linkcss a {
  padding-bottom: 1px;
  text-decoration: none;
  color: inherit;
  border-bottom: 0.05em solid #b4e7f8;
  box-shadow: inset 0 -0.05em 0 #b4e7f8;

  /* box-shadow: inset 0 -4px 0 rgba(13, 190, 152, 0.7); */
  transition: background-color 0.25s ease-out;
}

.linkcss a:hover {
  background-color: #17718f;
  padding-top: 2px;
  box-shadow: none;
}
</style>
