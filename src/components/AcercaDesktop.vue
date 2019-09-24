<template >
  <v-card class="mx-auto pl-12 mt-12 hidden-sm-and-down" flat>
    <v-container class="pa-2" fluid>
      <v-layout row wrap justify-center>
        <v-flex xs12 lg4 md12 class="ml-12">
          <v-card flat class="mx-auto d-inline d-table-block ml-12 mt-19" width="352" id="project">
            <v-card-text>
              <div class="mt-12 acerca-de" v-text="$ml.get('about')"></div>
              <div class="display-1 proyecto" v-text="$ml.get('project')">
                <div class="dash-orange mt-5"></div>
              </div>
              <div class="proyecto-descripcion" v-text="$ml.get('project_desc')"></div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg6 mt-12 pt-12 ml-12>
          <div style="background-color:#ffffff;">
            <v-img src="@/assets/group-12.png" height="auto" width="585px"></v-img>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>
