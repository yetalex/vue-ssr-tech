import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-show="active">{{firstName}} {{lastName}}</div>
      <div>{{fullName}}</div>
      <input type="text" v-model.lazy="firstName" />
    </div>
  `,
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou',
    active: false
  },
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
