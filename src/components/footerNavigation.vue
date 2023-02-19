<template>
    <footer class='footerContent'>
        <ul class='footerContentElements'>
            <li v-for='footerItem in footerItems' :key='footerItem.id' :href='footerItem.url' class='footerContentElement'>
                <router-link :to="footerItem.url">
                    <img :src='footerItem.path' alt='フッタ' class='footerListImage'><br>
                    <p>{{footerItem.name}}</p>
                </router-link>
            </li>
        </ul>
    </footer>
</template>
<script>
import Footer from './Footer.vue'

export default {
  components: { Footer },
    name: 'footerNavigation',
    data () {
        return {
            footerItems: [
            {name: 'メニュー', path: require('../assets/img/btm_menu.svg'), url: 'menu'},
            {name: 'エリア', path: require('../assets/img/btm_area.svg'), url: 'area'},
            {name: 'ふんいき', path: require('../assets/img/btm_category.svg'), url: 'category'},
            {name: 'もくてき', path: require('../assets/img/btm_purpose.svg'), url: 'purpose'}
        ]
        }
    }
}
</script>
<style scoped>
    .footerContent{
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        height: 60px;
        z-index: 5;
        margin: 0px calc(50% - 50vw);
        width: 100vw;
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
