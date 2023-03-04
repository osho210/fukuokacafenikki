<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
    <section class="">
        <div>
            <h2>休日のお出かけにはカフェデートがおすすめ！福岡カフェ日記編集部の選ぶ恋人と出かけたいおすすめのお店10選</h2>
            <img src="../assets/img/shop/data8.jpg" alt="トップ写真">
            <p>ドライブに映画にテーマパーク、そしてカフェ。雨が降った場合はどうする？？などデートのプランを考えるのってなかなか大変ですよね！今回はその中でも雨の日デートにも安心な『カフェデート』に注目。景色の綺麗なカフェやお店や隠れ家カフェなど、デートにおすすめなお店をご紹介します。カフェ初心者の方もこの記事を読めばもう安心。では早速紹介いたします。</p>
        </div>
        <div>
            <span>
                <i></i>
                目次
            </span>
            <ul>
                <li></li>
            </ul>
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
  name: 'PurposeDate',
  data () {
    return {
        shopElements: [
            {name: '', description: '', path: '', user: '', recomend1: '', recomend2: ''}
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
