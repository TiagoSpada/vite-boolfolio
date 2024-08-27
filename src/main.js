import { createApp } from "vue";

import { router } from "./router";

// import
import "./assets/scss/main.scss";
//  import vue component
import App from "./pages/AppHome.vue";

createApp(App).use(router).mount("#app");
