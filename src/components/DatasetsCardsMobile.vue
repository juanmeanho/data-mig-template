<template>
    <div>
        <v-layout justify-center mt-8>
            <v-flex xs10>
                <v-card class="mx-auto pa-2 hidden-md-and-up" max-width="1059" color="transparent" flat dark>
                    <v-container class="pa-2" fluid >
                        <v-card v-for="(items, i) in cards" :key="i" class="rounded-card mb-2" style="cursor:pointer;" height="123px" color="#3c78fa">
                            <v-layout>
                                <v-flex sm4>
                                    <div>
                                        <v-card-text class="numbers">{{ items.text }}
                                        </v-card-text>
                                    </div>
                                    <div>
                                        <v-card-text class="flujos">{{ items.title }}
                                        </v-card-text>
                                    </div>
                                </v-flex>
                                <v-flex sm4 hidden-xs-only>
                                    <div>
                                        <v-card-text class="desc-dataset" style="width:250px;">
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when å at its layout.
                                            The point of using Lorem Ipsum is that it has a more
                                            It is a long established.
                                        </v-card-text>
                                    </div>
                                </v-flex>
                                <v-flex sm4 hidden-xs-only>
                                    <div>
                                    <v-card-text class="download-link mt-4 mb-n5 ml-12">
                                        datos.cvs 
                                    </v-card-text>
                                </div>
                                <div>
                                    <v-card-text class="download-link mt-n2 mb-n5 ml-12">
                                    metodologia.pdf 
                                    </v-card-text>
                                </div>
                                </v-flex>
                                <v-flex hidden-xs-only>
                                    <div>
                                        <v-card-text class="download-link mt-4 mb-n5 ml-n12">
                                            <arrow-down class="ml-n4 pl-12"/>
                                        </v-card-text>
                                    </div>
                                    <div>
                                        <v-card-text class="download-link mt-n2 mb-n5 ml-n12">
                                        <arrow-down class="ml-8"/>
                                        </v-card-text>
                                </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout justify-center>
            
        </v-layout>
        <v-layout justify-center>
            
        </v-layout>
        <v-layout justify-center>
            
        </v-layout>
    </div>
</template>

<script>

export default {
  data: () => ({
    //
    cards: [
      { title: 'Flujos', text: '01', flex: 3 },
      { title: 'Visas', text: '02', flex: 3 },
      { title: 'Indicadores de Politica', text: '03', flex: 3 },
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
