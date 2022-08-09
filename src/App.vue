<template>
  <Navigation/>
  <router-view/>
</template>

<script>
  import {Navigation} from '@/components'

  export default{
    components: {
      Navigation
    },

    mounted(){
      this.boxIcons(),
      this.mainJS()
    },

    methods: {
      boxIcons(){
        let boxIcons = document.createElement('link')
        boxIcons.setAttribute('rel', 'stylesheet')
        boxIcons.setAttribute('href', 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css')
        document.head.appendChild(boxIcons)
      },

      scrollReveal(){
        let scrollReveal = document.createElement('script')
        scrollReveal.setAttribute('src', 'https://unpkg.com/scrollreveal')
        document.body.appendChild(scrollReveal)
      },

      mainJS(){
        let scrollReveal = document.createElement('script')
        scrollReveal.setAttribute('src', require('@/assets/js/_main.js'))
        document.body.appendChild(scrollReveal)
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/scss/_variable.scss";
  @import "@/assets/scss/_main.scss";
</style>
