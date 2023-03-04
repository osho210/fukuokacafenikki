<template>
    <section class="contentTitle">
        <h2>行く相手から選択</h2>
        <ul class="contentLists">
            <li v-for="purposeItem in purposeItems" :key="purposeItem.id" :ref="purposeItem.url">
                <p  class="contentList">
                    <img :src="purposeItem.path" alt="行く相手">
                </p>
                <p>{{purposeItem.name}}</p>
            </li>
        </ul>
        <div class="contentArticle">
            <div>
                <h2>目的から探す</h2>
                <p>モーニングやランチなどのおすすめなお店をご紹介！目的に合わせたカフェ探しの参考にしてくださいね！</p>
                <button type="button" class="button">
                    <router-link to="purpose">
                        詳細はこちら
                    </router-link>
                </button>
            </div>
            <img src="../assets/img/illust-home2.svg" alt="">
            <button type="submit" class="button">
                <router-link to="purpose">
                    覗いてみる
                </router-link>
            </button>
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
<style scoped>
.contentList{
    border: 0.1px solid #c4c4c4;
    padding: 0.5em 0;
}
</style>
