<template>
  <div class="wrapper">
    <Header></Header>
    <KeyContent></KeyContent>
    <SelectorList></SelectorList>
    <PurposeContent></PurposeContent>
    <MenuContent></MenuContent>
    <AreaContent></AreaContent>
    <CategoryContent></CategoryContent>
    <FooterNavigation :class="{showPc:showPcActive}"></FooterNavigation>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import KeyContent from '@/components/KeyContent'
import SelectorList from '@/components/SelectorList'
import PurposeContent from '@/components/PurposeContent'
import MenuContent from '@/components/MenuContent'
import AreaContent from '@/components/AreaContent'
import CategoryContent from '@/components/CategoryContent'
import FooterNavigation from '@/components/FooterNavigation'
import Footer from '@/components/Footer'

export default {
  name: 'Front',
  components: {
    Header,
    KeyContent,
    SelectorList,
    PurposeContent,
    AreaContent,
    MenuContent,
    CategoryContent,
    FooterNavigation,
    Footer
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
