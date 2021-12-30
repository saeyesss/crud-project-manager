<template>
  <v-dialog max-width="400">
    <template v-slot:activator="{ on }">
      <v-btn
        slot="activator"
        outlined
        color="blue lighten-3"
        dark
        v-on="on"
        small
        >Add Project</v-btn
      >
    </template>

    <v-flex>
      <v-card
        height="100%"
        max-width="400"
        elevation="6"
        dark
        color="#235191"
        class="mx-auto"
      >
        <v-card-title>
          <span class="font-size-heavy display-1">
            New Project
          </span></v-card-title
        >

        <v-main class="ma-auto container">
          <div v-if="!submitted">
            <v-text-field
              type="text"
              label="Title"
              id="title"
              required
              filled
              class="pa-3"
              v-model="project.title"
              name="title"
            >
            </v-text-field>

            <v-textarea
              id="description"
              required
              filled
              class="pa-3"
              v-model="project.description"
              name="description"
              label="Description"
            ></v-textarea>

            <v-btn class="white ma-5" light @click="saveProject()"
              ><v-icon left>mdi-content-save</v-icon> Submit
            </v-btn>
          </div>
          <div v-else>
            <h4 class="ml-5 mb-5">You submitted successfully!</h4>
            <v-btn class="white ma-5" light @click="newProject()">Add</v-btn>
          </div>
        </v-main>
      </v-card>
    </v-flex>
  </v-dialog>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "add-project",
  data() {
    return {
      project: {
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveProject() {
      var data = {
        title: this.project.title,
        description: this.project.description,
        published: false,
      };

      DataService.create(data)
        .then(() => {
          alert("Created new item successfully!");
          this.submitted = true;
        })
        .catch((e) => {
          alert("Error: " + e);
        });
    },

    newProject() {
      this.submitted = false;
      this.project = {
        title: "",
        description: "",
        published: false,
      };
    },
  },
};
</script>

<style></style>
