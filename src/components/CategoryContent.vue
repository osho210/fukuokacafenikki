<template>
    <section class="contentTitle">
        <h2>人気エリアから選択</h2>
        <ul class="contentLists">
            <li v-for="categoryItem in categoryItems" :key="categoryItem.id" :ref="categoryItem.url">
                <p  class="contentList">
                    <img :src="categoryItem.path" alt="行く相手">
                </p>
                <p>{{categoryItem.name}}</p>
            </li>
        </ul>
        <div class="contentArticle">
            <h3>目的検索はこちら</h3>
            <img src="../assets/img/illust-home2.svg" alt="">
            <button type="submit">
                <router-link to="category">
                    覗いてみる
                </router-link>
            </button>
        </div>
    </section>
</template>
<script>
export default {
    name: 'categoryContent',
    data () {
        return {
            categoryItems: [
                {name: '古民家カフェ', path: require('../assets/img/category-kominka.jpg'), url: ''},
                {name: '木漏れ日カフェ', path: require('../assets/img/category-komore.jpg'), url: ''},
                {name: 'ブックカフェ', path: require('../assets/img/category-book.jpg'), url: ''},
                {name: '韓国風カフェ', path: require('../assets/img/category-korea.jpg'), url: ''}
            ]
        }
    }
}
</script>
