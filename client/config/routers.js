import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app',
    name: 'home'
  },
  {
    path: '/app',
    component: Todo,
    name: 'app'
  },
  {
    path: '/login',
    component: Login
  }
]
