<template>
  <div class="wrapper">
    <Header></Header>
    <PurposeContent></PurposeContent>
    <MenuContent></MenuContent>
    <AreaContent></AreaContent>
    <CategoryContent></CategoryContent>
    <FooterNavigation :class="{showPc:showPcActive}"></FooterNavigation>
  </div>
</template>

<script>
import Header from '@/components/Header'
import PurposeContent from '@/components/PurposeContent'
import MenuContent from '@/components/MenuContent'
import AreaContent from '@/components/AreaContent'
import CategoryContent from '@/components/CategoryContent'
import FooterNavigation from '@/components/FooterNavigation'

export default {
  name: 'Front',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    PurposeContent,
    AreaContent,
    MenuContent,
    CategoryContent,
    FooterNavigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
