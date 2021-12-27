<template>
  <div v-if="currentProject" class="mx-auto" max-width="400">
    <span class="headline">Project</span>

    <div>
      <v-text-field
        filled
        clearable
        id="title"
        label="Title"
        v-model="currentProject.title"
      />

      <input
        type="text"
        class="form-control"
        id="description"
        v-model="currentProject.description"
      />

      <label><strong>Status:</strong></label>
      {{ currentProject.published ? "Published" : "Pending" }}
    </div>
    <v-btn
      badge
      class="mr-2"
      v-if="currentProject.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </v-btn>
    <v-btn
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </v-btn>

    <v-btn class="badge badge-danger mr-2" @click="deleteProject">
      Delete
    </v-btn>

    <v-btn type="submit" class="badge badge-success" @click="updateProject">
      Update
    </v-btn>
    <span class="title"
      ><h1>{{ message }}</h1></span
    >
  </div>

  <div v-else>
    <br />
    <span>Please select a project</span>
  </div>
</template>

<script>
// import DataService from "../services/DataService";

// export default {
//   name: "project",
//   props: ["project"],
//   data() {
//     return {
//       currentProject: null,
//       message: "",
//     };
//   },
//   watch: {
//     project: function (project) {
//       this.currentProject = { ...project };
//       this.message = "";
//     },
//   },
//   methods: {
//     updatePublished(status) {
//       DataService.update(this.currentProject.id, {
//         published: status,
//       })
//         .then(() => {
//           this.currentProject.published = status;
//           this.message = "The status was updated successfully!";
//         })
//         .catch((e) => {
//           alert("Error: " + e);
//         });
//     },

//     updateProject() {
//       const data = {
//         title: this.currentProject.title,
//         description: this.currentProject.description,
//       };

//       DataService.update(this.currentProject.id, data)
//         .then(() => {
//           this.message = "The Project was updated successfully!";
//         })
//         .catch((e) => {
//           alert("Error: " + e);
//         });
//     },

//     deleteProject() {
//       DataService.delete(this.currentProject.id)
//         .then(() => {
//           this.$emit("refreshList");
//         })
//         .catch((e) => {
//           alert("Error: " + e);
//         });
//     },
//   },
//   mounted() {
//     this.message = "";
//     this.currentProject = { ...this.Project };
//   },
// };
</script>

<style>
/* .edit-form {
  max-width: 300px;
  margin: auto;
} */
</style>
