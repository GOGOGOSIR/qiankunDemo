<template>
  <div class="home">
    <h1>This is app-vue-history home page</h1>
    <router-link to="/app-vue-hash/about">hash about</router-link>
    <div @click="goToPage('/app-vue-hash/about')">
      通过主应用的router跳转至hash about
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToPage (path) {
      console.log(this.$root.parentRouter);
      this.$root.parentRouter.push(path);
    }
  },
}
</script>
