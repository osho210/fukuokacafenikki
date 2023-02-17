<template>
    <div :class="{itemDistanceEvenly: isActive , headerPosition:isActive}">
        <img src="../assets/img/logo.png" alt="サイトロゴ" :class="{logoImage: isActive}">
        <ul :class="{itemDistanceEvenly: isActive}">
            <li v-for="(listItem , key) in limitCount" :key="key.id" :href="listItem.url" :class="{headerItemPosition: isActive}">
                {{ listItem.name}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
  name: 'Header',
  data () {
    return {
        isActive: true,
        listItems:[
            {name: '目的' , url:'#'},
            {name: 'メニュー' , url:'#'},
            {name: 'エリア' , url:'#'},
            {name: 'カテゴリー' , url:'#'},
            {name: '連絡先' , url:'contact'}
        ]
    }
  },
  computed:{
    limitCount(){
        return this.listItems.slice(0,4)
    }
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
</style>