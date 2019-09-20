<template>
  <v-layout>
    <template xs12>
      <v-container class="pa-2" fluid :class="{'mt-12': $vuetify.breakpoint.mdAndUp}">
        <v-layout row align-center>
          <v-flex>
            <v-layout justify-center>
              <v-card
                flat
                color="transparent"
                class="rounded-card"
                :class="{'mb-12': $vuetify.breakpoint.smAndUp}"
              >
                <v-card-title :class="{'data-mig-xs': $vuetify.breakpoint.xs}">
                  <div class="data-mig" :class="{'data-mig-xs': $vuetify.breakpoint.xsOnly}">Data</div>
                  <div
                    class="data-mig-capital"
                    :class="{'data-mig-xs': $vuetify.breakpoint.xsOnly}"
                  >MIG</div>
                </v-card-title>
              </v-card>
            </v-layout>
          </v-flex>
          <v-flex xs4 sm8 offset-sm-2 lg6 offset-lg3>
            <v-layout justify-center>
              <v-card flat color="transparent" width="70%" class="rounded-card mt-12 mb-12">
                <v-card-title
                  class="text-hero-right"
                  :class="{'text-hero-xs': $vuetify.breakpoint.xs}"
                >
                  <v-flex mt-12>
                    <div v-text="$ml.get('datamig_desc')"></div>
                  </v-flex>
                </v-card-title>
              </v-card>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>
