<template>
  <v-layout row class="hidden-sm-and-down">
    <template>
      <v-container class="pa-2" fluid>
        <v-layout row>
          <template>
            <v-flex md6>
              <v-card flat color=" transparent" class="ml-12 pt-12 rounded-card">
                <v-img class="white--text ml-12" height="200px">
                  <v-card-title class="pl-12 ml-12 fill-height align-end data-mig">
                    <div class="datasets">
                      <p v-text="$ml.get('datasets')" />
                      <div class="dash-blue mt-n4"></div>
                    </div>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-flex>
          </template>

          <template>
            <v-flex md6>
              <v-card flat color="transparent" class="rounded-card ml-6">
                <v-img class="white--text mt-1 ml-12" height="200px">
                  <v-card-title
                    class="ml-12 mt-12 fill-height align-end justify-left text-hero-right"
                  >
                    <v-layout>
                      <v-flex>
                        <div class="mt-8 ml-5 datasets-description">
                          <p v-text="$ml.get('datasets_desc')" />
                        </div>
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
  })
};
</script>
