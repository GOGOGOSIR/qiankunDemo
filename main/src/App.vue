<template>
  <div id="app">
    <header>
      <router-link to="/app-vue-hash/home">app-vue-hash</router-link>
      <router-link to="/app-vue-history/home">app-vue-history</router-link>
      <router-link to="/about">about</router-link>
      <span @click="changeParentState"
        >主项目的数据：{{ commonData.parent }}，点击变回1</span
      >
    </header>
    <h1>vue 和 vue-router 在主应用通过cdn引入，子应用共享</h1>
    <div id="appContainer1"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    commonData () {
      return this.$store.state.commonData;
    }
  },
  methods: {
    changeParentState () {
      this.$store.commit('setCommonData', { parent: 1 });
    }
  },
}
</script>

<style scoped>
#app {
  height: 100vh;
  text-align: center;
  position: relative;
}
header > a {
  margin: 0 20px;
}
.appContainer {
  background: #ccc;
  padding: 20px;
}
</style>
