<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
    <section class="menuItems">
    </section>
    <FooterNavigation :class="{showPc:showPcActive}" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import SliderContent from '@/components/SliderContent'
import FooterNavigation from '@/components/FooterNavigation'
import Footer from '@/components/Footer'

export default {
  name: 'Menu',
  data () {
    return {
        menuItems: [
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
            {name: '', path: require(''), url: ''},
        ]
    }
  },
  components: {
    Header,
    SliderContent,
    FooterNavigation,
    Footer
  }
}
</script>
<style scoped>
</style>
