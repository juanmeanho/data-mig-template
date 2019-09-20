<template>
  <v-layout row>
    <template>
      <v-flex>
        <div>
          <!-- Hover toolbar effect <v-app-bar 
                fixed  
                class="mb-12" 
                color="transparent" 
                elevate-on-scroll="true" 
                dark 
                height="154" 
                width="100%"
          >-->
          <v-app-bar color="transparent" flat dark height="154" width="100%">
            <v-card
              class="rounded-card pl-12 pt-10"
              color="rgba(255,255,255,0.2)"
              height="154"
              width="225"
              outlined="false"
            >
              <v-img max-height="57" max-width="130" class="mt-2" src="@/assets/logo-dmw-1.png"></v-img>
            </v-card>
            <v-btn
              class="hidden-sm-and-down custom-transform-class text-none"
              text
              v-text="$ml.get('initiative')"
            ></v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn
              class="hidden-sm-and-down custom-transform-class text-none white--text text--lighten-1"
              text
              v-text="$ml.get('project')"
            ></v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn
              class="hidden-sm-and-down custom-transform-class text-none white--text text--lighten-1"
              text
              v-text="$ml.get('datasets')"
            ></v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn
              class="hidden-sm-and-down custom-transform-class text-none white--text text--lighten-1"
              text
              v-text="$ml.get('references')"
            ></v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-btn class="hidden-sm-and-down white--text text--lighten-1" text>
              <button v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)" v-text="lang" />
            </v-btn>
            <v-btn icon class="hidden-sm-and-down">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
            <div class="hidden-sm-and-down flex-grow-1"></div>
            <v-layout align-end justify-end>
              <div class="hidden-md-and-up">
                <v-menu bottom left>
                  <template v-slot:activator="{ on }">
                    <v-btn dark icon v-on="on">
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
      </v-flex>
    </template>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    lang: ["ES", "EN"],
    menu: [
      { icon: "home", title: "Iniciativa de Migraciones" },
      { icon: "info", title: "El Proyecto" },
      { icon: "warning", title: "Datasets" },
      { icon: "warning", title: "Referencias Externas" }
    ]
  })
};
</script>
