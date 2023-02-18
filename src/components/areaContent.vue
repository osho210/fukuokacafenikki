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
            <h3>目的検索はこちら</h3>
            <img src="../assets/img/illust-home2.svg" alt="">
            <button type="submit" href="#">覗いてみる</button>
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
