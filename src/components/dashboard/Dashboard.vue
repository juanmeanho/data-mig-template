<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped >
      <v-card class="mx-auto" color="#ffffff" flat max-width="250" >
        <v-card-title class="indicators mb-8">Indicators</v-card-title>
        <v-list-item v-for="(item, i) in indicators" :key="i">
          <v-list-item-icon class="mt-n2">
            <v-icon :color="item.color">mdi-brightness-1</v-icon>
          </v-list-item-icon>
          <div class="mt-n4 indicators-text">{{ item.text }}
          </div>
        </v-list-item>
      </v-card>

      <v-card class="mx-auto" color="#ffffff" flat max-width="250" >
        <v-card-title class="indicators mt-n6">Description</v-card-title>
        <v-card-title class="card-title mt-1">Visa de Turista</v-card-title>
        <v-card-text class="card-content mt-3">There are many variations of passages of 
          Lorem Ipsum available, but the majority have suffered alteration in some form, by 
          injected humour, or randomised words which don't look even slightly believable.
        </v-card-text>
      </v-card>

      <div style="width:230px;">
        <v-slider
          v-model="ex3.val"
          :thumb-color="ex3.color"
          thumb-label="always"
          min="2000" 
          max="2019"
        ></v-slider>
        <div class="text-center">
            <v-btn class="ml-1" width="215px" tile color="#f05a23" dark>Reset</v-btn>
        </div>
        <div class="mt-12 ml-4">
          <v-img src="@/assets/bid.png" width="85px" height="auto"></v-img>
        </div>

      </div>

    </v-navigation-drawer>

    <v-app-bar app clipped-left height="104px">
      <div class="logo hidden-sm-and-down" >
          <img src="@/assets/logo-dm-1.png" class="ml-4 mt-4"> 
      </div>
      <div class="item-bar" :class="{'mr-6': $vuetify.breakpoint.smAndDown,'mr-12': $vuetify.breakpoint.mdAndUp}">
        <div class="numbers" :class="{'mt-n4': $vuetify.breakpoint.xsOnly,'mt-n3': $vuetify.breakpoint.smAndUp}">
            {{ nu_id }}
        </div>
        <div class="flujos" :class="{'mt-n2': $vuetify.breakpoint.xsOnly, 'mt-n1': $vuetify.breakpoint.smAndUp}">
            {{ text_id }}
            
        </div>
      </div>
      <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
      <div class="visa-de-turista">Visa de Turista</div>

      <div class="flex-grow-1"></div>

      <div class="end-bar hidden-sm-and-down" >
        <v-btn style="color:#3b4cc3" text>ES-EN</v-btn> 
        <v-btn icon>
          <v-app-bar-nav-icon style="color:#3b4cc3"></v-app-bar-nav-icon>
        </v-btn>     
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <!-- Mapa -->
        <v-layout align-center justify-center >
          <v-flex shrink>
            Mapa
          </v-flex>
        </v-layout>
        <!-- /Mapa -->
      </v-container>
    </v-content>
  </div>
</template>

<script>
//import Toolbar from '../Toolbar';

export default {
  components: {
    //Toolbar
  },
  created() {
    this.nu_id = this.$route.params.nu_id;
    this.text_id = this.$route.params.text_id;
  },
  data: () => ({
    //
    indicators: [
      { text: "No quota or only Narrow Sectors", color: "success" },
      { text: "One Third or more", color: "primary" },
      { text: "11%-20%", color: "red" },
      { text: "10% or less", color: "teal accent-3" }
    ],
    drawer: null,
    ex3: { val: 2004, color: 'primary' },
    
  }),
};
</script>
    
<style scoped>
  .logo{
    background-color:rgba(150,150,150,0.07);
    height:inherit;
    padding:20px;
    width:147px;
  }

  .end-bar{
    background-color:rgba(150,150,150,0.07);
    height:inherit;
    padding:25px;
    width:193px;
  }

  .item-bar{
    background-color:#3369de;
    height:inherit;
    padding:20px;
    width:229px;
  }

  .visa-de-turista {  
    font-family: 'Hind Guntur', sans-serif;  
    font-size: 24px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #3369de;
  }

.indicators {
  height: 22px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3369de;
}

.indicators-text{
  width: 147px;
  height: 36px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: -0.1px;
  color: #727384;
}

.card-title {
  height: 36px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 19px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #727384;
}

.card-content {
  width: 230px;
  height: 169px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: -0.1px;
  color: #979797;
}
</style>
