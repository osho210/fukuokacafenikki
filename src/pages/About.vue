<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
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
  name: 'Front',
  components: {
    Header,
    SliderContent,
    FooterNavigation,
    Footer
  }
}
</script>
