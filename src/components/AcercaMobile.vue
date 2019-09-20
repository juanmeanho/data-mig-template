<template>
  <div class="hidden-md-and-up">
    <v-layout justify-center :class="{'mb-12': $vuetify.breakpoint.xsOnly}">
      <v-flex
        xs10
        :class="{'mb-12': $vuetify.breakpoint.xsOnly, 'mb-n12': $vuetify.breakpoint.smOnly}"
      >
        <v-card flat class="mx-auto d-inline d-table-block mt-12" width="352">
          <v-card-text>
            <div class="mt-6 acerca-de" v-text="$ml.get('about')"></div>
            <div class="display-1 proyecto" v-text="$ml.get('project')">
              <div class="dash-orange mt-5"></div>
            </div>
            <div class="proyecto-descripcion" v-text="$ml.get('project_desc')"></div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-flex
      ml-12
      pl-12
      :class="{'mt-n12': $vuetify.breakpoint.smOnly,
        'mr-12': $vuetify.breakpoint.xsOnly,
        'pt-12': $vuetify.breakpoint.xsOnly,
        'ml-n4': $vuetify.breakpoint.xsOnly}"
    >
      <div :class="{'mt-8': $vuetify.breakpoint.xsOnly}" style="background-color:#ffffff;">
        <v-img src="@/assets/group-12.png" height="auto" width="550px"></v-img>
      </div>
    </v-flex>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>
