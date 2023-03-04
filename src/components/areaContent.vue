<template>
    <section class="contentTitle">
        <h2>人気エリアから選択</h2>
        <ul class="contentLists">
            <li v-for="AreaItem in AreaItems" :key="AreaItem.id" :ref="AreaItem.url">
                <p  class="contentList">
                    <img :src="AreaItem.path" alt="行く相手">
                </p>
                <p>{{AreaItem.name}}</p>
            </li>
        </ul>
        <div class="contentArticle">
            <div>
                <h2>エリアから探す</h2>
                <p>福岡のカフェを地域ごとに紹介しています。自分好みのカフェを探す旅へ、さぁ出かけよう！</p>
                <button type="button" class="button">
                    <router-link to="area">
                        詳細はこちら
                    </router-link>
                </button>
            </div>
            <img src="../assets/img/illust-home2.svg" alt="">
            <button type="submit" class="button">
                <router-link to="area">
                    覗いてみる
                </router-link>
            </button>
        </div>
    </section>
</template>
<script>
export default {
    name: 'areaContent',
    data () {
        return {
            AreaItems: [
                {name: '博多', path: require('../assets/img/hakata-home.jpg'), url: ''},
                {name: '北九州', path: require('../assets/img/kitakyushu-home.jpg'), url: ''},
                {name: '中央区', path: require('../assets/img/chuou-home.jpg'), url: ''},
                {name: '糸島', path: require('../assets/img/itoshima-home.jpg'), url: ''}
            ]
        }
    }
}
</script>
