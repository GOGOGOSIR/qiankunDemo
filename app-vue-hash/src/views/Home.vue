<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  computed: {
    commonData () {
      return this.isQiankun ? this.$root.parentVuex.state.commonData : '';
    }
  },
  mounted () {
    console.log('app-vue-hash Home.vue mounted')
  },
  methods: {
    changeParentState () {
      if (this.isQiankun) {
        this.$root.parentVuex.commit('setCommonData', { parent: 2 });
      }
    }
  },
}
</script>
