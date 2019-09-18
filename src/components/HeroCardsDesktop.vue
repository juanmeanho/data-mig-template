<template>
    <v-card color="transparent" height="159" flat class="mt-12 mx-auto hidden-sm-and-down" max-width="1059">
        <v-row>
            <v-layout v-for="card in cards" :key="card.title" :cols="card.flex" >
                <v-flex xs>
                    <div :class="[borderLeft, (card.text == '04') ? borderRight : '']" >
                        <v-card  color="rgba(150,150,150,0.2)" flat width="269px" height="159" class="rounded-card mt-8 py-2 px-2">
                            <div class="hero-footer" style="height:100%;">
                                <v-card-text class="numbers"
                                    v-text="card.text"
                                ></v-card-text>
                                <v-card-text class="flujos"
                                    v-text="card.title"
                                ></v-card-text>
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
