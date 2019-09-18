<template>
    <div>
        <v-layout justify-center>
            <v-flex xs10 sm6>
                <v-card v-for="(items, i) in cards" :key="i" color="transparent" height="30" flat class="mt-12 hidden-md-and-up"
                    >
                    <v-layout justify-center>
                        <v-flex>
                            <div class="borders-left borders-right">
                                <v-card  color="rgba(150,150,150,0.2)" flat height="70" class="rounded-card mt-12 px-2">
                                    <div class="hero-footer" style="height:100%;">
                                        <v-layout>
                                            <div>
                                                <v-card-text class="numbers" 
                                                :class="{'mt-2': $vuetify.breakpoint.smAndUp,
                                                'mt-0': $vuetify.breakpoint.xsOnly}">
                                                {{ items.text }}
                                                </v-card-text>
                                            </div>
                                            <div>
                                                <v-card-text class="flujos mt-0"
                                                :class="{'mt-2': $vuetify.breakpoint.smAndUp,
                                                'mt-n1': $vuetify.breakpoint.xsOnly}">
                                                {{ items.title }}
                                                </v-card-text>
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
      { title: 'Flujos', text: '01', flex: 3 },
      { title: 'Visas', text: '02', flex: 3 },
      { title: 'Indicadores de Politica', text: '03', flex: 3 },
      { title: 'Acuerdos Internacionales', text: '04', flex: 3 }
    ],
        borderLeft: 'borders-left',
        borderRight: 'borders-right',
        heroFooter: 'hero-footer',
  }),
};
</script>
