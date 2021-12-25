<template>
  <v-app>
    <default-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
      DefaultFooter: () => import(
        /* webpackChunkName: "default-footer" */
        './footer'
      ),
    },
  }
</script>
