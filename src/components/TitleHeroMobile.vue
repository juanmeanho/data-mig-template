<template>
    <v-layout class="hidden-md-and-up">
        <template xs12>
            <v-container class="pa-2" fluid >
                <v-layout row align-center>
                    <template>
                        <v-flex>
                            <v-layout justify-center>
                                <v-card flat color="transparent" class="rounded-card mb-4">
                                    <v-card-title class="data-mig" :class="{'data-mig-xs': $vuetify.breakpoint.xs}">
                                        <div>DataMig</div>
                                    </v-card-title>
                                </v-card>
                            </v-layout>
                        </v-flex>
                    </template>
                    <template >
                        <v-flex xs1 class="hidden-md-and-down">
                            <v-card flat color="transparent" class="rounded-card">
                                <v-card-title class="text-hero-right" >
                                    <div class="dash ml-12 mt-12 mb-n10"></div>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                    </template>
                    <template>
                        <v-flex xs12>
                            <v-layout justify-center>
                                <v-card flat color="transparent" class="rounded-card mt-12">
                                    <v-card-title class="text-hero-right" :class="{'text-hero-xs': $vuetify.breakpoint.xs}">
                                        <v-flex mt-5>
                                            <div>
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more.</div>
                                        </v-flex>  
                                    </v-card-title>
                                </v-card>
                            </v-layout>
                        </v-flex>
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
