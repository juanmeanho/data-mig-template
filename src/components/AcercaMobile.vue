<template>
  <div class="hidden-md-and-up">
    <v-layout justify-center :class="{'mb-12': $vuetify.breakpoint.xsOnly}">
      <v-flex xs10 :class="{'mb-12': $vuetify.breakpoint.xsOnly}">
        <v-card flat class="mx-auto d-inline d-table-block mt-12 mb-12" width="352">
          <v-card-text>
            <div class="mt-6 acerca-de">
              <p v-text="$ml.get('about')" />
            </div>
            <div class="display-1 proyecto">
              <p v-text="$ml.get('project')" />
              <div class="dash-orange mt-5"></div>
            </div>
            <div class="proyecto-descripcion">
              <p v-text="$ml.get('project_desc')" />
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="mr-12 pr-12" :class="{'mt-n12': $vuetify.breakpoint.smAndUp}">
      <v-img
        src="../assets/image-new.jpg"
        :class="{'size-image': $vuetify.breakpoint.lg,
                'mt-n12': $vuetify.breakpoint.smAndUp,
                'mt-12': $vuetify.breakpoint.xs}"
      ></v-img>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>
