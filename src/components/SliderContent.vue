<template>
    <div>
        <carousel :per-page='3' class='sliderItems'>
        <slide v-for='sliderItemImage in sliderItemImages' :key='sliderItemImage.id'>
            <div class='sliderItemImage'>
                <img :src='sliderItemImage.path' alt='スライド画像'>
            </div>
        </slide>
    </carousel>
    <div class="headerItemButtunArea">
        <ul class='headerItemButtuns'>
            <li v-for='headerItemButtun in headerItemButtuns' :key='headerItemButtun.id' :href='headerItemButtun.url' class="headerItemButtun">
                {{headerItemButtun.name}}
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
            {path: require('../assets/img/about.1.png'), url: ''},
            {path: require('../assets/img/area-pc.png'), url: ''},
            {path: require('../assets/img/about.3.png'), url: ''},
            {path: require('../assets/img/area-pc.png'), url: ''},
            {path: require('../assets/img/about.3.png'), url: ''},
            {path: require('../assets/img/about.1.png'), url: ''},
            {path: require('../assets/img/about.3.png'), url: ''},
            {path: require('../assets/img/about.1.png'), url: ''},
            {path: require('../assets/img/area-pc.png'), url: ''}
            ],
            headerItemButtuns: [
                {name: '目的', url: ''},
                {name: 'メニュー', url: ''},
                {name: 'カテゴリー', url: ''}
            ]
        }
    }
}
</script>

<style scoped>
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
