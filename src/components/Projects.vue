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
    onDataChange(items) {
      let _projects = [];

      items.forEach((item) => {
        let id = item.id;
        let data = item.data();
        _projects.push({
          id: id,
          title: data.title,
          description: data.description,
          published: data.published,
        });
      }, console.log(_projects));

      this.projects = _projects;
    },

    getData() {
      DataService.getAll().onSnapshot(this.onDataChange);
      // console.log(DataService.getAll().onSnapshot(this.onDataChange));
    },
  },
};
</script>

<style></style>
