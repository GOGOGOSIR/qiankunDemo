<template>
  <div class="home">
    <h1>app-vue-hash home</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
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
