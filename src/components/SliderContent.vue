<template>
    <div>
        <carousel :per-page='3' class='sliderItems'>
        <slide v-for='sliderItemImage in sliderItemImages' :key='sliderItemImage.id'>
            <div class='sliderItemImage'>
                <router-link :to="sliderItemImage.url">
                    <img :src='sliderItemImage.path' alt='スライド画像'>
                </router-link>
            </div>
        </slide>
    </carousel>
    <div class="headerItemButtunArea">
        <ul class='headerItemButtuns'>
            <li v-for='headerItemButtun in headerItemButtuns' :key='headerItemButtun.id' :href='headerItemButtun.url' class="headerItemButtun">
                <router-link :to="headerItemButtun.url">
                    {{headerItemButtun.name}}
                </router-link>
            </li>
        </ul>
    </div>
    </div>
</template>
<script>

export default {
    name: 'SliderContent',
    data () {
        return {
            sliderItemImages: [
            {path: require('../assets/img/about.1.png'), url: 'about'},
            {path: require('../assets/img/area-pc.png'), url: 'area'},
            {path: require('../assets/img/about.3.png'), url: '#'},
            {path: require('../assets/img/area-pc.png'), url: 'area'},
            {path: require('../assets/img/about.3.png'), url: '#'},
            {path: require('../assets/img/about.1.png'), url: 'about'},
            {path: require('../assets/img/about.3.png'), url: '#'},
            {path: require('../assets/img/about.1.png'), url: 'about'},
            {path: require('../assets/img/area-pc.png'), url: 'area'}
            ],
            headerItemButtuns: [
                {name: '目的', url: 'purpose'},
                {name: 'メニュー', url: 'menu'},
                {name: 'カテゴリー', url: 'category'}
            ]
        }
    }
}
</script>

<style scoped>
    a{
        color: white;
    }
    .sliderItems{
        margin: 0px calc(50% - 50vw) 20px;
        width: 100vw;
        margin-top: 100px;
    }
    .sliderItemImage {
    padding: 0 2%;
    }
    .sliderItemImage img{
        width: 100%;
    }
    .headerItemButtunArea{
        position: relative;
        top: -2.2em;
    }
    .headerItemButtuns{
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .headerItemButtun{
        font-size: 10px;
        width: 20vw;
        height: 7vw;
        color: #fff;
        background: #cdbcac;
        line-height: 7vw;
        border-radius: 15px;
    }

</style>
