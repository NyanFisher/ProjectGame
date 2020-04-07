<template>
    <div class="choices" >
        <div class="first-person" :style="{backgroundImage: get_first[0], backgroundPosition:get_first[1]}">
        </div>
        <div class="second-person" :style="{backgroundImage: get_second[0], backgroundPosition:get_second[1]}">
        </div>
        <ul class="ul-choices">
            <li class="li-choices" v-for="(item, index) in get_choice"  :key="item"> 
                <button class="li-choices-button" @click="next_step_from_choice(index)"><span class="li-choices-span">{{index}}</span>{{item}}</button>
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
        ...mapGetters(['get_choice', 'get_name_person', 'get_first_sprite', 'get_second_sprite']),
        
        get_first(){
            const list_spirite = this.get_first_sprite
            if (list_spirite == '')
                return ['', '']
            else
            {
                const background = "url(" + require('@/assets/img/' + list_spirite[1]) + ")"
                const position =  list_spirite[2] + 'px ' + list_spirite[3] + 'px'
                return [background, position]
            }
        },
        get_second(){
            const list_spirite = this.get_second_sprite
            if (list_spirite == '')
                return ['', '']
            else
            {
                const background = "url(" + require('@/assets/img/' + list_spirite[1]) + ")"
                const position =  list_spirite[2] + 'px ' + list_spirite[3] + 'px'
                return [background, position]
            }
        }
    },
}
</script>

<style scoped>
.choices{
    height: 550px;
    position: relative;
}

.first-person, .second-person {
    position: absolute;  
    padding: 50px 35px;
    background-repeat: no-repeat;
}
.first-person{
    bottom: 50px;
    left: 0; 
}
 .second-person{
    bottom: 100px;
    left: 40px; 
 }

.night_choices{
    background-color: rgba(0, 0, 0, 0.65);
}

.ul-choices{
    width: max-content;
    margin: 0 auto;
    padding: 100px 0;
    list-style-type: none;
    color: #ffffff;
    align-self: flex-start;
}
.li-choices{
    background-color: rgba(0, 0, 0, 0.25);
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
    background-color: inherit;
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