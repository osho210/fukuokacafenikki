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
        width: 80%;
        margin: 0 auto;
    }
    .selectorListSearch {
        display: flex;
    }
    .selectorListSearch input{
        width: 100%;
        border-radius: 6px 0 0 6px;
    }
    .selectorListSearchButton{
        width: 40px;
        background: #978574;
        padding: 2px;
        border-radius: 0 6px 6px 0;
    }
</style>
