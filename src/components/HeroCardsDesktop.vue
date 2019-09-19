<template>
    <v-card color="transparent" height="159" flat class="mt-2 mx-auto hidden-sm-and-down" max-width="1059">
        <v-row>
            <v-layout v-for="card in cards" :key="card.title" :cols="card.flex" mt-12>
                <v-flex xs>
                    <div :class="[borderLeft, (card.text == '04') ? borderRight : '']" >
                        <v-card :to="{ name: 'Dashboard', params: { nu_id: card.text, text_id: card.title } }" target="_blank" color="rgba(150,150,150,0.2)" flat width="269px" height="200" class="rounded-card mt-8 py-2 px-2">
                            <div :class="card.class" style="height:100%;">
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
      { title: 'Indicadores de Politica', text: '01', flex: 3, class: 'indicadores_hover' },
      { title: 'Flujos', text: '02', flex: 3, class: 'flujos_hover' },
      { title: 'Visas', text: '03', flex: 3, class: 'visas_hover' },
      { title: 'Acuerdos Internacionales', text: '04', flex: 3, class: 'acuerdos_hover' }
    ],
        borderLeft: 'borders-left',
        borderRight: 'borders-right',
        heroFooter: 'hero-footer',
  }),
};
</script>
