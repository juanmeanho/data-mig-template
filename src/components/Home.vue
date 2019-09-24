<template>
  <v-card class="rounded-card" width="100%">
    <v-img class="white--text" height="860px" src="@/assets/hero.png">
      <!-- Toolbar -->
      <toolbar></toolbar>

      <!-- Hero cards -->
      <sections-cards-mobile></sections-cards-mobile>
      <sections-cards-desktop></sections-cards-desktop>
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
    <v-container class="pa-2 mx-auto mt-12" fluid id="references">
      <v-row>
        <v-col>
          <div style="width:100%;position:relative;">
            <v-img
              width="71px"
              height="71px"
              style="margin:auto;display:block;"
              src="@/assets/group-109.png"
            ></v-img>
          </div>
          <div
            class="display-1 proyecto mx-auto mb-4 mt-4"
            style="width:100%;text-align:center;"
            v-text="$ml.get('references')"
          ></div>
          <div
            class="proyecto-descripcion-referencia mx-auto mt-n10"
            style="width:50%;text-align:center;"
            v-text="$ml.get('references_desc')"
          ></div>
          <!-- tabs -->
          <div class="mt-12 mx-auto" style="width:80%;text-align:center;">
            <v-tabs height="90px" v-model="tab" class="elevation-3 pt-8" fixed-tabs>
              <v-tabs-slider color="#e56910"></v-tabs-slider>
              <v-tab
                class="text-none mr-0 pr-0 pl-0 ml-n0 pl-0"
                active-class="#147dc5"
                v-for="i in tabs"
                :key="i"
                :href="`#tab-${i}`"
              >
                <div class="mr-0 pr-0 ml-0" v-text="$ml.get('migration_tab')"></div>
              </v-tab>
              <v-tab-item v-for="i in tabs" :key="i" :value="'tab-' + i">
                <v-card flat tile>
                  <template>
                    <v-list v-for="(item, index) in resources" :key="index">
                      <v-divider v-if="index > 0"></v-divider>
                      <v-list-item>
                        <v-list-item-content>
                          <v-layout>
                            <v-flex>
                              <div class="mt-4" style="text-align:left">
                                <span class="tabs-country">{{ item.institution.title_en }}</span> -
                                <a
                                  class="tabs-link"
                                  target="_blank"
                                  :href="item.url_en"
                                >{{ item.title_en }}</a>
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
          <v-layout
            row
            justify-center
            mx-0
            mb-5
            :class="{'mx-12': $vuetify.breakpoint.smAndUp,
                'mx-0': $vuetify.breakpoint.xsOnly}"
          >
            <v-flex lg10>
              <v-img class="white--text mt-12 ml-12" width="101px" src="@/assets/bid.png"></v-img>
            </v-flex>

            <v-flex class="pl-12 md-6">
              <v-img class="white--text mt-12" width="101px" src="@/assets/group-2-copy.png"></v-img>
            </v-flex>
          </v-layout>
          <!-- <div
            class="ml-0 pl-0"
            id="chip-usage-example"
            :class="{'ml-7': $vuetify.breakpoint.smAndUp,
                            'ml-0': $vuetify.breakpoint.xsOnly ,'pl-12': $vuetify.breakpoint.smAndUp,
                            'pl-0': $vuetify.breakpoint.xsOnly}"
          >
            <v-chip
              color="rgba(20, 125, 197, 0.18)"
              class="ml-4 pt-1"
              v-for="card in cards"
              :key="card.title"
              :cols="card.flex"
            >
              <span class="text-chips" v-text="$ml.get(card.title)"></span>
            </v-chip>
          </div>-->
          <v-layout>
            <v-flex xs10>
              <v-footer padless class="mb-12" color="#f2f2f2">
                <v-flex xs6sm9>
                  <v-row
                    wrap
                    no-gutters
                    class="ml-0 pl-0"
                    :class="{'ml-7': $vuetify.breakpoint.smAndUp,
                            'ml-0': $vuetify.breakpoint.xsOnly ,'pl-12': $vuetify.breakpoint.smAndUp,
                            'pl-0': $vuetify.breakpoint.xsOnly}"
                  >
                    <!--<v-btn
                      v-for="section in sections"
                      :key="section.link"
                      color="#CCC"
                      text
                      rounded
                      class="custom-transform-class text-none my-2 ml-2"
                      v-text="$ml.get(section.link)"
                      @click="() => this.$vuetify.goTo(section.section)"
                    ></v-btn>-->
                    <v-col
                      class="py-4 text-left ml-4 address"
                      cols="12"
                    >1300 New York Avenue, NW Washington, DC 20577, USA ©2019 Banco Interamericano de Desarrollo, BID</v-col>
                  </v-row>
                </v-flex>
              </v-footer>
            </v-flex>
            <v-flex sm3 ml-n6>
              <v-layout
                class="ml-0 mt-6 hidden-md-and-down"
                :class="{'ml-0': $vuetify.breakpoint.mdAndUp,
                              'pl-6': $vuetify.breakpoint.mdAndUp,
                            'ml-n6': $vuetify.breakpoint.xsOnly}"
              >
                <!-- <v-flex class="ml-12 pl-6">
                  <v-img src="@/assets/group-8.png" width="48px" height="48px"></v-img>
                </v-flex>
                <v-flex class="mr-12 ml-n4">
                  <v-img src="@/assets/group-7.png" class="ml-0 mr-0" width="48px" height="48px"></v-img>
                </v-flex>-->
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
import Toolbar from "./Toolbar";
import axios from "axios";
import DatamigLogoMobile from "./DatamigLogoMobile";
import DatamigLogoDesktop from "./DatamigLogoDesktop";
import SectionsCardsMobile from "./SectionsCardsMobile";
import SectionsCardsDesktop from "./SectionsCardsDesktop";
import AcercaDesktop from "./AcercaDesktop";
import AcercaMobile from "./AcercaMobile";
import TitleDatasetsDesktop from "./TitleDatasetsDesktop";
import TitleDatasetsMobile from "./TitleDatasetsMobile";
import DatasetsCardsMobile from "./DatasetsCardsMobile";
import DatasetsCardsDesktop from "./DatasetsCardsDesktop";

export default {
  components: {
    Toolbar,
    DatamigLogoMobile,
    DatamigLogoDesktop,
    SectionsCardsMobile,
    SectionsCardsDesktop,
    AcercaDesktop,
    AcercaMobile,
    TitleDatasetsDesktop,
    TitleDatasetsMobile,
    DatasetsCardsMobile,
    DatasetsCardsDesktop
  },
  data: () => ({
    cards: [
      {
        title: "flow",
        text: "flow_data",
        flex: 3,
        number: "01",
        class: "flujos_hover"
      },
      {
        title: "policy",
        text: "policiy_data",
        flex: 3,
        number: "03",
        class: "indicadores_hover"
      },
      { title: "visa", text: "", flex: 3, number: "02", class: "visas_hover" },
      {
        title: "agreement",
        text: "",
        flex: 3,
        number: "04",
        class: "acuerdos_hover"
      }
    ],
    show: false,
    tab: null,
    tabs: 1,
    sections: [
      { link: "datamig", section: "http://iadb.org" },
      { link: "project", section: "#project" },
      { link: "datasets", section: "#datasets" },
      { link: "references", section: "#references" }
    ],
    resources: null
  }),
  methods: {
    async getResource() {
      let resource = await axios.get(
        "//8r1uaedksb.execute-api.us-east-1.amazonaws.com/api/resource"
      );
      //let resource = await axios.get("//backend.datamig.org/en/api/resource");
      this.resources = await resource.data.data;
    }
  },
  created() {
    this.getResource();
  }
};
</script>

<style>
.tab-active {
  width: 44px;
  height: 37px;
  font-family: "Hind Guntur", sans-serif;
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #147dc5;
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
  font-family: "Hind Guntur", sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.64;
  letter-spacing: normal;
  color: #147dc5;
}
#chip-usage-example .v-chip {
  margin: 8px;
}

.tabs-country {
  width: 539px;
  height: 37px;
  font-family: "Hind Guntur", sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #147dc5;
}
.tabs-link {
  width: 539px;
  height: 37px;
  font-family: "Hind Guntur", sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #e56910 !important;
}

.dash-download {
  border-top: 0.5px solid;
  width: 170px;
  color: #147dc5;
}
.download-link {
  font-family: "Hind Guntur", sans-serif;
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
  font-family: "Hind Guntur", sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #147dc5;
}

.mini-dataset {
  width: 107px;
  height: 33px;
  font-family: "Hind Guntur", sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #147dc5;
}

.datasets-description {
  height: 100px;
  font-family: "Hind Guntur", sans-serif;
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
  font-family: "Hind Guntur", sans-serif;
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
  font-family: "Hind Guntur", sans-serif;
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
  font-family: "Hind Guntur", sans-serif;
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
  font-family: "Hind Guntur", sans-serif;
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
  font-family: "Hind Guntur", sans-serif;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #ffffff;
}

.numbers {
  height: 31px;
  opacity: 0.5;
  font-family: "Hind Guntur", sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.21;
  letter-spacing: normal;
  color: #ffffff;
}

.numbers-tb {
  height: 31px;
  opacity: 0.5;
  font-family: "Hind Guntur", sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.21;
  letter-spacing: normal;
  color: #147dc5;
}

.flujos-dataset {
  height: 31px;
  font-family: "Hind Guntur", sans-serif;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #147dc5;
}

.flujos-tb {
  height: 31px;
  font-family: "Hind Guntur", sans-serif;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #147dc5;
}

.numbers-dataset {
  height: 31px;
  opacity: 0.5;
  font-family: "Hind Guntur", sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.21;
  letter-spacing: normal;
  color: #147dc5;
}

.rounded-card {
  border-radius: 0px;
}

.data-mig {
  height: 1px;
  font-family: "Raleway", sans-serif;
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
  font-family: "Raleway", sans-serif;
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
  font-family: "Raleway", sans-serif;
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
  font-family: "Hind Guntur", sans-serif;
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
  font-family: "Hind Guntur", sans-serif;
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
  font-family: "Hind Guntur", sans-serif;
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
  border-right: 0.1px solid #ccc;
}

.hero-footer:hover {
  cursor: pointer;
  background-color: #e56910;
}

.flujos_hover:hover {
  cursor: pointer;
  background-image: url("../assets/flujos_hover.svg");
}

.visas_hover:hover {
  cursor: pointer;
  background-image: url("../assets/visas_hover.svg");
}

.acuerdos_hover:hover {
  cursor: pointer;
  background-image: url("../assets/acuerdos_hover.svg");
}

.indicadores_hover:hover {
  cursor: pointer;
  background-image: url("../assets/indicadores_hover.svg");
}
</style>
