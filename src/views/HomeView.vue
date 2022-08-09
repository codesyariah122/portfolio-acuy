<template>
  <div>
    <main class="l-main">
      <!-- Homepage Header -->
      <Home :profiles="profiles"/>

      <!-- Homepage About -->
      <About :profiles="profiles" :gallery="profiles.gallery"/>

    </main>
  </div>
</template>

<script>
  import {Home, About} from '@/components'
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
          about: {
            header: "Salaam ...",
            text: `Perkenalkan saya <strong>Muhammad Taufik Aji</strong> Biasa di panggil <em>OPik</em> / <em>Acuy</em>. Saat ini kesibukan saya berwirausaha dalam bidang jasa yang khusus dalam material industri, menurut pendapat para kerabat saya merupakan orang yang senang dengan hidup bertualang khususnya dalam dunia kewirausahaan, mungkin terbukti benar adanya karena memang saya adalah orang yang sedikit menyukai adrenalin tinggi. Selain dalam dunia industri saya pun mempunyai kegemaran atau hoby lainnya yang antara lain adalah : <b>memelihara dan melatih burung kicau</b>, <b>marketing digital dan trading</b> dan beberapa hoby lainnya, yang sampai saat ini masih menghasilkan cuan dari hoby tersebut. Begitulah profile singkat saya, dan ini beberapa kegiatan saya yang terdokumentasi di mini gallery portfolio pribadi saya : 
            `
          },
          gallery: [
            {
              id: 1,
              src: require('@/assets/images/portfolio/portfolio1.jpeg')
            },
            {
              id: 2,
              src: require('@/assets/images/portfolio/portfolio2.jpeg')
            },
            {
              id: 3,
              src: require('@/assets/images/portfolio/portfolio3.jpeg')
            },
            {
              id: 4,
              src: require('@/assets/images/portfolio/portfolio4.jpeg')
            },
            {
              id: 5,
              src: require('@/assets/images/portfolio/portfolio5.jpeg')
            },
            {
              id: 6,
              src: require('@/assets/images/portfolio/portfolio6.jpeg')
            },
            {
              id: 7,
              src: require('@/assets/images/portfolio/portfolio7.jpeg')
            },
            {
              id: 8,
              src: require('@/assets/images/portfolio/portfolio8.jpeg')
            }
          ],
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
      Home,
      About
    }
  }
</script>
