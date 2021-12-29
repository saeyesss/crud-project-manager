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
            <div>{{ getData() }}</div>

            <!-- <v-list>
              <v-list-item
                class="list-group-item"`
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
<style>
.list {
  text-align: center;
  max-width: 1000px;
  margin: auto;
}
</style>
