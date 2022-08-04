<template>
  <div class="home">
    <h1>Acuy Opik Website</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <blockquote>
      Ini adalah portfolio milik Acuy
    </blockquote>
    <small>
      Sedang proses pengembangan
    </small>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
