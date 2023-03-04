<template>
    <section class="contentTitle">
        <h2>カテゴリーから選択</h2>
        <ul class="contentLists">
            <li v-for="categoryItem in categoryItems" :key="categoryItem.id" :ref="categoryItem.url">
                <p  class="contentList">
                    <img :src="categoryItem.path" alt="行く相手">
                </p>
                <p>{{categoryItem.name}}</p>
            </li>
        </ul>
        <div class="contentArticle">
            <div>
                <h2>カテゴリーから探す</h2>
                <p>海カフェや夕陽の見えるカフェなど自然と楽しむカフェをご紹介。季節や気分に合わせたカフェ探しの参考にしてみてください。</p>
                <button type="button" class="button">
                    <router-link to="purpose">
                        詳細はこちら
                    </router-link>
                </button>
            </div>
            <img src="../assets/img/illust-home4.svg" alt="">
            <button type="submit" class="button">
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
