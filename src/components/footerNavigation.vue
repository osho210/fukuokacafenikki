<template>
    <div class='footerContent'>
        <ul class='footerContentElements'>
            <li v-for='footerItem in footerItems' :key='footerItem.id' :href='footerItem.url' class='footerContentElement'>
                <img :src='footerItem.path' alt='フッタ' class='footerListImage'><br>
                <p>{{footerItem.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'footerNavigation',
    data () {
        return {
            footerItems: [
            {name: 'メニュー', path: require('../assets/img/btm_menu.svg'), url: '#'},
            {name: 'エリア', path: require('../assets/img/btm_area.svg'), url: '#'},
            {name: 'ふんいき', path: require('../assets/img/btm_category.svg'), url: '#'},
            {name: 'もくてき', path: require('../assets/img/btm_purpose.svg'), url: '#'}
        ]
        }
    }
}
</script>
<style scoped>
    .footerContent{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        height: 60px;
        z-index: 5;
        margin: 0 auto;
    }
    .footerContentElements{
        display: flex;
    }
    .footerContentElement{
        width: 25%;
        text-align: center;
        padding: 1%;
    }
    .footerContentElement:nth-of-type(n+2){
        border-left: 1px solid #000;
    }
    .footerContentElement img{
        width: 35%;
    }
    .footerContentElement p{
        margin-top: 5%;
        font-size: 80%;
    }
</style>
