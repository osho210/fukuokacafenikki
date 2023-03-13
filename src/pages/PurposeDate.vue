<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
    <div class="content">
      <section class="contentMain">
        <div class="articleTitle">
            <h1><b>{{articleTitle}}</b></h1>
            <img src="../assets/img/shop/data8.jpg" alt="トップ写真">
            <p>{{articleTitleDescription}}</p>
        </div>
        <div class="nomadList10">
          <span>
            <i class="fas fa-check"></i> 目次
          </span>
          <ul class="fa-check__list">
            <li v-for="shopElement in shopElements" :key="shopElement.name" class="fa-check__box">
              <a :href="'#' + shopElement.id">{{shopElement.shopName}}</a>
            </li>
          </ul>
        </div>
        <article>
          <h2 class="articleSubTitle">編集部の私が選ぶデートにおすすめの福岡カフェ８選</h2>
          <ul>
            <li v-for="shopElement in shopElements" :key="shopElement.id" class="shopArticle" :id="shopElement.id">
              <h2 class="shopTitle"> <b>{{shopElement.id}}{{shopElement.shopName}}</b></h2>
              <h3 class="shopDescription">{{shopElement.shopSlogan}}</h3>
              <img :src="shopElement.shopImage" alt="カフェ画像">

              <!-- instagramImage -->
              <div class="photgraferItem">
                <img :src="shopElement.photographer" alt="撮影者">
                <div>
                  <p>Instgram<br>
                  {{shopElement.photographerId}}</p>
                </div>
              </div>
              <h4>
                {{shopElement.shopDescription}}
              </h4>

              <!-- recommend -->
              <div class="recommendPerson">
                <p>こんな方におすすめ</p>
                <div class="recommendPersonContent">
                  <ul>
                    <li>・{{shopElement.recomend1}}</li>
                    <li>・{{shopElement.recomend2}}</li>
                  </ul>
                </div>
              </div>

              <!-- shopInformation -->
              <div class="storeInfo">
                <p>店舗情報</p>
                <div class="storeInfoDetail">
                  <ul>
                    <li>
                      <img src="../assets/img/icon/sum_address.svg" alt="">
                      <p>住所 : {{shopElement.address}}</p>
                    </li>
                    <li>
                      <img src="../assets/img/icon/sum_hour.svg" alt="">
                      <p>営業時間 : {{shopElement.businessHours}}</p>
                    </li>
                    <li>
                      <img src="../assets/img/icon/sum_dayoff.svg" alt="">
                      <p>店休日 : {{shopElement.regularHoliday}}</p>
                    </li>
                    <li>
                      <img src="../assets/img/icon/sum_phone.svg" alt="">
                      <p>電話 : {{shopElement.phoneNumber}}</p>
                    </li>
                    <li>
                      <img src="../assets/img/icon/sum_parking.svg" alt="">
                      <p>駐車用 : {{shopElement.parkingAvailability}}</p>
                    </li>
                    <li>
                      <img src="../assets/img/icon/sum_access.svg" alt="">
                      <p>アクセス : {{shopElement.nearestStation}}</p>
                    </li>
                    <li>
                      <img src="../assets/img/icon/sum_hp.svg" alt="">
                      <p>HP : </p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <Sidebar></Sidebar>
    </div>
    <FooterNavigation :class="{showPc:showPcActive}" />
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
  name: 'PurposeDate',
  data () {
    return {
        articleTitle: '休日のお出かけにはカフェデートがおすすめ！福岡カフェ日記編集部の選ぶ恋人と出かけたいおすすめのお店10選',
        articleTitleDescription: 'ドライブに映画にテーマパーク、そしてカフェ。雨が降った場合はどうする？？などデートのプランを考えるのってなかなか大変ですよね！今回はその中でも雨の日デートにも安心な『カフェデート』に注目。景色の綺麗なカフェやお店や隠れ家カフェなど、デートにおすすめなお店をご紹介します。カフェ初心者の方もこの記事を読めばもう安心。では早速紹介いたします。',
        shopElements: [
            {id: '1', shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19', shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {id: '2', shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19', shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {id: '3', shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19', shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {id: '4', shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19', shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {id: '5', shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19', shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {id: '6', shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19', shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {id: '7', shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19', shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {id: '8', shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19', shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'}
        ]
    }
  },
  components: {
    Header,
    SliderContent,
    Sidebar,
    FooterNavigation,
    Footer
  }
}
</script>
<style scoped>
</style>
