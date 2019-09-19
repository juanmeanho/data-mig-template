<template>
  <v-card class="mx-auto pa-2 hidden-sm-and-down" max-width="1059" color="transparent" flat dark>
    <v-container class="pa-2" fluid>
      <v-row>
        <v-col v-for="section in sections" :key="section.title_en" :cols="3">
          <v-card class="rounded-card pa-6" style="cursor:pointer;" height="423px" color="#3c78fa">
            <div>
              <v-card-text class="numbers" v-text="section.title_en"></v-card-text>
            </div>
            <div>
              <v-card-text class="flujos" v-text="section.title_en"></v-card-text>
            </div>

            <div>
              <v-card-text class="mt-6 mini-dataset">
                <p v-text="$ml.get('dataset')" />
              </v-card-text>
            </div>
            <div class="dash ml-4 mt-2"></div>
            <div>
              <v-card-text class="mt-5 desc-dataset" v-text="section.title_en"></v-card-text>
            </div>
            <div>
              <v-card-text class="download-link mt-n6 mb-n5">
                datos.cvs
                <arrow-down class="ml-12 pl-12" />
              </v-card-text>
            </div>
            <div class="dash-download mt-2 ml-4"></div>
            <div>
              <v-card-text class="download-link mt-n2 mb-n5">
                metodologia.pdf
                <arrow-down class="ml-2 pt-n2 pl-12" />
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    sections: null
  }),
  methods: {
    async getSection() {
      let sections = await axios.get(
        "http://backend.datamig.org/en/api/section"
      );
      this.sections = await sections.data;
    }
  },
  created() {
    this.getSection();
  }
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
