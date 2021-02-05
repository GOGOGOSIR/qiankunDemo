<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div @click="goAbout">hash about</div>

    <router-link to="/Agent/MyHouse">MyHouse</router-link>
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
  methods: {
    goAbout () {
      this.$root.parentRouter.push('/app-vue-hash/about')
    }
  }
}
</script>
