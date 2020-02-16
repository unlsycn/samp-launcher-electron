// Vue Plugins
import Vue from "vue";
import axios from "axios";
import Element from "element-ui";
// Css
import "element-ui/lib/theme-chalk/index.css";
// App
import App from "./App";
import router from "./router";

if (!process.env.IS_WEB)
{
    Vue.use(require("vue-electron"));
}
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
// Vue
Vue.use(Element);
new Vue({
    components: { App },
    router,
    template: "<App/>"
}).$mount("#app");
