<template>
  <div>
    <Header></Header>
    <footerNavigation></footerNavigation>
  </div>
</template>

<script>
import Header from '@/components/Header'
import footerNavigation from '@/components/footerNavigation'

export default {
  name: 'Front',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    footerNavigation
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
