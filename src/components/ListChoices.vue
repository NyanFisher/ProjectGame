<template>
    <div class="choices" >
        <ul class="ul-choices" >
            <li class="li-choices" v-for="(item, index) in get_choice"  :key="item"> 
                <button class="li-choices-button" @click="next_step_from_choice(index)"><span class="li-choices-span">{{index + 1}}</span>{{item}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ListChoices',
    methods: {
        ...mapActions(['next_step_from_choice'])
    },
    computed: {
        ...mapGetters(['get_choice', 'get_name_person', 'get_first_sprite', 'get_second_sprite', 'get_third_sprite']),
        
        get_first(){
            const list_sprite = this.get_first_sprite
            if (list_sprite == '')
                return ['', '']
            else
            {
                const background = "url(" + require('@/assets/img/' + list_sprite[0]) + ")"
                const position =  list_sprite[1] + 'px ' + list_sprite[2] + 'px'
                return [background, position]
            }
        },
        get_second(){
            const list_sprite = this.get_second_sprite
            if (list_sprite == '')
                return ['', '']
            else
            {
                const background = "url(" + require('@/assets/img/' + list_sprite[0]) + ")"
                const position =  list_sprite[1] + 'px ' + list_sprite[2] + 'px'
                return [background, position]
            }
        },
        get_third(){
            const list_sprite = this.get_third_sprite
            if (list_sprite == '')
                return ['', '']
            else
            {
                const background = "url(" + require('@/assets/img/' + list_sprite[0]) + ")"
                const position =  list_sprite[1] + 'px ' + list_sprite[2] + 'px'
                return [background, position]
            }
        },
        check(){
            if (this.get_choice){
                return true
            }
            return false
        }
    },
}
</script>

<style scoped>
.choices{
    height: 705px;
    position: relative;
    z-index: 1;
    font-size: 24px;
}
.choices:fullscreen{
    height: 830px;
}
.choices:-moz-full-screen{
    height: 830px;
}

/* 
.nightchoices{
    background-color: rgba(0, 0, 0, 0.65);
} */

.ul-choices{
    width: max-content;
    margin: 0 auto;
    padding: 100px 0;
    list-style-type: none;
    color: #ffffff;
    align-self: flex-start;
}
.li-choices{
    margin-bottom: 10px;
}
.li-choices-span{
    color: #ffffff;
    display: inline-block;
    text-align: left;
    margin: 0 10px 0 0;
    font-size: 18px;
}
.li-choices-span:after{
    content: '.';
}
.li-choices-button{
    display: inline-block;
    width: 100%;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    text-align: left;
    color: #ffffff;
    border-radius: 20px;
}
.li-choices-button:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5)
}
.visually-hidden {
	position: absolute !important;
	clip: rect(1px 1px 1px 1px);
	clip: rect(1px, 1px, 1px, 1px);
	padding:0 !important;
	border:0 !important;
	height: 1px !important; 
	width: 1px !important; 
	overflow: hidden;
}
</style>