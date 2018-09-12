/*
* index.js
* 项目入口文件
* */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import createStore from './store/store'

// 引入全局CSS样式
import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
// 为了服务器端渲染才使用方法，因为每次服务器端渲染都会生成对象，
// 如果不用方法，则store对象就一直存在，会造成内存溢出
const store = createStore()

// 在body下创建一个根节点
const root = document.createElement('div')
document.body.appendChild(root)

// 将根节点root注入到app.vue组件中
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
