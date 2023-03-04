<template>
    <section class="contentTitle">
        <h2>人気メニューから選択</h2>
        <ul class="contentLists">
            <li v-for="menuItem in menuItems" :key="menuItem.id" :ref="menuItem.url">
                <p  class="contentList">
                    <img :src="menuItem.path" alt="メニュー">
                </p>
                <p>{{menuItem.name}}</p>
            </li>
        </ul>
        <div class="contentArticle">
            <div>
                <h2>メニューから探す</h2>
                <p>カフェメニューの中でも人気なスイーツを厳選してご紹介。美味しいスイーツ探しの参考にしてみてくださいね！</p>
                <button type="button" class="button">
                    <router-link to="purpose">
                        詳細はこちら
                    </router-link>
                </button>
            </div>
            <img src="../assets/img/illust-home3.svg" alt="メニュー検索画像">
            <button type="submit" class="button">
                <router-link to="menu">
                    覗いてみる
                </router-link>
            </button>
        </div>
    </section>
</template>
<script>
export default {
    name: 'menuContent',
    data () {
        return {
            menuItems: [
                {name: 'プリン', path: require('../assets/img/menu-purin.jpg'), url: ''},
                {name: 'ドーナツ', path: require('../assets/img/menu-donut.jpg'), url: ''},
                {name: 'チーズケーキ', path: require('../assets/img/menu-cheesecake.jpg'), url: ''},
                {name: '抹茶スイーツ', path: require('../assets/img/menu-mattha.jpg'), url: ''}
            ]
        }
    }
}
</script>
