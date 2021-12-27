<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card class="ma-3">
          <div class="overline text-left">
            <h1 id="titles">Projects</h1>
          </div>
          <div><v-divider></v-divider></div>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DataService from "../services/DataService";

export default {
  components: {},
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getData() {
      let _projects = [];
      _projects = DataService.getAll().onSnapshot(this.onDataChange);
    },
  },
};
</script>

<style></style>
