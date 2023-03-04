<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
    <h2 class="summaryArticleTitle">メニューカテゴリー記事一覧</h2>
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
  name: 'Menu',
  data () {
    return {
        categoryItems: [
            {name: 'クリームソーダ', path: require('../assets/img/menu-cream.jpg'), url: ''},
            {name: 'フルーツサンド', path: require('../assets/img/menu-fruitsand.jpg'), url: ''},
            {name: 'あんバタースイーツ', path: require('../assets/img/menu-anko.jpg'), url: ''},
            {name: 'プリン', path: require('../assets/img/menu-purin.jpg'), url: ''},
            {name: 'チーズケーキ', path: require('../assets/img/menu-cheesecake.jpg'), url: ''},
            {name: 'ドーナツ', path: require('../assets/img/menu-donut.jpg'), url: ''},
            {name: '抹茶スイーツ', path: require('../assets/img/menu-mattha.jpg'), url: ''},
            {name: 'スコーン', path: require('../assets/img/menu-scone.jpg'), url: ''},
            {name: 'ガトーショコラ', path: require('../assets/img/menu-chocolat.png'), url: ''},
            {name: 'カヌレ', path: require('../assets/img/menu-kanure.jpg'), url: ''},
            {name: 'パンケーキ', path: require('../assets/img/menu-pancake.jpg'), url: ''},
            {name: 'サンドウィッチ', path: require('../assets/img/menu-sandwich.jpg'), url: ''},
            {name: 'パフェ', path: require('../assets/img/menu-parfait.jpg'), url: ''},
            {name: 'ティラミス', path: require('../assets/img/menu-tiramisu.jpg'), url: ''},
            {name: 'ハンバーガー', path: require('../assets/img/menu-humberger.jpg'), url: ''},
            {name: 'アイスクリーム', path: require('../assets/img/menu-ice.jpg'), url: ''},
            {name: 'かき氷', path: require('../assets/img/menu-kaki.jpg'), url: ''},
            {name: 'パスタ', path: require('../assets/img/menu-pasuta.jpg'), url: ''},
            {name: 'お団子', path: require('../assets/img/menu-dango.jpg'), url: ''},
            {name: 'オムライス', path: require('../assets/img/menu-omu.jpg'), url: ''},
            {name: 'ピザ', path: require('../assets/img/menu-pizza.jpg'), url: ''}
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
