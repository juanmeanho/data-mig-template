<template>
  <v-card
    color="transparent"
    height="159"
    flat
    class="mt-2 mx-auto hidden-sm-and-down"
    max-width="1059"
  >
    <v-row>
      <v-layout v-for="card in cards" :key="card.title" :cols="card.flex" mt-12>
        <v-flex xs>
          <div :class="[borderLeft, (card.text == '04') ? borderRight : '']">
            <v-card
              :to="{ name: 'Dashboard', params: { nu_id: card.text, text_id: card.title } }"
              target="_blank"
              color="rgba(0,0,0,0.2)"
              flat
              width="269px"
              height="200"
              class="rounded-card mt-8 py-2 px-2"
            >
              <div :class="card.class" style="height:100%;">
                <v-card-text class="numbers" v-text="card.number"></v-card-text>
                <v-card-text class="flujos" v-text="$ml.get(card.title)"></v-card-text>
              </div>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-row>
  </v-card>
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
