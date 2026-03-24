import "./assets/main.css";

import { createApp } from "vue";
// import App from "./App.vue";
// import App from "./baihoc/buoi2_App.vue";
// import App from "./baihoc/buoi3_App.vue";
// import App from "./baihoc/template.vue";
// import App from "./baihoc/buoi4_App.vue";
// import App from "./baihoc/baitapbuoi4_App.vue";
// import App from "./baihoc/buoi5_App.vue";
// import App from "./baihoc/buoi6_App.vue";
// import App from "./baihoc/baitapbuoi6_App.vue";
// import App from "./baihoc/buoi7_App.vue";
import App from "./baihoc/baitapbuoi7_App.vue";

import router from "./router";

// them bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
