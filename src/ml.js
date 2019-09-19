import Vue from "vue";
import { MLInstaller, MLCreate, MLanguage } from "vue-multilanguage";

Vue.use(MLInstaller);

export default new MLCreate({
  initial: "ENG",
  save: process.env.NODE_ENV === "production",
  languages: [
    new MLanguage("ENG").create({
      datamig: "DataMIG",
      datamig_desc: "Short description about migration initiative",
      initiative: "Migration Initiative",
      about: "About",
      project: "Project",
      project_desc: "Description about project",
      datasets: "Datasets",
      datasets_desc: "Description about Datasets",
      references: "External References",
      references_desc: "Description about external references"
    }),

    new MLanguage("-ESP").create({
      datamig: "DataMIG",
      datamig_desc: "Descripción corta sobre la iniciativa de migracion",
      initiative: "Iniciativa de Migracion",
      about: "Acerca del",
      project: "Proyecto",
      project_desc: "Descripción del proyecto",
      datasets: "Set de datos",
      datasets_desc: "Descripción de los datasets",
      references: "Referencias Externas",
      references_desc: "Descripción de las Referencias Externas"
    })
  ]
});
