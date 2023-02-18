<template>
    <footer>
        <div>
            <p>©︎福岡カフェ日記</p>
            <p>プライバシーポリシーについて</p>
        </div>
    </footer>
</template>
<script>
export default{
    name: 'Footer'
}
</script>
<style scoped>
    footer{
        background: #ebebeb;
        padding: 4vw 0;
        text-align: center;
        display: block;
        /* 画面幅を超えて合わせる */
        margin: 0 calc(50% - 50vw) 60px;
        width: 100vw;
    }
    footer p{
        display: block;
    }
</style>
