import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
/* 不加文件后缀名，就相当于引入模块，就会去src下面找，加了后缀名就是引入文件了 */
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
