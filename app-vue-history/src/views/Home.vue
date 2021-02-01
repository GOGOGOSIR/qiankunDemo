<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/app-vue-hash/about">hash about</router-link>

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
  }
}
</script>
