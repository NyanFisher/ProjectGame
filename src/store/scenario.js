import settings from './settings'
export default {
    name: 'scenario',
    state: {
        number_chapter: 0,
        number_scene: 0,
        number_text: 0,
        number_choice: 0,
        number_background_img: 0,
        show_button: true,
        list_choice: [],
        last_background: '',
        first_sprite: '',
        second_sprite: '',
        third_sprite: ''

    },
    mutations: {
        set_number_in_state(state){
            const chapter = get_chapter(state)
            const scene = get_scene(chapter, state)
            
            if (state.number_text < scene.text.length - 1){
                state.number_text++
                if (!scene.background_img[state.number_background_img + 1] && state.last_background == ''){
                    state.last_background = scene.background_img[state.number_background_img]
                }
                else if (scene.background_img[state.number_background_img]){
                    state.last_background = scene.background_img[state.number_background_img]
                }
                state.number_background_img++
                
                if (state.first_sprite == '' && !scene.sprite_first[state.number_text])
                {
                    if (state.number_text != 0 && scene.sprite_first[state.number_text - 1])
                    {
                        state.first_sprite = scene.sprite_first[state.number_text - 1]
                    }
                }
                else if (scene.sprite_first[state.number_text]){
                    if (scene.sprite_first[state.number_text] == "not")
                    {
                        state.first_sprite = ''
                    }
                    else{

                        state.first_sprite = scene.sprite_first[state.number_text]
                    }
                }

                if (state.second_sprite == '' && !scene.sprite_second[state.number_text])
                {
                    if (state.number_text != 0 && scene.sprite_second[state.number_text - 1])
                    {
                        state.second_sprite = scene.sprite_second[state.number_text - 1]
                    }
                }
                else if (scene.sprite_second[state.number_text]){
                    if (scene.sprite_second[state.number_text] == "not")
                        state.second_sprite = ''
                    else
                        state.second_sprite = scene.sprite_second[state.number_text]
                }


                if (state.third_sprite == '' && !scene.sprite_third[state.number_text])
                {
                    if (state.number_text != 0 && scene.sprite_third[state.number_text - 1])
                    {
                        state.third_sprite = scene.sprite_third[state.number_text - 1]
                    }
                }
                else if (scene.sprite_third[state.number_text]){
                    if (scene.sprite_third[state.number_text] == "not")
                        state.third_sprite = ''
                    else
                        state.third_sprite = scene.sprite_third[state.number_text]
                }


                if (scene.choice != null && scene.text[state.number_text] == 'select'){
                    state.number_choice = scene.choice[0]
                    const choices = settings.CHOICE.choices[state.number_choice]

                    state.list_choice = choices.text
                    state.show_button = false
                    
                    return
                }
                return
            }
            if (scene.next_scene != null){
                state.number_scene = scene.next_scene
                state.number_text = 0
                state.number_background_img = 0
                return
            }
            if (scene.next_chapter != null){
                
                state.number_chapter = scene.next_chapter
                state.number_scene = 0
                state.number_text = 0
                state.number_background_img = 0
                return
            }


        },
        set_hh(state, value_choice){
            const choices = settings.CHOICE.choices[state.number_choice]
            const number_choice = choices.choice[value_choice].scene
            if (state.number_scene != number_choice)
            {
                state.number_text = 0
                state.number_background_img = 0
            }
            else 
            {
                state.number_text++
            }

            state.number_scene = number_choice
            state.list_choice = []
            state.show_button = true
        }
    },
    actions: {
        next_step({commit}) {
            commit('set_number_in_state')
        },
        next_step_from_choice({commit}, value_choice){
            commit('set_hh', value_choice)
        }
    },
    getters: {
        get_text(state){
            const text = run_scenario(state, "text")
            let only_text
            if (text[state.number_text] != 'select')
                only_text = text[state.number_text].replace(/^\(.*\)/, '')
            else
                only_text = text[state.number_text - 1].replace(/^\(.*\)/, '')
            return only_text
        },
        get_name_person(state){
            const text = run_scenario(state, "text")
            let name_person
            if (text[state.number_text] != 'select')
                name_person = text[state.number_text].match(/^\((.*)\)/)
            else
                name_person = text[state.number_text - 1].match(/^\((.*)\)/)
                
            if (name_person) 
                return name_person[1]
            return ''
        },
        get_choice(state){
            if (state.list_choice.length != 0)
                return state.list_choice
            return false
        },
        show_button(state){
            return state.show_button
        },
        get_background(state){
            const background = run_scenario(state, "background")
            if (background)
                return background[state.number_background_img]
            return false
        },
        get_last_background(state) {
            return state.last_background
        },
        get_first_sprite(state){
            const first_sprite = run_scenario(state, "first")
            const list_sprite = first_sprite[state.number_text]
            if (list_sprite == 'not')
                return ''
            if (Array.isArray(list_sprite)) {
                return list_sprite
            }
            if (Array.isArray(state.first_sprite)){
                return state.first_sprite
            }
            return ''
        },
        get_second_sprite(state){
            const second_sprite = run_scenario(state, "second")
            const list_sprite = second_sprite[state.number_text]
            if (list_sprite == 'not')
                return ''
            if (Array.isArray(list_sprite)) {
                return list_sprite
            }
            if (Array.isArray(state.second_sprite)){
                return state.second_sprite
            }
            return ''
        },
        get_third_sprite(state){
            const third_sprite = run_scenario(state, "third")
            const list_sprite = third_sprite[state.number_text]
            if (list_sprite == 'not')
                return ''
            if (Array.isArray(list_sprite)) {
                return list_sprite
            }
            if (Array.isArray(state.third_sprite)){
                return state.third_sprite
            }
            return ''
        },
    }
};

function run_scenario(state, value){

    const chapter = get_chapter(state)
    const scene = get_scene(chapter, state)
    if (value == "text"){
        return scene.text
    }
    if (value == "first"){
        return scene.sprite_first
    }
    if (value == "second"){
        return scene.sprite_second
    }
    if (value == "third"){
        return scene.sprite_third
    }
    if (value == "background"){
        return scene.background_img
    }
}

function get_chapter(state){
    const chapter = settings.SCENARIO.сhapters[state.number_chapter]
    return chapter
}
function get_scene(chapter, state){
    const scene = chapter.scenes[state.number_scene]
    return scene
}