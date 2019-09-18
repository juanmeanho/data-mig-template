<template>
    <v-card class="mx-auto pl-12 mt-12 hidden-sm-and-down" flat>   
        <v-container class="pa-2" fluid>
            <v-layout row wrap justify-center>
                <v-flex xs12 lg4 md12 class="ml-12">
                    <v-card flat class="mx-auto d-inline d-table-block ml-12 mt-19" width="352">
                        <v-card-text >
                            <div class="mt-12 acerca-de" >Acerca del</div>
                                <div class="display-1 proyecto">
                                    Proyecto
                                    <div class="dash-orange mt-5"></div>
                                </div>
                                <div class="proyecto-descripcion">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more. It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more..
                                </div>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 md12 lg6>
                    <div style="background-color:#ffffff;">
                        <v-img src="../assets/image-new.jpg" 
                            :class="{'size-image': $vuetify.breakpoint.lg,
                            'size-image-md': $vuetify.breakpoint.md,
                            'size-image-xs': $vuetify.breakpoint.xs}">
                        </v-img> 
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>

export default {
  data: () => ({
    //
  }),
};
</script>
