import Vue from "vue";
import { MLInstaller, MLCreate, MLanguage } from "vue-multilanguage";

Vue.use(MLInstaller);

export default new MLCreate({
  initial: "ENG",
  save: process.env.NODE_ENV === "production",
  languages: [
    new MLanguage("ENG").create({
      flow: "Statistics",
      visa: "Visas (Under Construction)",
      policy: "Policy Indicators",
      agreement: "International Agreements (Under Construction)",
      datamig: "DataMIG",
      datamig_desc:
        "The IDB Migration Initiative collects data on migration and migration policy in order to support analysis and to inform policy and operations. This portal serves to make that data available to the broader community.",
      initiative: "Migration Initiative",
      about: "About",
      project: "Project",
      project_desc:
        "DataMIG is the portal to databases compiled by the IDB Migration Initiative, both on its own and in collaboration with other institutions. The objective is to provide access to this information in a form that is useful to analysts, policymakers, and researchers. To date, there are two data collections available: a set of migration policy indicators that offers a general profile of the policy orientation in each country, and some basic statistics on the number of persons born abroad that reside in each country of Latin America and the Caribbean. In the coming months, these databases will be updated, expanded, and accompanied by additional databases.",

      datasets: "Datasets",
      datasets_desc:
        "DataMIG follows an “open data” philosophy. In addition to the data visualization tools that enable exploration of the databases, the data is also available for download in .csv format, along with documentation of the methodology used in its compilation.",
      references: "External References",
      references_desc:
        "The databases in DataMIG are compiled from multiple sources in the countries of Latin America and the Caribbean. For further information, many of them are included here.",
      policiy_data:
        "The data underlying the Migration Policy Indicators, including the observations and source links, is included in the data file. The criteria applied for each indicator is documented in the methodology.",
      flow_data:
        "The data underlying the Migration Statistics is included in the data file. ",
      tab: "National Migration Website",
      empty: "",
      flow_viz: "Number of Migrants Residing in LAC"
    }),

    new MLanguage("-ESP").create({
      flow: "Estadisticas",
      visa: "Visas (Bajo Construcción)",
      policy: "Indicadores de Política",
      agreement: "Acuerdos Internacionales (Bajo Construcción)",
      datamig: "DataMIG",
      datamig_desc:
        "La Iniciativa de Migraciones del BID recopila data sobre migraciones y política migratoria para apoyar análisis y para informar la política y las operaciones. Este portal sirve para hacer disponible esa data a la comunidad amplia.",
      initiative: "Iniciativa de Migracion",
      about: "Acerca del",
      project: "Proyecto",
      project_desc:
        "DataMIG es el portal de bases de datos recopilados por la Iniciativa de Migraciones del BID sólo y en colaboración con otras instituciones. El objetivo es divulgar esta información de forma tal que sea útil para analistas, hacedores de política, e investigadores. Hasta ahora, hay dos conjuntos de datos disponibles: un conjunto de indicadores de política migratoria que ofrece un perfil general de la orientación de la política en cada país, y unas estadísticas básicas del número de personas nacidas en el exterior que estén como residentes en cada país de América Latina y el Caribe. En los próximos meses estas bases de datos serán actualizadas, expandidas, y acompañadas con bases adicionales.",
      datasets: "Datasets",
      datasets_desc:
        "DataMIG sigue una filosofía de “datos abiertos”. En adición a las herramientas que permiten exploración de las bases de datos, la data está también disponible para descargarse en formato .csv, juntamente con documentación de la metodología usada en su compilación. ",
      references: "Referencias Externas",
      references_desc:
        "Las bases de datos en DataMIG son compiladas de múltiples fuentes en los países de América Latina y el Caribe. Para mayor información, muchos de ellos se incluyen aquí.",
      policiy_data:
        "Los datos subyacentes de los Indicadores de Política Migratoria, incluyendo sus observaciones y enlaces a las fuentes, se incluye en el archivo de datos. Los criterios aplicados en cada indicador se documentan en la metodología.",
      flow_data:
        "Los datos subyacentes de las estadísticas Migratorias se incluyen en el archivo de datos.",
      tab: "Sitio Web Nacional de Migración",
      empty: "",
      flow_viz: "Número de Migrantes Residentes en LAC"
    })
  ]
});
