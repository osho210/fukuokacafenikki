<template>
<div class='wrapper'>
    <Header />
    <SliderContent />
    <div class='content'>
        <section class='contentMain'>
            <div>
                <carousel :per-page='1' class='sliderItems'>
                    <slide v-for='sliderItemImage in sliderItemImages' :key='sliderItemImage.id'>
                        <div class='sliderItemImage'>
                            <img :src='sliderItemImage.path' alt='投稿画像'>
                        </div>
                    </slide>
                </carousel>
            </div>
            <div class="shopDetail">
                <ul class="shopDetailList">
                  <li v-for='shopDetailList in shopDetailLists' :key='shopDetailList.id' v-on:click='selectItem(shopDetailList.id)' :class="{active: selectedItemId === shopDetailList.id}" >
                    {{shopDetailList.title}}
                  </li>
                </ul>
                <div>
                  <div v-if='selectedItemId === 1'>
                    {{shopDescription}}
                  </div>

                  <div v-if='selectedItemId === 2'>
                    <!-- recommend -->
                    <div class='recommendPerson'>
                      <p>こんな方におすすめ</p>
                      <div class='recommendPersonContent'>
                        <ul>
                          <li>・{{recomend1}}</li>
                          <li>・{{recomend2}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- shopInformation -->
                  <div v-if='selectedItemId === 3'>
                    <div class='storeInfo'>
                      <p>店舗情報</p>
                      <div class='storeInfoDetail'>
                        <ul>
                          <li>
                            <img src='../assets/img/icon/sum_address.svg' alt=''>
                            <p>住所 : {{address}}</p>
                          </li>
                          <li>
                            <img src='../assets/img/icon/sum_hour.svg' alt=''>
                            <p>営業時間 : {{businessHours}}</p>
                          </li>
                          <li>
                            <img src='../assets/img/icon/sum_dayoff.svg' alt=''>
                            <p>店休日 : {{regularHoliday}}</p>
                          </li>
                          <li>
                            <img src='../assets/img/icon/sum_phone.svg' alt=''>
                            <p>電話 : {{phoneNumber}}</p>
                          </li>
                          <li>
                            <img src='../assets/img/icon/sum_parking.svg' alt=''>
                            <p>駐車用 : {{parkingAvailability}}</p>
                          </li>
                          <li>
                            <img src='../assets/img/icon/sum_access.svg' alt=''>
                            <p>アクセス : {{nearestStation}}</p>
                          </li>
                          <li>
                            <img src='../assets/img/icon/sum_hp.svg' alt=''>
                            <p>HP : </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <!--hashtag  -->
                <div v-if='selectedItemId === 4'>
                  <ul>
                    <li v-for="tag in hashTag" :key="tag.id">
                      {{tag}}
                    </li>
                  </ul>
                </div>
            </div>
        </section>
        <Sidebar></Sidebar>
    </div>
    <FooterNavigation :class='{showPc:showPcActive}' />
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header'
import SliderContent from '@/components/SliderContent'
import Sidebar from '@/components/Sidebar'
import FooterNavigation from '@/components/FooterNavigation'
import Footer from '@/components/Footer'

export default {
  name: 'Cafe',
  data () {
    return {
        id: '1',
        shopName: 'como es',
        shopImage: require('../assets/img/shop/data1.jpg'),
        photographer: require('../assets/img/user/data-1.png'),
        photographerId: 'rn10807',
        photographerUrl: '#',
        shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ',
        recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方',
        recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方',
        address: '福岡県福岡市中央区今泉2-1-75',
        phoneNumber: '092-516-3996',
        businessHours: '10:00 ~ 19:00',
        regularHoliday: '火曜日',
        parkingAvailability: '無し',
        nearestStation: '薬院駅',
        hp: '',
        StarRating: '3.21',
        NumberReviewers: '19',
        shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。',

        // list切り替え
        selectedItemId: 1,
        // CSS切り替え
        selectedIndex: true,

        sliderItemImages: [
            {path: require('../assets/img/shopDetail/comoes/comoes1.png')},
            {path: require('../assets/img/shopDetail/comoes/comoes2.png')},
            {path: require('../assets/img/shopDetail/comoes/comoes3.png')},
            {path: require('../assets/img/shopDetail/comoes/comoes4.png')},
            {path: require('../assets/img/shopDetail/comoes/comoes5.png')},
            {path: require('../assets/img/shopDetail/comoes/comoes6.png')},
            {path: require('../assets/img/shopDetail/comoes/comoes7.png')},
            {path: require('../assets/img/shopDetail/comoes/comoes8.png')},
            {path: require('../assets/img/shopDetail/comoes/comoes9.png')},
            {path: require('../assets/img/shopDetail/comoes/comoes10.png')}
        ],
        shopDetailLists: [
            {id: 1, title: '店舗詳細'},
            {id: 2, title: '店舗におすすめな人'},
            {id: 3, title: '店舗情報'},
            {id: 4, title: 'ハッシュタグ'}
        ],
        hashTag: ['乙女心をわしづかみ', '癒し空間でホッと一息', '幸せな一口あなたにも', '気になるあの子を誘って', '福岡カフェのスタンダード']
    }
  },
  components: {
    Header,
    SliderContent,
    Sidebar,
    FooterNavigation,
    Footer
  },
  methods: {
    selectItem (id) {
      this.selectedItemId = id
    }
  }
}
</script>
<style scoped>
.sliderItemImage img{
    width: 100%;
}
.shopDetail{
  margin-bottom: 10%;
}
.shopDetailList{
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 100%;
  font-weight: bold;
  margin: 5% 0;
}
.shopDetailList li{
  border-bottom: solid 1px;
  opacity: 0.7;
}

.active {
  opacity: 1!important;
}
</style>
