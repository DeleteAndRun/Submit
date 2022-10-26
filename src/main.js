
import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import "ant-design-vue/dist/antd.css"; //antd样式
import "./assets/less/style.less"; //引入全局公共样式
import App from "./App.vue";

createApp(App).use(router).use(createPinia()).mount("#app");
