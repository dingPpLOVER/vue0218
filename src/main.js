import {createApp} from "vue";
import App from "./App.vue";
import router from './router/router.js';
const app = createApp(App)
// 导入 element-plus
import ElementPlus from "element-plus";
// 导入 element-plus 样式
import "element-plus/dist/index.css";
// 导入 element-plus 图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
//配置全局axios
import axios from './untils/axios'
//添加到全局属性
app.config.globalProperties.$http = axios
app.use(router).use(ElementPlus).mount("#app");