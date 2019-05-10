import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./registerServiceWorker";
import axios from "axios";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.axios = axios;

Vue.use(element, axios);
Vue.config.productionTip = false;
// const test= async () => {
//   const response = await axios.get('/api/movie/in_theaters')
//   console.log(response)
// }
// test()
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
