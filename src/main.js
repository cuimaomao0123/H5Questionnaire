import Vue from 'vue'
import App from './App.vue'
import 'view-design/dist/styles/iview.css';
import './theme/index.less'
import './assets/iconfonts/iconfont.css'
import {  Message } from 'view-design';
Vue.prototype.$Message = Message;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
