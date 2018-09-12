import Vue from 'vue'

const component = {
  props: {
    active: Boolean
  },
  template: `
  <div>
    <input type="text" v-model="text" />
    <span></span>
  </div>`,
  data () {
    return {
      text: 0
    }
  }
}

Vue.component('CompOne', component)

new Vue({
  el: '#root',
  template: `
    <div>
      <comp-one></comp-one>
    </div>
  `
})
