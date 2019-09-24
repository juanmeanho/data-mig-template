
<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    //
  }),
  methods: {}
};
</script>

<style>
.v-toolbar__content {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.v-slider__thumb-label > div > span {
  color: #ffffff;
}
.v-tabs-slider-wrapper {
  height: 4px !important;
}
</style>

