<template>
  <v-layout
    class="hidden-md-and-up"
    :class="{'mb-n5': $vuetify.breakpoint.smAndUp,
                'mb-12': $vuetify.breakpoint.xs}"
  >
    <template xs12>
      <v-container class="pa-2" fluid>
        <v-layout row align-center>
          <template>
            <v-flex xs12>
              <v-layout justify-center>
                <v-card flat color=" transparent" class="rounded-card">
                  <v-img class="white--text" height="100px">
                    <v-card-title class="data-mig">
                      <div class="datasets" v-text="$ml.get('datasets')"></div>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-layout>
            </v-flex>
          </template>

          <template>
            <v-layout justify-center>
              <v-card flat color="transparent" class="rounded-card" width="80%">
                <v-card-title class="text-hero-right">
                  <v-layout justify-center>
                    <v-flex xs10>
                      <div class="datasets-description" v-text="$ml.get('datasets_desc')"></div>
                    </v-flex>
                  </v-layout>
                </v-card-title>
              </v-card>
            </v-layout>
          </template>
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
    
<style>
.width-text-xs {
  width: 240px;
}

.width-text-md {
  width: 350px;
}
</style>
