<template>
<div class='main-chat'>
    <div class="chat">
        <article v-for="item in get_chat_list" :key="item.id" class="chat-article">
            <h3 class="chat-article-h3">{{item.name_user}}</h3>
            <time class="chat-article-time" :datetime="datetime(item.datetime)[0]">{{datetime(item.datetime)[1]}}</time>
            <p class="chat-article-p">{{item.message}}</p>
        </article>
    </div>
    <form action="" class="chat-form" v-on:submit.prevent="on_submit">
            <textarea class="chat-textarea" v-model="message"></textarea>
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
            chat_list: [],
            hide: false
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
        },
        datetime(datetime_message){
            const datetime = new Date(datetime_message)
            const year = datetime.getFullYear()
            const month = String(datetime.getMonth()).padStart(2, '0')
            const day = String(datetime.getDay()).padStart(2, '0')
            const hours = String(datetime.getHours()).padStart(2, '0')
            const minutes = String(datetime.getMinutes()).padStart(2, '0')
            const seconds = datetime.getSeconds()
            const string_datetime_norm = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds 
            const string_datetime_for_time = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
            return [string_datetime_for_time, string_datetime_norm]
        },
    },
    mounted() {
        setInterval(() => {
            this.$store.dispatch('load_chat')
            const getter_chat_list = this.$store.getters.get_chat_list
            if (!this.chat_list){
                this.chat_list = getter_chat_list
                if (!this.chat_list){
                    this.hide = true
                }
                else{
                    this.hide = false
                }
            }
            else if (this.chat_list.length < getter_chat_list.length){
                this.chat_list = getter_chat_list
                this.hide = false
            }
            else{
                this.hide = true
            }
        },20000)
    }
}
</script>

<style scoped>
.main-chat{
    width: 400px;
}
.chat{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px 20px;
    overflow-anchor: revert;
    overflow-y: scroll;
}
.chat-form{
    padding: 10px 20px;
    background-color: darkgrey;
    display: flex;
    align-items: center;
    justify-content: space-around;

}
.chat-textarea{
    padding: 10px;
    width: 300px;
    resize: none;
}
.chat-button{
    padding: 20px;

    background-image: url(/img/send_message.fa7823d3.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: inherit;
    border: none;

    cursor: pointer;
}

.chat-article {
    padding: 10px 20px;
    margin-right: 0;
    margin-top: 20px;

    background-color: #ffffff;
    border-radius: 20px;
}
.chat-article:first-child{
    margin-top: 0px;
}
.chat-article-h3{
    margin: 0 70px 0 0;
    float: left;
    font-size: 12px;
}

.chat-article-time{
    font-size: 12px;
}

.chat-article-p{
    margin: 10px 0 0 ;
    padding: 10px 0;
    text-align: left;
}
</style>