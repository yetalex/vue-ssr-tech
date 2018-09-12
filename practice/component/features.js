import Vue from 'vue'

/**
 * 制作公共组件的时候的一些高级特性
 * ref  这个需要去看看，this.$refs.cp
 * 组件之间沟通 provide  和 inject
 */

const component = {
  template: `
    <div :style="style">
      <div>
        <slot name="header"></slot>
      </div>
      <slot></slot> <!-- 插槽占位符-->
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  el: '#root',
  components: {
    comp: component
  },
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.cp.style)
  },
  template: `
    <div>
      <comp ref="cp">
        <h1 slot="header">Header</h1>
        <span>{{value}}</span>
      </comp>
    </div>
  `
})
