import Router from 'vue-router'
import routes from './routers'

export default () => {
  return new Router({
    routes,
    mode: 'history'
  })
}
