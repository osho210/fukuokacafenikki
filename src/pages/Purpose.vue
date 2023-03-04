<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
    <h2 class="summaryArticleTitle">目的カテゴリー記事一覧</h2>
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
  name: 'Purpose',
  data () {
    return {
        categoryItems: [
            {name: 'デート', path: require('../assets/img/illust-dato.svg'), url: ''},
            {name: '友達', path: require('../assets/img/illust-friend.svg'), url: ''},
            {name: '一人カフェ', path: require('../assets/img/illust-single.svg'), url: ''},
            {name: 'モーニング', path: require('../assets/img/illust-morning.svg'), url: ''},
            {name: 'ランチ', path: require('../assets/img/illust-lunch.svg'), url: ''},
            {name: '大人数', path: require('../assets/img/illust-many.svg'), url: ''},
            {name: '女子会', path: require('../assets/img/illust-area.svg'), url: ''},
            {name: '食べ歩き', path: require('../assets/img/illust-takeout.svg'), url: ''},
            {name: 'インスタ映え', path: require('../assets/img/illust-bae.svg'), url: ''},
            {name: 'ファミリー', path: require('../assets/img/illust-family.svg'), url: ''}
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
