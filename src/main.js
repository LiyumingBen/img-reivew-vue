import Vue from "vue";
import App from "./App.vue";

import VueImgsPreview from "../packages/index";

Vue.use(VueImgsPreview);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount("#app");
