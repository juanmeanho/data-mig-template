<template>
      <v-layout row class="hidden-sm-and-down mb-12">
        <template>
          <v-container class="pa-2" fluid >
            <v-layout row>
              <template>
                <v-flex lg6>
                  <v-card flat color=" transparent" class="ml-9 pt-12 rounded-card">
                      <v-card-title class="pl-12 ml-12 fill-height  align-end data-mig">
                        <div class="datasets ml-12 pl-10">Datasets
                        </div>
                      </v-card-title>
                  </v-card>
                </v-flex>
              </template>

              <template>
                <v-flex lg6>
                  <v-card flat color="transparent" class="rounded-card ml-12" width="80%">
                    <v-img  class="white--text mt-1" height="200px">
                      <v-card-title class="ml-0 mr-12 mt-12 fill-height align-end justify-left text-datasets-right">
                        <v-layout>
                          <v-flex>
                            <div class="mt-8 ml-8 mr-12 datasets-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
The point of using Lorem Ipsum is that it has a  
It is a long established fact that a reader will be.</div>
                          </v-flex>  
                        </v-layout> 
                      </v-card-title>
                    </v-img>
                  </v-card>
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
