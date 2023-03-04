<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
    <section class="">
        <div class="articleTitle">
            <h1><b>休日のお出かけにはカフェデートがおすすめ！福岡カフェ日記編集部の選ぶ恋人と出かけたいおすすめのお店10選</b></h1>
            <img src="../assets/img/shop/data8.jpg" alt="トップ写真">
            <p>ドライブに映画にテーマパーク、そしてカフェ。雨が降った場合はどうする？？などデートのプランを考えるのってなかなか大変ですよね！今回はその中でも雨の日デートにも安心な『カフェデート』に注目。景色の綺麗なカフェやお店や隠れ家カフェなど、デートにおすすめなお店をご紹介します。カフェ初心者の方もこの記事を読めばもう安心。では早速紹介いたします。</p>
        </div>
        <div class="nomadList10">
          <span>
            <i class="fas fa-check"></i> 目次
          </span>
          <ul class="fa-check__list">
            <li v-for="shopElement in shopElements" :key="shopElement.id" class="fa-check__box">
              {{shopElement.shopName}}
            </li>
          </ul>
        </div>
        <article>
          <h2 class="articleSubTitle">編集部の私が選ぶデートにおすすめの福岡カフェ８選</h2>
          <ul>
            <li v-for="shopElement in shopElements" :key="shopElement.id" class="shopArticle">
              <h2 class="shopTitle"> <b>{{shopElement.shopName}}</b></h2>
              <h3 class="shopdescription">{{shopElement.shopSlogan}}</h3>
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
            {shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19',
            shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19',
            shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19',
            shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19',
            shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19',
            shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19',
            shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19',
            shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'},
            {shopName: 'como es', shopImage: require('../assets/img/shop/data1.jpg'), photographer: require('../assets/img/user/data-1.png'), photographerId: 'rn10807', photographerUrl: '#', shopSlogan: '音楽と楽しむ、木漏れ日の路地裏カフェ', recomend1: 'ほどよいスパイスと肉感のキーマカレーを楽しみたい方', recomend2: '緑と音楽に包まれた癒しの時間を過ごしたい方', address: '福岡県福岡市中央区今泉2-1-75', phoneNumber: '092-516-3996', businessHours: '10:00 ~ 19:00', regularHoliday: '火曜日', parkingAvailability: '無し', nearestStation: '薬院駅', StarRating: '3.21', NumberReviewers: '19',
            shopDescription: '「como es」というカフェは、音楽と共に過ごす木漏れ日の路地裏カフェとして、多くの人に愛されています。カフェに入ると、目に入るのは緑豊かな植物と、優しい光が差し込む空間。そこからは、美しい音楽が流れ、自然と日々の喧騒から解放されていくような気持ちになります。そして、このカフェで特にオススメしたいのは、ほどよいスパイスと肉感がたまらないキーマカレーです。一口食べると、スパイスの豊かな香りと、濃厚な味わいが口いっぱいに広がります。そして、その美味しさに舌鼓を打ちながら、緑と音楽に包まれた癒しの時間を過ごすことができます。何度も足を運びたくなるような、癒しのオアシスであり、美味しいカレーが味わえるカフェとして、ぜひお勧めしたいお店です。'}
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

article h2{
  font-size: 1.5em;
  font-weight: bold;
}

.articleTitle h1{
  font-size: 1.5em;
  font-weight: bold;
}
.articleTitle p{
  margin: 2em 0;
}
.articleTitle img{
  width: 100%;
}
.articleSubTitle{
  border-bottom: 1px solid #cdbcac;
}

/* 記事 */
.shopTitle{
  margin-bottom: 1em;
  padding: 0.25em 0 0.25em 0.75em;
  border-left: 6px solid #cdbcac;
}

.shopArticle img{
  width: 100%;
}

.photgraferItem{
  display: flex;
  justify-content: right;
  margin: 1em 0;
}
.photgraferItem img{
  width: 50px;
}
.photgraferItem div{
  font-size: 12px;
  margin: auto 0;
}
.photgraferItem p{
  font-size: 12px;
}
/* recommend */
.recommendPerson{
  margin: 2em 0;
}
.storeInfo{
  margin-bottom: 5em;
}
.recommendPerson p, .storeInfo p{
  display: inline-block;
  padding: 2px 4px;
  background: #cdbcac;
  color: #fff;
}
.recommendPersonContent , .storeInfoDetail{
  border: solid 1px #ccc;
}
.recommendPersonContent li{
  padding: 1em;
}
.storeInfoDetail ul{
  padding: 1em;
}
.storeInfoDetail li{
  display: flex;
}
.storeInfoDetail img{
  width: 20px;
  margin-right: 2em;
}
.storeInfoDetail p{
  background: white;
  color: black;
  font-weight: 100;
  font-size: 14px;
}
/* 間のボーダー */
.recommendPersonContent li:not(:last-child){
  border: solid 1px #ccc;
  font-size: 90%;
}

/* .photgraferItem  */
/* 目次 */
.fa-check:before {
    content: "\f00c";
}
.nomadList10 {
    position: relative;
    background: #FFF;
    border: 0.1px solid #cdbcac;
    padding: 2.5em 2em 0;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    margin-bottom: 5vw;
}
.nomadList10 span {
    position: absolute;
    top: 0;
    left: 0;
    background: #cdbcac;
    color: #FFF;
    width: 100%;
    text-align: left;
    padding: 0.4em;
    padding-left: 2rem;
}
.nomadList10 ul {
    padding: 15px 0;
}
.fa-check__list {
    counter-reset: number;
    list-style-type: none!important;
    padding: 0.5em;
}
.fa-check__list li {
    position: relative;
    padding: 0.5em 0.5em 0.5em 30px;
    font-size: 20px;
}
.nomadList10 ul li {
    margin-bottom: 5px;
}
.fa-check__list li:before {
    position: absolute;
    counter-increment: number;
    content: counter(number);
    display: inline-block;
    background: #cdbcac;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    border-radius: 50%;
    left: 0;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

@media screen and (max-width: 767px){
  .nomadList10 {
      width: 100%;
      padding-bottom: 1em;
  }
  .nomadList10 span {
    padding-left: 1em;
  }
  .fa-check__list li {
    position: relative;
    line-height: 1.5em;
    padding: 0.2em 0.5em 0.2em 3em;
  }
}
</style>
