<template>
    <v-layout row align-center>
      <v-flex>
        <v-layout justify-center>
          <v-card
            flat
            color="transparent"
            class="rounded-card"
          >
            <v-card-title class="mt-n12"  :class="{'data-mig-xs': $vuetify.breakpoint.xs}">
              <div class="data-mig mt-n12" :class="{'data-mig-xs': $vuetify.breakpoint.xsOnly}">Data</div>
              <div class="data-mig-capital mt-n12" :class="{'data-mig-xs': $vuetify.breakpoint.xsOnly}">MIG</div>
            </v-card-title>
          </v-card>
        </v-layout>
      </v-flex>
      <v-flex xs4 sm8 offset-sm-2 lg6 offset-lg3>
        <v-layout justify-center>
          <v-card flat color="transparent" width="60%" class="rounded-card mt-12 mb-12">
            <v-card-title  class="text-hero-right"
            :class="[open ? 'mb-7' : 'mb-10', {'text-hero-xs': $vuetify.breakpoint.xs}]">
              <v-flex mt-12>
                <v-text-field v-text="$ml.get('datamig_desc')"></v-text-field>
              </v-flex>
            </v-card-title>
          </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  props: ['open'],
  data: () => ({
    //
  })
};
</script>
