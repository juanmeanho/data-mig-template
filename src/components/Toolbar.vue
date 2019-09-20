<template>
  <v-layout row>
    <template>
      <v-flex>
        <div>
          <v-app-bar v-show="switchToolbar" color="transparent" flat dark height="154" width="100%">
            <v-card
              class="rounded-card pl-12 pt-10"
              flat
              color="rgba(255,255,255,0.1)"
              height="154"
              width="225"
            >
              <v-img height="auto" max-width="85" class="mt-4 ml-6" src="@/assets/logo-dmw-1.png"></v-img>
            </v-card>
            <v-btn
              class="hidden-sm-and-down custom-transform-class text-none"
              text
              v-text="$ml.get('initiative')"
            ></v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn
              class="hidden-sm-and-down custom-transform-class text-none grey--text text--lighten-2"
              text
              v-text="$ml.get('project')"
            ></v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn
              class="hidden-sm-and-down custom-transform-class text-none grey--text text--lighten-2"
              text
              v-text="$ml.get('datasets')"
            ></v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn
              class="hidden-sm-and-down custom-transform-class text-none grey--text text--lighten-2"
              text
              v-text="$ml.get('references')"
            ></v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn class="hidden-sm-and-down grey--text text--lighten-2" text>
              <button v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)" v-text="lang" />
            </v-btn>
            <v-btn icon class="hidden-sm-and-down">
              <v-app-bar-nav-icon @click.stop="switchToolbar = !switchToolbar"></v-app-bar-nav-icon>
            </v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-layout align-end justify-end>
              <div class="hidden-md-and-up">
                <v-menu bottom left>
                  <template v-slot:activator="{ on }">
                    <v-btn dark icon v-on="on" @>
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, i) in menu" :key="i">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-layout>
          </v-app-bar>
        </div>
        <!-- Toolbar Open-->
        <div v-show="!switchToolbar">
          <v-app-bar color="white" flat height="104" width="100%">
            <v-card
              flat
              class="rounded-card pl-12 pt-10"
              color="rgba(150,150,150,0.1)"
              height="104"
              width="225"
            >
              <v-img height="auto" max-width="104" class="mt-0" src="@/assets/group-22.png"></v-img>
            </v-card>
            <v-btn class="hidden-sm-and-down text-none ml-4 mt-2" text>
              <span class="primer-item-toolbar" v-text="$ml.get('initiative')"></span>
            </v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn class="hidden-sm-and-down custom-transform-class text-none mt-2" text>
              <span class="items-toolbar" v-text="$ml.get('project')"></span>
            </v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn class="hidden-sm-and-down custom-transform-class text-none mt-2" text>
              <span class="items-toolbar" v-text="$ml.get('datasets')"></span>
            </v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn class="hidden-sm-and-down custom-transform-class text-none mt-2" text>
              <span class="items-toolbar" v-text="$ml.get('references')"></span>
            </v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <div class="hidden-sm-and-down flex-grow-1"></div>

            <v-btn class="hidden-sm-and-down mt-2" text>
              <button v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)" v-text="lang" />
            </v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <div class="hidden-sm-and-down flex-grow-1"></div>

            <v-btn icon class="mb-1 hidden-sm-and-down">
              <span>
                <v-app-bar-nav-icon color="#147dc5" @click.stop="switchToolbar = !switchToolbar"></v-app-bar-nav-icon>
              </span>
            </v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-layout align-end justify-end>
              <div class="hidden-md-and-up">
                <v-menu bottom left>
                  <template v-slot:activator="{ on }">
                    <v-btn dark icon v-on="on" @>
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, i) in menu" :key="i">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-layout>
          </v-app-bar>

          <v-card flat color="white" height="201" class="pl-12 mb-n12">
            <v-card
              color="transparent"
              height="201"
              flat
              class="mt-0 ml-12 hidden-sm-and-down"
              max-width="945"
            >
              <v-row>
                <v-card width="154" flat></v-card>
                <v-layout row v-for="card in cards" :key="card.title" :cols="card.flex" mt-0>
                  <v-flex>
                    <div>
                      <v-card
                        style="z-index: 9999"
                        :to="{ name: card.to, params: { nu_id: card.text, text_id: card.title } }"
                        target="_blank"
                        color="white"
                        flat
                        width="201px"
                        height="201"
                        class="rounded-card mt-0 py-0 pt-0"
                      >
                        <div class="hover-tb pt-4 pl-2" style="height:100%;">
                          <div class="hover-tb">
                            <v-card-text class="numbers-tb" v-text="card.text"></v-card-text>
                            <v-card-text class="flujos-tb" v-text="card.title"></v-card-text>
                          </div>
                        </div>
                      </v-card>
                    </div>
                  </v-flex>
                </v-layout>
              </v-row>
            </v-card>
          </v-card>
        </div>
        <!-- /Toolbar Open -->
      </v-flex>
    </template>
    <template xs12>
      <v-container
        v-show="!switchToolbar"
        class="pa-2"
        fluid
        :class="{'mt-n12': $vuetify.breakpoint.mdAndUp}"
      >
        <title-hero-mobile class="mt-n8"></title-hero-mobile>
      </v-container>
    </template>
    <template xs12>
      <v-container
        v-show="switchToolbar"
        class="pa-2"
        fluid
        :class="{'mt-4': $vuetify.breakpoint.mdAndUp}"
      >
        <title-hero-mobile class="mt-2"></title-hero-mobile>
      </v-container>
    </template>
  </v-layout>
</template>

<script>
import TitleHeroMobile from "./TitleHeroMobile";

export default {
  components: {
    TitleHeroMobile
  },
  data: () => ({
    lang: ["ES", "EN"],
    switchToolbar: true,
    classHover: "numbers-tb",
    resources: null,
    cards: [
      { title: "flow", text: "flow_data", flex: 3, number: "01" },
      { title: "policy", text: "policiy_data", flex: 3, number: "02" },
      { title: "visa", text: "", flex: 3, number: "03" },
      { title: "agreement", text: "", flex: 3, number: "04" }
    ],
    menu: [
      { icon: "home", title: "Iniciativa de Migraciones" },
      { icon: "info", title: "El Proyecto" },
      { icon: "warning", title: "Datasets" },
      { icon: "warning", title: "Referencias Externas" }
    ]
  }),
  methods: {
    async getResource() {
      let resources = await axios.get(
        "http://backend.datamig.org/en/api/resource"
      );
    }
  }
};
</script>

<style>
.el-proyecto {
  width: 85px;
  height: 31px;
  opacity: 0.6;
  font-family: HindGuntur;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.94;
  letter-spacing: 0.5px;
  color: #ffffff;
}

.hover-tb:hover,
.hover-tb:hover div {
  cursor: pointer;
  background-color: #e56910;
  color: #ffffff;
  z-index: 100;
}

.primer-item-toolbar {
  width: 186px;
  height: 102px;
  opacity: 0.79;
  font-family: "Hind Guntur", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.94;
  letter-spacing: 0.5px;
  color: #121c61;
}

.items-toolbar {
  width: 85px;
  height: 102px;
  opacity: 0.6;
  font-family: "Hind Guntur", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.94;
  letter-spacing: 0.5px;
  color: #121c61;
}
</style>
