<template>
  <div>
    <main class="l-main">
      <Home :profiles="profiles"/>
    </main>
  </div>
</template>

<script>
  import {Home} from '@/components'
  export default {
    name: 'HomeView',
    data(){
      return {
        profiles: {
          name: 'M. Taufik. Aji',
          jobdesk: 'activator industry',
          email: 'acuy666@gmail.com',
          phone: {
            num: '0813 1208 9907',
            link: '6281312089907'
          },
          facebook: {
            name: 'Acuy Taufik',
            link: 'acuy'
          },
          instagram: {
            name: 'Acuy Taufik',
            link: 'acuy'
          },
          linkedin: {
            name: 'Muhammad Taufik Aji',
            link: 'acuy'
          }
        }
      }
    },

    components: {
      Home
    }
  }
</script>
