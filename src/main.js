import "core-js/stable";
import Vue from "vue";
import App from "./App";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import store from "./store";
// vue File upload
import VueFileAgent from "vue-file-agent";
import VueFileAgentStyles from "vue-file-agent/dist/vue-file-agent.css";
Vue.use(VueFileAgent);

import "quill/dist/quill.core.css"; // import styles
import "quill/dist/quill.snow.css"; // for snow theme

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./css/adminLTE.css";
import "./css/themeStyle.css";
import "./css/customStyles.css";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";



Vue.use(Toast);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import Axios from 'axios';
import Helpers from './helper';
Vue.use(Helpers);
Vue.prototype.$http = Axios;

Axios.defaults.baseURL = process.env.VUE_APP_API_URL
const token = localStorage.getItem('token');
Axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Axios.defaults.headers.common['Content-Type'] = 'application/json'
Axios.defaults.headers.common['Accept'] = 'application/json'

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.prototype.$log = console.log.bind(console);
import {ServerTable, ClientTable, EventBus} from 'vue-tables-2-premium';

Vue.use(ClientTable);
new Vue({
  el: "#app",
  router,
  store,
  icons,
  template: "<App/>",
  components: {
    App,
  },
});
