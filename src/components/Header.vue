<template>
    <div :class="{itemDistanceEvenly: isActive , headerPosition: isActive}">
        <img src="../assets/img/logo.png" alt="サイトロゴ" :class="{logoImage: isActive }">
        <div :class="{showMobile:showMobileActive }">
            <ul :class="{itemDistanceEvenly: isActive }">
                <li v-for="(listItem , key) in limitCount" :key="key.id" :href="listItem.url" :class="{headerItemPosition: isActive }">
                    {{ listItem.name}}
                </li>
            </ul>
        </div>
        <Humbeger :class="{showPc:showPcActive}"></Humbeger>
    </div>
</template>

<script>
import Humbeger from '@/components/Humbeger'

export default {
  name: 'Header',
  data () {
    return {
    isActive: true,
    showMobileActive: {},
    showPcActive: {},
    listItems: [
        {name: '目的', url: '#'},
        {name: 'メニュー', url: '#'},
        {name: 'エリア', url: '#'},
        {name: 'カテゴリー', url: '#'},
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
    },
    created () {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
        },
    destroyed () {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style scoped>
    .headerPosition{
        margin-top: 10px;
    }
    .logoImage{
        width: 200px;
    }
    .headerItemPosition{
        margin: 15px 10px;
    }
    .showMobile{
        display: none;
    }
    .showPc{
        display: none;
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
