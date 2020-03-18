import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import components from '@/components'

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase()) // 首字母大写
  Vue.component(`${name}`, components[key])
})

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
