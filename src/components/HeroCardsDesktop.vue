<template>
  <v-card
    color="transparent"
    height="159"
    flat
    class="mt-12 mx-auto hidden-sm-and-down"
    max-width="1059"
  >
    <v-row>
      <v-layout v-for="section in sections" :key="section.title_en" :cols="3">
        <v-flex xs>
          <div :class="[borderLeft, (section.content_en == '04') ? borderRight : '']">
            <v-card
              color="rgba(150,150,150,0.2)"
              flat
              width="269px"
              height="159"
              class="rounded-card mt-8 py-2 px-2"
            >
              <div class="hero-footer" style="height:100%;">
                <v-card-text class="numbers" v-text="section.content_en"></v-card-text>
                <v-card-text class="flujos" v-text="section.title_en"></v-card-text>
              </div>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    sections: null,
    borderLeft: "borders-left",
    borderRight: "borders-right",
    heroFooter: "hero-footer"
  }),
  methods: {
    async getSection() {
      let sections = await axios.get(
        "http://backend.datamig.org/en/api/section"
      );

      console.log(sections.data);
      this.sections = await sections.data;
    }
  },
  created() {
    this.getSection();
  }
};
</script>
