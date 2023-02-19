<template>
    <div class="keyContent">
        <img src="../assets/img/keyVisual.png" alt="">
    </div>
</template>
<script>
export default{
    name: 'keyContent'
}
</script>
<style scoped>
    .keyContent{
        /* 画面幅を超えて合わせる */
        margin: 0 calc(50% - 50vw) 60px;
        width: 100vw;
    }
    .keyContent img{
        width: 100%;
    }
</style>
