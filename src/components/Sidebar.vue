<template>
    <div class="sideItems">
        <ul class="sideItem">
            <li v-for="listItem in listItems" :key="listItem.id">
                <p>{{listItem.name}}</p>
                <div>
                    <img src="../assets/img/icon/side-border.svg">
                    <img :src="listItem.path" alt="">
                </div>
            </li>
        </ul>
        <SelectorList class="sidebarSelector"/>
        <div class="hashTag">
            <h2>-#ハッシュタグ</h2>
            <ul>
                <li v-for="tag in hashTag" :key="tag.id">
                    <p>#{{tag.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import SelectorList from '@/components/SelectorList'

export default {
    name: 'SliderContent',
    data () {
        return {
            listItems: [
            {name: '目的', url: 'purpose', path: require('../assets/img/icon/side_purpose.svg')},
            {name: 'メニュー', url: 'menu', path: require('../assets/img/icon/side_menu.svg')},
            {name: 'エリア', url: 'area', path: require('../assets/img/icon/side_area.svg')},
            {name: 'カテゴリー', url: 'category', path: require('../assets/img/icon/side_category.svg')},
            {name: '連絡先', url: 'contact', path: require('../assets/img/icon/side_contact.svg')}
            ],
            hashTag: [
                {name: '淡色カフェ', path: '#'},
                {name: '器と楽しむ', path: '#'},
                {name: 'あきのかおり', path: '#'},
                {name: '福岡カフェ日記', path: '#'},
                {name: 'くだものまつり', path: '#'},
                {name: '昭和の香る喫茶店', path: '#'},
                {name: 'ベーカリーカフェ', path: '#'},
                {name: 'SNSで話題沸騰中', path: '#'},
                {name: '乙女心をわしづかみ', path: '#'},
                {name: '癒し空間でホッと一息', path: '#'},
                {name: '個性が光る福岡カフェ', path: '#'},
                {name: '幸せな一口あなたにも', path: '#'},
                {name: '女子高生に大人気なお店', path: '#'},
                {name: '路地裏のひだまりカフェ', path: '#'},
                {name: '木の温もりに触れながら', path: '#'},
                {name: '港町のカフェを楽しもう', path: '#'},
                {name: '大満足のランチプレート', path: '#'},
                {name: '五感で楽しむカフェ時間', path: '#'},
                {name: '電車と楽しむカフェ散歩', path: '#'},
                {name: '気になるあの子を誘って', path: '#'},
                {name: '福岡カフェのスタンダード', path: '#'},
                {name: 'ハンドドリップのある日常', path: '#'},
                {name: 'パリジェンヌ3時のおやつ', path: '#'},
                {name: 'イートインを楽しむ新店舗', path: '#'},
                {name: '野菜をたっぷり味わいたい', path: '#'},
                {name: 'レトロな雰囲気に癒される', path: '#'}
            ]
        }
    },
    components: {
        SelectorList
    }
}
</script>

<style scoped>
.sideItems{
    margin-left: 3em;
    font-size: 1rem;
}
.sideItem li{
    display: flex;
    background: #978574;
    color: white;
    margin-bottom: 1.5em;
    padding: 1em;
    border-radius: 15px;
    justify-content: space-between;
}
.sideItem li div{
    display: flex;
    margin-right: 3rem;
}
.sidebarSelector{
    width: 100%;
    margin-bottom: 1.5em;
}
.sidebarSelector h2{
    display: none;
}
.hashTag{
    background: #eee8e3;
    color: #4c3a2d;
    padding: 2em 0 1em 2em;
}
.hashTag h2{
    padding-bottom: 0.5em;
    font-size: 1.5rem;
}
.hashTag li{
    margin-bottom: 1.5em;
}
</style>
