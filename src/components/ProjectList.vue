<template>
  <v-app class="list row">
    <v-container>
      <v-layout>
        <v-flex>
          <v-card class="ma-3">
            <div class="overline text-left">
              <h1 id="titles">Projects</h1>
            </div>
            <div><v-divider></v-divider></div>
            <div>{{ hello() }}</div>
            <!-- <v-list>
              <v-list-item
                class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(project, index) in projects"
                :key="index"
                @click="setActivepProject(project, index)"
              >
                <v-list-item-content>sdfsf</v-list-item-content>
              </v-list-item>
            </v-list> -->

            <v-card-actions> </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <div class="col-md-6">
      <h4>projects List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(project, index) in projects"
          :key="index"
          @click="setActivepProject(project, index)"
        >
          {{ project.title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentProject">
        <project-details :project="currentProject" @refreshList="refreshList" />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Project</p>
      </div>
    </div> -->
  </v-app>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "project-list",
  components: {
    // ProjectDetails
  },
  data() {
    return {
      tempdb: "",
      projects: [],
      // currentProject: null,
      // currentIndex: -1,
      // unsubscribe: null,
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
      });

      this.projects = _projects;
    },

    // refreshList() {
    //   this.currentProject = null;x
    //   this.currentIndex = -1;
    // },

    // setActiveProject(project, index) {
    //   this.currentProject = project;
    //   this.currentIndex = index;
    //   },
    // },
    // mounted() {
    //   this.unsubscribe = DataService.getAll()
    //     .orderBy("title", "asc")
    //     .onSnapshot(this.onDataChange);
    // },
    // beforeUnmount() {
    //   this.unsubscribe();
    // },
    hello() {
      let tempdb = DataService.getAll();
      console.log(tempdb);
      // .orderBy("title", "asc")
      // .onSnapshot(this.onDataChange);
    },
    // beforeUnmount() {
    //   this.unsubscribe();
    // },
  },
};

// import ProjectDetails from "./Project";

// export default {
//   name: "project-list",
//   components: {
//     // ProjectDetails
//   },
//   data() {
//     return {
//       projects: [],
//       currentProject: null,
//       currentIndex: -1,
//       unsubscribe: null,
//     };
//   },
//   methods: {
//     onDataChange(items) {
//       let _projects = [];

//       items.forEach((item) => {
//         let id = item.id;
//         let data = item.data();
//         _projects.push({
//           id: id,
//           title: data.title,
//           description: data.description,
//           published: data.published,
//         });
//       });

//       this.projects = _projects;
//     },

//     refreshList() {
//       this.currentProject = null;
//       this.currentIndex = -1;
//     },

//     setActiveProject(project, index) {
//       this.currentProject = project;
//       this.currentIndex = index;
//     },
//   },
//   mounted() {
//     this.unsubscribe = DataService.getAll()
//       .orderBy("title", "asc")
//       .onSnapshot(this.onDataChange);
//   },
//   beforeUnmount() {
//     this.unsubscribe();
//   },
// };
//
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>

//
<v-row align="center" justify="center">
  //             <v-col cols="6" md="auto">
    //  </v-col>
    //         </v-row>
