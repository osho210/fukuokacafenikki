<template>
    <header>
        <div :class="{itemDistanceEvenly: isActive , headerPosition: isActive}">
            <router-link to="/">
                <img src="../assets/img/logo.png" alt="サイトロゴ" :class="{logoImage: isActive }">
            </router-link>
            <div :class="{showMobile:showMobileActive }">
                <ul :class="{itemDistanceEvenly: isActive }">
                    <li v-for="(listItem , key) in limitCount" :key="key.id" :href="listItem.url" :class="{headerItemPosition: isActive }">
                        <router-link :to="listItem.url">
                            {{ listItem.name}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <Humbeger :class="{showPc:showPcActive}"></Humbeger>
        </div>
    </header>
</template>

<script>
import Humbeger from '@/components/Humbeger'

export default {
  name: 'Header',
  data () {
    return {
    isActive: true,
    listItems: [
        {name: '目的', url: 'purpose'},
        {name: 'メニュー', url: 'menu'},
        {name: 'エリア', url: 'area'},
        {name: 'カテゴリー', url: 'cutegory'},
        {name: '連絡先', url: 'contact'}
    ]
    }
    },
    computed: {
        limitCount () {
            return this.listItems.slice(0, 4)
        }
    },
    components: {
        Humbeger
    }
}
</script>

<style scoped>
    header{
        background: white;
        height: 80px;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 10;
        width: 100%;
        border-bottom: 0.1px solid;
    }
    .headerPosition{
        background: white;
    }
    .logoImage{
        width: 200px;
    }
    .headerItemPosition{
        margin: 15px 10px;
    }
    /* mediaquery */
    @media screen and (max-width: 550px) {
        .logoImage{
            position: fixed;
            top: 5px;
            left: 5px;
            width: 150px;
        }
    }
</style>
