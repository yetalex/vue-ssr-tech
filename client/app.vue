<template>
    <!-- app.vue 的template标签内只能有一个节点 -->
    <div id="app">
        <div id="cover"></div>
        <AppHeader></AppHeader>
        <p>{{fullNames}} {{count}}</p>
        <router-view />
        <AppFooter></AppFooter>
    </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
// 引入header.vue组件
import AppHeader from './layout/header.vue'

// 引入footer.jsx组件
import AppFooter from './layout/footer.jsx'

export default {
  // 声明组件，之后便可以使用组件标签
  components: {
    AppHeader,
    AppFooter
  },
  mounted () {
    console.log(this.$store)
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // let i = 1
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    ...mapState({
      count: (state) => state.count
    }),
    ...mapGetters({
      fullNames: 'fullName'
    })
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style lang="stylus" scoped>
  #app {
      position absolute
      left 0
      right 0
      top 0
      bottom 0
  }

  #cover {
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      background-color #555
      opacity 0.5
      z-index -1
  }

</style>
