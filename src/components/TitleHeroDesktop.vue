<template>
    <v-layout row class="mt-12 pt-12 hidden-sm-and-down">
        <template xs5 md6>
          <v-container class="pa-2 mb-12" fluid >
            <v-layout row align-center mb-12>
                <template>
                    <v-flex>
                        <v-layout justify-end>
                            <v-card flat color="transparent" class="rounded-card">
                                <v-card-title class="data-mig">
                                    <div>DataMig</div>
                                </v-card-title>
                            </v-card>
                        </v-layout>
                    </v-flex>
                </template>
                <template >
                    <v-flex xs1 class="hidden-md-and-down">
                        <v-card flat color="transparent" class="rounded-card ">
                            <v-card-title class="text-hero-right">
                                    <div class="dash ml-12 mt-12 mb-n9 pt-n12"></div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </template>
                <template>
                    <v-flex xs5>
                        <v-layout justify-start>
                            <v-card flat color="transparent" class="ml-n5 rounded-card">
                                <v-card-title class="text-hero-right">
                                    <v-flex mt-5>
                                        <div class="mt-12 mr-12">
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
