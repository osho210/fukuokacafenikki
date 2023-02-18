<template>
    <section class="contentTitle">
        <h2>人気エリアから選択</h2>
        <ul class="contentLists">
            <li v-for="purposeItem in purposeItems" :key="purposeItem.id" :ref="purposeItem.url">
                <p  class="contentList">
                    <img :src="purposeItem.path" alt="行く相手">
                </p>
                <p>{{purposeItem.name}}</p>
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
    name: 'purposeContent',
    data () {
        return {
            purposeItems: [
                {name: 'デート', path: require('../assets/img/illust-dato.svg'), url: ''},
                {name: '友達', path: require('../assets/img/illust-friend.svg'), url: ''},
                {name: 'おひとり', path: require('../assets/img/illust-single.svg'), url: ''},
                {name: 'ママ友', path: require('../assets/img/illust-area.svg'), url: ''}
            ]
        }
    }
}
</script>
