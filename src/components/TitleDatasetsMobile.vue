<template>
    <v-layout class="hidden-md-and-up">
        <template xs12>
            <v-container class="pa-2" fluid >
                <v-layout row align-center>
                    <template>
                        <v-flex xs12>
                            <v-layout justify-center>
                                <v-card flat color=" transparent" class="rounded-card">
                                    <v-img class="white--text " height="100px">
                                        <v-card-title class="data-mig">
                                            <div class="datasets">
                                                Datasets
                                            </div>
                                        </v-card-title>
                                    </v-img>
                                </v-card>
                            </v-layout>
                        </v-flex>
                    </template>

                    <template>
                            <v-layout justify-center>
                                <v-card flat color="transparent" class="rounded-card">
                                        <v-card-title class="text-hero-right">
                                            <v-layout justify-center>
                                                <v-flex xs10>
                                                    <div class="datasets-description"
                                                    :class="{'width-text-md': $vuetify.breakpoint.smAndUp,
                                                    'width-text-xs': $vuetify.breakpoint.xsOnly}">
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                                        The point of using Lorem Ipsum is that it has a  
                                                        It is a long established fact that a reader will be.
                                                    </div>
                                                </v-flex>  
                                            </v-layout> 
                                        </v-card-title>
                                </v-card>
                            </v-layout>
                    </template>
                </v-layout>
            </v-container>
        </template>
    </v-layout>
</template>

<script>

export default {
  data: () => ({
    //
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
