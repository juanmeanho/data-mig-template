<template>
  <v-card class="rounded-card" width="100%">
    <v-img class="white--text" height="860px" src="@/assets/hero.png">
      <!-- Toolbar -->
      <toolbar></toolbar>

      <!-- Title Hero
      <title-hero-mobile></title-hero-mobile>-->
  
      <!-- Hero cards -->
      <hero-cards-mobile></hero-cards-mobile>
      <hero-cards-desktop></hero-cards-desktop>

    </v-img>
      <!-- Acerca de --> 
      <acerca-mobile></acerca-mobile>
      <acerca-desktop></acerca-desktop>

      <!-- Datasets -->
      <v-img class="white--text mt-12" height="860px" src="@/assets/bg.png">

      <!-- Datasets title-->
      <title-datasets-desktop></title-datasets-desktop>
      <title-datasets-mobile></title-datasets-mobile>

      <!-- datasets cards -->
      <datasets-cards-mobile></datasets-cards-mobile>
      <datasets-cards-desktop></datasets-cards-desktop>
      
    </v-img>

      <!-- Card Tabs --> 
      <v-container class="pa-2 mx-auto mt-12" fluid >
        <v-row>
          <v-col>
            <div style="width:100%;position:relative;">
              <v-img width="71px" height="71px" style="margin:auto;display:block;" src="@/assets/group-109.png"></v-img>
            </div>
            <div class="display-1 proyecto mx-auto mb-4 mt-4" style="width:100%;text-align:center;">
              Referencias Externas
            </div>
            <div class="proyecto-descripcion-referencia mx-auto mt-n10" style="width:50%;text-align:center;">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more
              It is a long established fact that a reader will be.
            </div>
            <!-- tabs -->
              <div class="mt-12 mx-auto" style="width:80%;text-align:center;">
                <v-tabs height="90px" v-model="tab" class="elevation-3 pt-8"  fixed-tabs>
                  <v-tabs-slider  color="#e56910"></v-tabs-slider>
                    <v-tab   class="text-none mr-0 pr-0 pl-0 ml-n0 pl-0" active-class="#3369de" v-for="i in tabs" :key="i" 
                    :href="`#tab-${i}`" >
                      <div class="mr-0 pr-0 ml-0" > Tab {{ i }} </div>
                    </v-tab>
                      <v-tab-item  v-for="i in tabs" :key="i" :value="'tab-' + i" >
                        <v-card flat tile >
                          <template >
                            <v-list v-for="(item, index) in items" :key="index">
                              <v-divider v-if="index > 0"></v-divider>
                            <v-list-item >
                              <v-list-item-content >
                                <v-layout>
                                  <v-flex>
                                    <div class="mt-4" style="text-align:left">
                                      <span class="tabs-country">{{ item.title }}</span>-
                                      <span class="tabs-link">{{ item.link }}</span>
                                    </div>
                                  </v-flex>
                                </v-layout>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                          </template>
                        </v-card>
                      </v-tab-item>
                </v-tabs>
              </div>
            <!-- /tabs -->
          </v-col>
        </v-row>
      </v-container>
      <!-- /Card tabs --> 
      <!-- Card footer -->
        <v-row class="mt-5">
          <v-col>
              <v-card color="#F2F2F2" class="mt-12 px-12 mb-n4 rounded-card" flat>
                <v-layout row justify-center mx-0 mb-5 
                :class="{'mx-12': $vuetify.breakpoint.smAndUp,
                'mx-0': $vuetify.breakpoint.xsOnly}">
                  <v-flex lg10>
                    <v-img class="white--text mt-12 ml-12" width="101px" src="@/assets/bid.png"></v-img>
                  </v-flex>

                  <v-flex class="pl-12 md-6">
                    <v-img class="white--text mt-12" width="101px" src="@/assets/group-2-copy.png"></v-img>
                  </v-flex>
                </v-layout>
                    <div class="ml-0 pl-0" id="chip-usage-example"
                    :class="{'ml-7': $vuetify.breakpoint.smAndUp,
                            'ml-0': $vuetify.breakpoint.xsOnly ,'pl-12': $vuetify.breakpoint.smAndUp,
                            'pl-0': $vuetify.breakpoint.xsOnly}">
                      <v-chip class="ml-4 pt-1"><span class="text-chips">FLUJOS</span></v-chip>
                      <v-chip w class="ml-4 pt-1"><span class="text-chips">VISAS</span></v-chip>
                      <v-chip class="ml-4 pt-1"><span class="text-chips">INDICADORES DE POLíTICA</span></v-chip>
                      <v-chip class="ml-4 pt-1"><span class="text-chips">ACUERDOS INTERNACIONALES</span></v-chip>
                    </div>
                <v-layout >
                  <v-flex xs10>
                  <v-footer padless class="mb-12" color="#f2f2f2">
                    <v-flex xs6sm9>
                      <v-row wrap no-gutters class="ml-0 pl-0" 
                      :class="{'ml-7': $vuetify.breakpoint.smAndUp,
                            'ml-0': $vuetify.breakpoint.xsOnly ,'pl-12': $vuetify.breakpoint.smAndUp,
                            'pl-0': $vuetify.breakpoint.xsOnly}">
                        <v-btn
                          v-for="link in links"
                          :key="link"
                          color="#CCC"
                          text
                          rounded
                          class="custom-transform-class text-none my-2 ml-2">
                          {{ link }}
                        </v-btn>
                        <v-col
                          class="py-4 text-left ml-4 address"
                          cols="12"
                        >
                          1300 New York Avenue, NW Washington, DC 20577, USA ©2019 Banco Interamericano de Desarrollo, BID                        
                        </v-col>
                      </v-row>
                      </v-flex>
                    </v-footer>
                  </v-flex>
                  <v-flex sm3 ml-n6>
                    <v-layout class="ml-0 mt-6 hidden-md-and-down"
                    :class="{'ml-0': $vuetify.breakpoint.mdAndUp,
                              'pl-6': $vuetify.breakpoint.mdAndUp,
                            'ml-n6': $vuetify.breakpoint.xsOnly}">
                      <v-flex class=" ml-12 pl-6">
                        <v-img  src="@/assets/group-8.png" width="48px" height="48px"></v-img>
                      </v-flex>
                      <v-flex class="mr-12 ml-n4">
                        <v-img src="@/assets/group-7.png" class="ml-0 mr-0" width="48px" height="48px"></v-img>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-card>
          </v-col>
        </v-row>
      <!-- /Card Footer -->
  </v-card>
</template>


<script>

import Toolbar from './Toolbar';
//import TitleHeroMobile from './TitleHeroMobile';
//import TitleHeroDesktop from './TitleHeroDesktop';
import HeroCardsMobile from './HeroCardsMobile';
import HeroCardsDesktop from './HeroCardsDesktop';
import AcercaDesktop from './AcercaDesktop';
import AcercaMobile from './AcercaMobile';
import TitleDatasetsDesktop from './TitleDatasetsDesktop';
import TitleDatasetsMobile from './TitleDatasetsMobile';
import DatasetsCardsMobile from './DatasetsCardsMobile';
import DatasetsCardsDesktop from './DatasetsCardsDesktop';



export default {
  components: {
    Toolbar,
    //TitleHeroMobile,
    //TitleHeroDesktop,
    HeroCardsMobile,
    HeroCardsDesktop,
    AcercaDesktop,
    AcercaMobile,
    TitleDatasetsDesktop,
    TitleDatasetsMobile,
    DatasetsCardsMobile,
    DatasetsCardsDesktop
    
  },
  data: () => ({
    show: false,
    datasets: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 }
    ],
      tab: null,
      text: 'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tabs: 4,
      items: [
        { title: 'Argentina ', link: 'Instituto Nacional de Estadísticas y Censos (INDEC)' },
        { title: 'Bahamas ', link: 'Dept. of Statistics' },
        { title: 'Barbados ', link: 'Barbados Statistical Service, Ministry of Finance' },
        { title: 'Belice ', link: 'Statistical Institute of Belize' },
        { title: 'Brasil ', link: 'Ministério do Desenvolvimento, Indústria e Comércio Exterior de Brasil' },
        { title: 'Bolivia ', link: 'Instituto Nacional de Estadística' },
        { title: 'Chile ', link: 'Servicio Nacional de Aduanas' },
        { title: 'Colombia ', link: 'Departamento Administrativo Nacional de Estadísticas (DANE)' },
        { title: 'Costa Rica ', link: 'Instituto Nacional de Estadística' },
      ],
    links: [
      'DATAMIG',
      'El Proyecto',
      'Datasets',
      'Referencias Externas',
    ],
  }),
};
</script>


<style>

.tab-active {
  width: 44px;
  height: 37px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #3369de;
}

.address {
  width: 623px;
  height: 1px;
  font-family: Gotham;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.12px;
  color: #9092a5;
}

.text-chips {
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.64;
  letter-spacing: normal;
  color: #0c1147;
} 
#chip-usage-example .v-chip {
  margin: 8px;
}

.tabs-country {
  width: 539px;
  height: 37px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #3369de;
}
.tabs-link {
  width: 539px;
  height: 37px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #e56910;
}

.dash-download {
  border-top: 0.5px solid;
  width: 170px;
  color: #3369de;
}
.download-link{
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #f05a23;
}

.desc-dataset {
  width: 185px;
  height: 192px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #3369de;
}

.mini-dataset {
  width: 107px;
  height: 33px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3369de;
}

.datasets-description {
  height: 100px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #ffffff;
}

.datasets {
  height: 105px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 56px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.54px;
  color: #ffffff;
}

.proyecto-descripcion-referencias {
  width: 100%;
  height: 104px;
  font-family: HindGuntur;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  color: #80829b;
}

.proyecto-descripcion {
  height: 325px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #121c61;
}

.dash-orange {
  border-top: solid #e56910;
  width: 35px;
}

.dash-blue {
  border-top: solid #3c78fa;
  width: 35px;
}

.proyecto {
  width: 210px;
  height: 105px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 56px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.54px;
  color: #e56910;
}

.acerca-de {
  width: 108px;
  height: 36px;
  opacity: 0.45;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.23px;
  color: #e56910;
}

.flujos {
  height: 31px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #ffffff;
}

 .numbers{
  height: 31px;
  opacity: 0.5;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.21;
  letter-spacing: normal;
  color: #ffffff;
}

 .numbers-tb{
  height: 31px;
  opacity: 0.5;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.21;
  letter-spacing: normal;
  color: #3369de;
}

.flujos-dataset {
  height: 31px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #3369de;
}

.flujos-tb {
  height: 31px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #3369de;
}

 .numbers-dataset{
  height: 31px;
  opacity: 0.5;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.21;
  letter-spacing: normal;
  color: #3369de;
}

.rounded-card{
    border-radius:0px;
}

.data-mig {
  height: 1px;
  font-family: 'Raleway', sans-serif;
  font-size: 126px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 2px;
  color: #ffffff;
}

.data-mig-capital {
  height: 1px;
  font-family: 'Raleway', sans-serif;
  font-size: 126px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.93px;
  color: #ffffff;
}

.data-mig-xs {
  height: 1px;
  font-family: 'Raleway', sans-serif;
  font-size: 76px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.93px;
  color: #ffffff;
}


.text-hero-right {
  height: 90px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  text-align: center;
}

.text-datasets-right {
  height: 90px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  text-align: left;
}

.text-hero-xs {
  width: 300px;
  height: 90px;
  font-family: 'Hind Guntur', sans-serif;  
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: normal;
  color: #ffffff;
}

.dash {
  border-top-style: solid;
  width: 30px;
}

.borders-left {
  border-left: 0.1px solid #ccc;
}

.borders-right {
  border-right:  0.1px solid #ccc;
}

.hero-footer:hover{
  cursor: pointer;
  background-color: #e56910;
}

.flujos_hover:hover{
  cursor: pointer;
  background-image: url("../assets/flujos_hover.svg");
}

.visas_hover:hover{
  cursor: pointer;
  background-image: url("../assets/visas_hover.svg");
}

.acuerdos_hover:hover{
  cursor: pointer;
  background-image: url("../assets/acuerdos_hover.svg");
}

.indicadores_hover:hover{
  cursor: pointer;
  background-image: url("../assets/indicadores_hover.svg");
}

</style>
