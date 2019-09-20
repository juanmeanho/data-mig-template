<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>

<style>
    .v-toolbar__content {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }

    .v-slider__thumb-label > div > span{
      color: #ffffff;
    }
    .v-tabs-slider-wrapper{
      height: 4px !important;
    }


</style>

