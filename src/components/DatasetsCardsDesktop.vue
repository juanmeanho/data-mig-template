<template>
  <v-card class="mx-auto pa-2 hidden-sm-and-down" max-width="1059" color="transparent" flat dark>
    <v-container class="pa-2" fluid>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card class="rounded-card pa-6" style="cursor:pointer;" height="423px" color="#ffffff">
            <div>
              <v-card-text class="numbers-dataset" v-text="card.number"></v-card-text>
            </div>
            <div>
              <v-card-text class="flujos-dataset" v-text="$ml.get(card.title)"></v-card-text>
            </div>

            <div>
              <v-card-text class="mt-6 mini-dataset" v-text="$ml.get('datasets')"></v-card-text>
            </div>
            <div>
              <v-card-text class="mt-2 desc-dataset" v-text="$ml.get(card.text)"></v-card-text>
            </div>
            <div style="background-color:#ccc;width:100%">
              <div class="download-link" style="width:80%;float:left">datos.cvs</div>
              <div class="download-link" style="width:20%;float:left">
                <arrow-down />
              </div>
            </div>
            <div class="dash-download mt-6"></div>
            <div style="background-color:#ccc;width:100%" class="mt-2">
              <div class="download-link" style="width:80%;float:left">metodologia.pdf</div>
              <div class="download-link" style="width:20%;float:left">
                <arrow-down />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //
    cards: [
      { title: "flow", text: "flow_data", flex: 3, number: "01" },
      { title: "policy", text: "policiy_data", flex: 3, number: "02" },
      { title: "visa", text: "", flex: 3, number: "03" },
      { title: "agreement", text: "", flex: 3, number: "04" }
    ]
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
