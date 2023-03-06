<template>
    <div class="selectorList">
        <form action="" class="selectorListSearch" method="">
            <input type="text" placeholder="    キーワードを入力">
            <button type="submit">
                <div class="selectorListSearchButton">
                    <img src="../assets/img/search.svg" alt="検索ボタン">
                </div>
            </button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'SelectorList'
}
</script>
<style scoped>
.selectorList{
    margin-top: 5%;
}
</style>
