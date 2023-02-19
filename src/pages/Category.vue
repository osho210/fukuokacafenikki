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
  name: 'Category',
  data () {
    return {
        categoryItems: [
            {name: '古民家カフェ', path: require('../assets/img/category-kominka.jpg'), url: ''},
            {name: 'ブックカフェ', path: require('../assets/img/category-book.jpg'), url: ''},
            {name: '木漏れ日カフェ', path: require('../assets/img/category-komore.jpg'), url: ''},
            {name: 'ギャラリーカフェ', path: require('../assets/img/category-gyaraly.jpg'), url: ''},
            {name: 'モノトーンカフェ', path: require('../assets/img/category-mono.jpg'), url: ''},
            {name: '隠れ家カフェ', path: require('../assets/img/category-kakure.jpg'), url: ''},
            {name: '韓国風カフェ', path: require('../assets/img/category-korea.jpg'), url: ''},
            {name: 'コーヒースタンド', path: require('../assets/img/category-stand.jpg'), url: ''},
            {name: 'ロースタリーカフェ', path: require('../assets/img/category-coffee.jpg'), url: ''},
            {name: '雑貨カフェ', path: require('../assets/img/category-zakka.jpg'), url: ''},
            {name: 'テラスカフェ', path: require('../assets/img/category-teras.jpg'), url: ''},
            {name: '海の見えるカフェ', path: require('../assets/img/category-see.jpg'), url: ''},
            {name: '夕日の見えるカフェ', path: require('../assets/img/category-sunset.jpg'), url: ''}
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
