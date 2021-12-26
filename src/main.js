import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

// Bootstrap import
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Firebase import and init
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-oHHH9CHBcgiaPDaG5PLYgM9rSqVBR88",
  authDomain: "crud-project-e2ef9.firebaseapp.com",
  projectId: "crud-project-e2ef9",
  storageBucket: "crud-project-e2ef9.appspot.com",
  messagingSenderId: "68638137412",
  appId: "1:68638137412:web:a5b500a1dd04fb86dcf011",
  measurementId: "G-8NKFR3JWY5",
};

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;

export const db = firebase.firestore();

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
