import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import de from 'vuetify/lib/locale/de';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  theme:       {
    primary: "#49416D",
    secondary: "#A882DD",
    accent: "#E08D79",
    error: "#f44336",
    warning: "#ff9800",
    info: "#E0EFDE",
    success: "#8bc34a"
    }
});

export default new Vuetify({
    lang: {
      locales: { de },
      current: 'de',
    },
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
});
