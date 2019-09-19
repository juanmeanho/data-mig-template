<template>
    <v-card class="mx-auto pa-2 hidden-sm-and-down" max-width="1059" color="transparent" flat dark>
        <v-container class="pa-2" fluid >
          <v-row>
            <v-col
              v-for="card in cards" :key="card.title" :cols="card.flex"
            >
              <v-card class="rounded-card pa-6" style="cursor:pointer;" height="423px" color="#ffffff">
                <div><v-card-text class="numbers-dataset"
                  v-text="card.text"
                ></v-card-text></div>
                <div><v-card-text class="flujos-dataset"
                  v-text="card.title"
                ></v-card-text></div>
                
                <div><v-card-text class="mt-6 mini-dataset"
                  >Dataset</v-card-text></div>
                <div><v-card-text class="mt-2 desc-dataset"
                      >It is a long established fact that a reader will be distracted
                      by the readable content of a page when å at its layout.
                      The point of using Lorem Ipsum is that it has a more
                      It is a long established.</v-card-text></div>
                <div><v-card-text class="download-link mt-n6 mb-n5">
                  datos.cvs 
                  <arrow-down class="ml-12 pl-12"/>
                </v-card-text></div>
                <div class="dash-download mt-2 ml-4"></div>
                <div><v-card-text class="download-link mt-n2 mb-n5">
                  metodologia.pdf 
                <arrow-down class="ml-2 pt-n2 pl-12"/>
                </v-card-text></div>
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
      { title: 'Indicadores de Politica', text: '03', flex: 3 },
      { title: 'Flujos', text: '01', flex: 3 },
      { title: 'Visas', text: '02', flex: 3 },
      { title: 'Acuerdos Internacionales', text: '04', flex: 3 }
    ],
  }),
};
</script>
    
<style>
.width-text-xs{
    width:240px;
}

.width-text-md{
    width:350px;
}
</style>
