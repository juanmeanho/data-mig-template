<template>
  <div>
    <v-layout justify-center>
      <v-flex xs10 sm6>
        <v-card
          v-for="(items, i) in cards"
          :key="i"
          color="transparent"
          height="30"
          flat
          class="mt-12 hidden-md-and-up"
        >
          <v-layout justify-center>
            <v-flex>
              <div class="borders-left borders-right">
                <v-card
                  color="rgba(150,150,150,0.2)"
                  flat
                  height="70"
                  class="rounded-card mt-12 px-2"
                >
                  <div
                    class="hero-footer"
                    :class="{'hero-footer-image': $vuetify.breakpoint.mdAndUp}"
                    style="height:100%;"
                  >
                    <v-layout>
                      <div>
                        <v-card-text
                          class="numbers"
                          :class="{'mt-n3': $vuetify.breakpoint.xsOnly,
                                                         'mt-0': $vuetify.breakpoint.smAndUp}"
                          v-text="items.number"
                        ></v-card-text>
                      </div>
                      <div>
                        <v-card-text
                          class="flujos"
                          :class="{'mt-n2': $vuetify.breakpoint.xsOnly,
                                                         'mt-1': $vuetify.breakpoint.smAndUp}"
                          v-text="$ml.get(items.title)"
                        ></v-card-text>
                      </div>
                    </v-layout>
                  </div>
                </v-card>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
    cards: [
      {
        title: "flow",
        text: "flow_data",
        flex: 3,
        number: "01",
        class: "flujos_hover"
      },
      { title: "visa", text: "", flex: 3, number: "02", class: "visas_hover" },
      {
        title: "policy",
        text: "policiy_data",
        flex: 3,
        number: "03",
        class: "indicadores_hover"
      },
      {
        title: "agreement",
        text: "",
        flex: 3,
        number: "04",
        class: "acuerdos_hover"
      }
    ],
    borderLeft: "borders-left",
    borderRight: "borders-right",
    heroFooter: "hero-footer"
  })
};
</script>
