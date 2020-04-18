<template>
    <div class='main-chat'>
        <div class="chat">
            <article v-for="item in get_chat_list" :key="item.id" class="chat-article" :class="{mymessage: is_my_message(item)}">
                <div class="chat-usertime">
                    <h3 class="chat-article-h3">{{item.nickname}}</h3>
                    <time class="chat-article-time" :datetime="datetime(item.datetime)[0]">{{datetime(item.datetime)[1]}}</time>
                </div>
                <p class="chat-article-p">{{item.message}}</p>
            </article>
        </div>
        <form class="chat-form"  v-on:keyup.enter="on_submit" v-on:submit.prevent="on_submit">
                <textarea class="chat-textarea" v-model="message" v-on:input="is_text"></textarea>
                <button type="submit" :class=load></button>
        </form>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "Chat",
    data() {
        return {
            message: '',
        }
    },
    computed: {
        ...mapGetters(['get_chat_list', 'loading']),
        load(){
            if (this.loading){
                return "spinner"
            }
            else {
                return 'chat-button'
            }
        },
    },
    methods: {
        ...mapActions(['set_new_message']),
        on_submit(){
            if (!this.message)
                return false
            const message = {
                message: this.message,
                datetime: Date.now()
            }
            this.set_new_message(message)
            this.message = ''
            this.$emit('changing_text', this.message)
        },
        datetime(datetime_message){
            const datetime = new Date(datetime_message)
            const year = datetime.getFullYear()
            const month = String(datetime.getMonth()).padStart(2, '0')
            const day = String(datetime.getDay()).padStart(2, '0')
            const hours = String(datetime.getHours()).padStart(2, '0')
            const minutes = String(datetime.getMinutes()).padStart(2, '0')
            const seconds =  String(datetime.getSeconds()).padStart(2, '0')
            const string_datetime_norm = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds 
            const string_datetime_for_time = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
            return [string_datetime_for_time, string_datetime_norm]
        },
        is_my_message(message){
            if (message.id_user == this.$store.getters.user.id){
                return true
            }
            else {
                return false
            }
        },
        is_text(){
            this.$emit('changing_text', this.message)
        }
    },
}
</script>

<style scoped>
.none-mes{
    border-radius: 24px !important;
    overflow: hidden;
}
.main-chat{
    width: 300px;
    padding: 10px 0px 10px 10px;
    background-color: #e8e8e8;
    border-radius: 10px;
    font-size: 14px;
    z-index: 5;
}
.main-chat:after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 85px;
    top: -19px;
    margin-top: 0px;
    border-width: 0px 15px 20px 15px;
    border-style: solid;
    border-color: #e8e8e8 transparent;
}
.mymessage{
    border-top-left-radius: 24px !important;
    border-bottom-right-radius: 0 !important;
}
.chat{
    display: flex;
    flex-direction: column;
    max-height: 500px;
    overflow-anchor: revert;
    overflow-y: scroll;
}

.chat-form{
    margin-top: 10px;
    margin-right: 0px;
    padding-right: 20px;
    width: inherit;
    max-height: 78px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.spinner{
    position: absolute;
    top: 25%;
    right: 30px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: inherit;
}
.chat-usertime{
    display: flex;
    justify-content: space-between;
}
.chat-textarea{
    padding: 17px 50px 17px 10px;
    height: 55px;
    width: 100%;
    resize: none;
    border: none;
    border-radius: 24px;
}
.chat-button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    width: 40px;
    height: 40px;
    background-image: url('../assets/img/paper-plane.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: inherit;
    border: none;
    cursor: pointer;
}

.chat-article {
    padding: 10px;
    margin-right: 0;
    margin-top: 10px;

    background-color: #ffffff;
    border-radius: 24px;
    border-top-left-radius: 0;
}
.chat-article:first-child{
    margin-top: 0px;
}
.chat-article-h3{
    margin: 0;
    font-size: 12px;
}

.chat-article-time{
    font-size: 12px;
}

.chat-article-p{
    margin: 0;
    text-align: left;
}
</style>