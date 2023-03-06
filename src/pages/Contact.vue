<template>
  <div class="wrapper">
    <Header />
    <SliderContent />
    <section class="contactItems">
        <div v-for="formInputItem in formInputItems" :key="formInputItem.id">
            <span :class="formInputItem.classLabel">{{formInputItem.optionalItemsTag}}</span>
            {{formInputItem.name}}<br>
            <input type="text" :class="formInputItem.classInput">
        </div>
        <div v-for="formTextArea in formTextAreas" :key="formTextArea.id">
            <span :class="formTextArea .classLabel">{{formTextArea .optionalItemsTag}}</span>
            {{formTextArea .name}}<br>
            <textarea type="text" :class="formTextArea .classInput"></textarea>
        </div>
        <p>
            <input type="checkbox" id="checkbox" value="true" v-model="checkedForm">
            <label class="checkLabel">スパムメール防止のため、こちらのボックスにチェックを入れてから送信してください。</label>
        </p>
        <div>
            <input type="submit" class="formSubmitButton">
        </div>
    </section>
    <FooterNavigation :class="{showPc:showPcActive}" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import SliderContent from '@/components/SliderContent'
import FooterNavigation from '@/components/FooterNavigation'
import Footer from '@/components/Footer'

export default {
  name: 'About',
  data () {
    return {
        checkedForm: {},
        formInputItems: [
            {name: '企業・会社名', classLabel: 'inputRequiredLabel', optionalItemsTag: '必須'},
            {name: '代表者名', classLabel: 'inputRequiredLabel', optionalItemsTag: '必須'},
            {name: 'メールアドレス', classLabel: 'inputRequiredLabel', optionalItemsTag: '必須'},
            {name: '件名', classLabel: 'inputOptionalLabel', optionalItemsTag: '任意'}
        ],
        formTextAreas: [
            {name: 'メッセージ内容', classLabel: 'inputOptionalLabel', optionalItemsTag: '任意'}
        ]
    }
  },
  components: {
    Header,
    SliderContent,
    FooterNavigation,
    Footer
  }
}
</script>
<style scoped>
input{
    width: 100%;
    padding: 8px 0;
    margin-top: 3vw;
    border: 1px solid #d0d5d8;
    border-radius: 3px;
    height: 8vw;
    margin-bottom: 20px;
}
input[type='checkbox'] {
    width: 2em;
    margin: 0!important;
}
textarea{
    width: 100%;
    padding: 8px 0;
    margin-top: 3vw;
    border: 1px solid #d0d5d8;
    border-radius: 3px;
    margin-bottom: 30px;
}
.contactItems{
    max-width: 800px;
    margin: 0 auto;
}
.contactItems p{
    display: flex;
    margin: auto 0;
}
.checkLabel{
    margin: auto 0 auto 2em;
}
.inputRequiredLabel{
    color: #fff;
    margin-right: 10px;
    padding: 2px 4px;
    background: #926f55;
    border-radius: 5px;
}
.inputOptionalLabel{
    color: #926f55;
    margin-right: 10px;
    padding: 2px 4px;
    background: #fff;
    border-radius: 5px;
    border: solid 1px #926f55;
}
.formSubmitButton{
    width: 100%;
    height: 60px;
    background: #926f55;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    border-radius: 5px;
    margin: 2em 0;
}
</style>
