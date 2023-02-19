<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
    <section class="aboutItems">
        <div v-for="aboutItem in aboutItems" :key="aboutItem.id" class="aboutItem">
            <img :src="aboutItem.path" alt="紹介画像">
            <h2>{{aboutItem.title}}</h2>
            <p>{{aboutItem.description}}</p>
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
  name: 'About',
  data () {
    return {
        aboutItems: [
            {
                title: '福岡カフェをもっと身近に',
                description: '福岡には魅力的なお店が多い。シャレなお店、雰囲気の良いお店、カフェの魅力は様々。自分好みのカフェ探しの旅へ、さあ出かけよう。',
                path: require('../assets/img/intro_1.png')
            },
            {
                title: '物語のようなSNSマガジン',
                description: '福岡のカフェをキュレーションしたメディア、福岡カフェ巡り。みなさまの好きが詰まったお店を紹介しています。ページをめくるように覗いていただけると嬉しいです。',
                path: require('../assets/img/intro_2.png')
            },
            {
                title: 'ばりよか！福岡',
                description: '福岡には魅力的なお店がたくさん！どこ行く？どこ寄る？心からワクワクするお店を紹介しています。あなたはこのお店知っとると？',
                path: require('../assets/img/intro_3.png')
            }
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
    .aboutItems{
        text-align: center;
    }
    .aboutItem{
        margin-bottom: 40px;
    }
    .aboutItem img{
        width: 70%;
    }
    .aboutItem h2{
        margin-top: 20px;
    }
</style>
