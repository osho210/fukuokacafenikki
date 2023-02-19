<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
    <section class="categoryItems">
        <div v-for="categoryItem in categoryItems" :key="categoryItem.id" class="categoryItem">
            <article>
                <h3>{{categoryItem.name}}</h3>
                <img :src="categoryItem.path" alt="カテゴリー画像">
            </article>
        </div>
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
  name: 'Area',
  data () {
    return {
        categoryItems: [
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
