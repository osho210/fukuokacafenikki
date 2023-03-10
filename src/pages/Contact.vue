<template>
    <div class='wrapper'>
    <Header />
    <SliderContent />
    <section class='contactItems'>
    <form @submit.prevent='submitForm'>
        <div>
            <span class='inputRequiredLabel'>必須</span>
            企業・会社名<br />
            <input id='companyName' type='text' v-model.trim='companyName' @input='$v.companyName.$touch()'/>
            <div v-if='$v.companyName.$error'>
                <p class='errorMessage' v-if='!$v.companyName.required'>企業・会社名を入力してください</p>
            </div>
        </div>
        <div>
            <span class='inputOptionalLabel'>任意</span>
            代表者名<br />
            <input id='representativeName' type='text' v-model.trim='representativeName'/>
        </div>
        <div>
            <span class='inputRequiredLabel'>必須</span>
            メールアドレス<br />
            <input id='mail' type='mail' v-model.trim='mail' @input='$v.mail.$touch()'/>
            <div v-if='$v.mail.$error'>
                <p class='errorMessage' v-if='!$v.mail.required'>メールアドレスを入力してください</p>
                <p class='errorMessage' v-if='!$v.mail.email'>正しい書式で入力してください</p>
            </div>
        </div>
        <div>
            <span class='inputRequiredLabel'>必須</span>
            件名<br />
            <input id='messageTitle' type='text' v-model.trim='messageTitle' @input='$v.messageTitle.$touch()'/>
            <div v-if='$v.messageTitle.$error'>
                <p class='errorMessage' v-if='!$v.messageTitle.required'>件名を入力してください</p>
                <p class='errorMessage' v-if='!$v.messageTitle.maxLength'>文字数は30文字以内でお願いいたします</p>
            </div>
        </div>
        <div>
            <span class='inputRequiredLabel'>必須</span>
            メッセージ内容<br />
            <textarea type='text' name='messageContent' id='messageContent' v-model.trim='messageContent' @input='$v.messageContent.$touch()'></textarea>
            <div v-if='$v.messageContent.$error'>
                <p class='errorMessage' v-if='!$v.messageContent.required'>メッセージ内容を入力してください</p>
            </div>
        </div>
            <p>
                <input type='checkbox' id='checkbox' value='' v-model.trim='isChecked'/>
                <label class='checkLabel'>スパムメール防止のため、こちらのボックスにチェックを入れてから送信してください。</label>
            </p>
        <div>
            <input type='submit' class='formSubmitButton' />
        </div>
    </form>
    </section>
    <FooterNavigation :class='{ showPc: showPcActive }' />
    <Footer />
</div>
</template>

<script>
import Header from '@/components/Header'
import SliderContent from '@/components/SliderContent'
import FooterNavigation from '@/components/FooterNavigation'
import Footer from '@/components/Footer'
import { required, email, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'Contact',
    data () {
    return {
        validations: '',
        representativeName: '',
        mail: '',
        messageTitle: '',
        messageContent: '',
        submitStatus: '',
        companyName: '',
        isChecked: false
    }
    },
    validations: {
        companyName: {
        required
        },
        representativeName: {
        required: false
        },
        mail: {
        required,
        email
        },
        messageTitle: {
        required,
        maxLength: maxLength(30)
        },
        messageContent: {
        required
        }
    },
    methods: {
        submitForm () {
        if (!this.isChecked) {
            alert('チェックボックスは必須項目です')
            return
        }
        if (this.$v.$invalid) {
            console.log('バリデーションエラー')
        }
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
            this.submitStatus = 'ERROR'
            console.log('error')
        } else {
            // do your submit logic here
            this.submitStatus = 'PENDING'
            setTimeout(() => {
            this.submitStatus = 'OK'
            console.log('success')
            }, 500)
        }
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
    height: 40px;
    margin-bottom: 20px;
}
input[type='checkbox']{
    width: 2em;
    margin: 0 !important;
}
textarea{
    width: 100%;
    padding: 8px 0;
    margin-top: 3vw;
    border: 1px solid #d0d5d8;
    border-radius: 3px;
    margin-bottom: 30px;
    height: 80px;
}
.contactItems{
    max-width: 800px;
    margin: 0 auto;
}
.contactItems p {
    display: flex;
    margin: auto 0;
}
.checkLabel {
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
