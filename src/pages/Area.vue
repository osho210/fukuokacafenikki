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
            {name: '博多', path: require('../assets/img/hakata-area.jpg'), url: ''},
            {name: '薬院', path: require('../assets/img/yakuin-area.jpg'), url: ''},
            {name: '大名', path: require('../assets/img/daimyo-area.jpg'), url: ''},
            {name: '平尾', path: require('../assets/img/hirao-area.jpg'), url: ''},
            {name: '春吉', path: require('../assets/img/haruyoshi-area.jpg'), url: ''},
            {name: '六本松', path: require('../assets/img/ropponmatsu-area.jpg'), url: ''},
            {name: '天神', path: require('../assets/img/tenjin-area.jpg'), url: ''},
            {name: '東区', path: require('../assets/img/higashi-area.jpg'), url: ''},
            {name: '西区', path: require('../assets/img/nishi-area.jpg'), url: ''},
            {name: '南区', path: require('../assets/img/hakata-area.jpg'), url: ''},
            {name: '城南区', path: require('../assets/img/jonan-area.jpg'), url: ''},
            {name: '早良区', path: require('../assets/img/sawara-area.jpg'), url: ''},
            {name: '小倉北区', path: require('../assets/img/kokurakita-area.jpg'), url: ''},
            {name: '小倉南区', path: require('../assets/img/kokuraminami-area.jpg'), url: ''},
            {name: '八幡東区', path: require('../assets/img/yahatahigashi-area.jpg'), url: ''},
            {name: '福津', path: require('../assets/img/fukutsu-area.jpg'), url: ''},
            {name: '糸島', path: require('../assets/img/itoshima-area.jpg'), url: ''},
            {name: '糟屋郡', path: require('../assets/img/kasuya-area.jpg'), url: ''},
            {name: '久留米', path: require('../assets/img/kurume-area.jpg'), url: ''},
            {name: '太宰府', path: require('../assets/img/dazaifu-area.jpg'), url: ''},
            {name: 'うきは', path: require('../assets/img/ukiha-area.jpg'), url: ''},
            {name: '栁川', path: require('../assets/img/yanagawa-area.jpg'), url: ''}
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
