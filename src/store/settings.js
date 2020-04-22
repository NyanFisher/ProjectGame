export default {
    SCENARIO: {
        сhapters: 
        [
            //0
            {
                scenes: 
                [
                    //0
                    {
                        text: [
                            'Старая, скрипучая дверь со сломанным кодовым замком, она уже давно не справляется со своей самой базовой задачей. А существует лишь из снисхождения социальных служб.',
                            'За ней находится затхлое, пыльное, помещение, которому ни один ремонт уже не поможет. Потому как нельзя починить само время.',
                            'Эта атмосфера безысходности и отчаянья – источник злобы многих людей. Особенно, если ты замкнут в цикле обыденного существования, как Изаида Владиленовна Совок – ровесница этого здания.',
                            'Сегодня она не злится на непрошеных и столь же неадекватных гостей в подъезде. Обычно её толкает в дело та самая злоба, но в этот день всё тело пронизывала эфемерная лёгкость, которая тащила её наверх вместе с баулами.',
                            'Пенсионерка прошла в квартиру, в которой ясно наблюдалась нехватка мужской руки. Баулы остались на растерзание 30-ти летним внуком – паразитом, а сама бабушка поковыляла к своей кровати.',
                            'На столике рядом была пенсионерская триада: телефон для вызова скорой и не менее проблемных организаций, пульт для вызова друзей в телевизоре и стянутые резинкой таблетки для вызова побочных эффектов.',
                            'Изаида Владиленовна заняла свою яму в матрасе, и с окрыляющим ощущением, что скоро уже не надо будет терпеть и всё наладится, она закрыла глаза.',
                        ],
                        sprite_first: [null, null, null, null, null, null, null],
                        sprite_second: [null, null, null, null, null, null, null],
                        sprite_third: [
                                        null, null, 
                                        ['grandmother/grandmother_sprite.png', 0, 0],
                                        null, null, null,null,
                                    ],
                        background_img: [
                                        'backgrounds/door_building.png', 
                                        'backgrounds/front_door_inside.png', 
                                        null,
                                        null,
                                        'backgrounds/room.png',
                                        'backgrounds/room.png',
                                        null
                                    ],
                        choice: null,
                        next_scene: 1,
                        next_chapter: null,
                    },
                    //1
                    {
                        text: [
                            /*L*/'(Андрей)Она точно умерла уже? А то неудобно выйдет. ',
                            /*R*/'(Сан-Саныч)Это да. Это ты молодец. Деликатность, как говорил мой дед, сохраняет лицо и его целостность. ',
                            '*Затем он стал тычить древком в лицо пожилой женщины и кричать:',
                            '(Сан-Саныч)«Подъём, Бабка, мы коммунизм проспали!!!»',
                            'Неразборчивая ругань',
                            'Пенсионерка резко, но неуклюже села на кровать, перебирая накопленные ругательства. Тут же она в не более цензурной форме отреагировала на присутствие в её комнате наших кос, балахонов и того, что под ними.',
                            '(Бабка)Караул в свинарнике!!! Вася !!! Нас воруют!!! Позови милицию или на помощь! ',
                            'Я потерял шпаргалку, а потому за словом в карман не полез.',
                            '(Андрей)Гражданка успокойтесь. Мы не воры! Меня зовут Андрей и у меня для вас пренеприятнейшее известие. Вы умерли! – *Моя натянутая улыбка не столько успокаивала. Сколько пыталась продать загробный мир.',
                            'Бабка испуганно посмотрела на нас, а затем по указке Саши на свой бездыханный труп.',
                            '(Бабка)Ой, Ну слава тебе Господи. Я уж думала грабить пришли. – Выдохнула почившая пенсионерка. – А теперь то в рай? Вася, Вася помоги....',
                            '(Сан-Саныч)Во-первых нужно заполнить документы. Во-вторых это не нам решать. В третьих Вася вас не слышит. – перебил Александр.',
                            '(Андрей)Документы может в конторе заполним? Тут темно и мрачно',
                            '(Сан-Саныч)Смекаешь. Пойдём, бабка, бумага сама себя не замарает.',
                            '(Бабка)Какие документы, мальчики?',
                            '(Сан-Саныч)Неизбежные, как и сама смерть. И в отличие от нее же не единственные',
                            'Сан-Саныч захохотал.',
                            '(Бабка)Хорошо в ОБКОМе всю жизнь проторчала. – Вздохнула бабка – А можно я с Васей попрощаюсь хоть? Я ему на ушко нашепчу. Он ведь так услышит?',
                            'select'],
                        sprite_first: [
                            ['andrew/andrew.png',0, 0],
                            null, null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                        ],
                        sprite_second: [
                            null, 
                            ['san/san-sprite.png',0, 0],
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null,
                        ],
                        sprite_third: [null, null],
                        background_img: [
                            null, null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null, null, null
                        ],
                        choice: [0],
                        next_scene: null,
                        next_chapter: null,
                    
                    },
                    //2 - 1 ветка после выбора в ветке 1.
                    {
                        text: [
                            'Саша кивнул и показал мне большой палец.',
                            'На всякий случай я прошёл присмотреть за клиенткой. От смерти конечно не сбежишь, но можно утомительно пытаться.',
                            'На диване и вправду лежал человек, которому только и оставалось жить с бабушкой. Но кто из них проживал из жалости со вторым– вопрос. Вася был явно из тех, кого выбраковывают не только естественный отбор, но и проститутки.',
                            'Клиентка наклонилась над его ухом и трогательно попрощалась',
                            '(Бабка)Хер тебе, а не квартира, дормоед, всё на Зинку переписала.',
                            'По пути до конторы Сан-Саныч торжественно поздравлял меня. Дорога и бумажная волокита пролетели незаметно.', 
                            'Не успели оглянуться как выдыхали остаток рабочей смены с сигаретным дымом',
                            '(Сан-Саныч)Пошли на грудь накинем!',
                            '(Андрей)Я успею выспаться потом?',
                            '(Сан-Саныч)- Давай Андрюха, один раз живём, пятница же. В субботу -опохмел, проспишься в воскресенье и огурцом в понедельник.',
                            'Звучало убедительно.'
                        ],
                        sprite_first: [
                            null, null, null, null, null,
                            'not', null,
                            ['san/san-sprite.png', 0, 0],
                            null, null,
                        ],
                        sprite_second: [null, null, null, null, null, 'not', null, null, null, null,],
                        sprite_third: [
                            null, null, null, null, null,
                            'not', 
                            null,
                            ['andrew/andrew.png', 0, 0],
                            null,
                            null,
                        ],
                        background_img: [
                            null, null, null, null, null,
                            'backgrounds/street.png',
                            'backgrounds/smoking_room.png',
                            null,
                            null
                        ],
                        choice: null,
                        next_scene: 4,
                        next_chapter: null,
                    },
                    //3 - 2 ветка после выбора в ветке 1.
                    {
                        text: [
                            '(Бабка)Как это так? А я вот в телевизоре у Ванги видела. Бабушке можно…',
                            '(Андрей)Вы скончались! Вы более не бабушка! Вы прекратили существование! Вы угасли и скоро отправились к Создателю! Вы жмур, лишённый жизни, вы покоитесь с миром! Ваши обменные процессы стали историей! Вы — сломанная ветвь! Вы сыграли в ящик! Прервали нить жизни! Опустили занавес и присоединились к невидимому хору! ВЫ БЫВШАЯ БАБУШКА!',
                            'Повисло окоченевшее молчание',
                            'Сан-Саныч подошёл поближе и прошептал мне',
                            '(Сан-Саныч)Нежнее будь, не тебя же оформялют.',
                            'Затем Сан-Саныч вернулся в свой привычно-улыбчивый облик.',
                            '(Сан-Саныч)Ладно вам, Бабушка, пойдемте-пойдёмте. Щас быстренько вас оформим. И туда.',
                            'Саныч махнул рукой в светлое будущее',
                            '(Бабка)А Ленин там есть?',
                            'Женщина слегка приободрилась',
                            '(Сан-Саныч)Зависит от вас!',
                            /*fon улицы, убрать спрайты*/'Путь до конторы тянулся неудобно долго. Мой коллега и старший товарищ сказал что сам быстро всё «обстряпает» и попросил меня подождать',
                            /*фон курилки, андрей справа*/'Сигарета за сигаретой я пытался пережить то, что наговорил этой женщине. Из омута рефлексии меня извлекли слова Саныча',
                            /*саныч слева*/'(Сан-Саныч)Пошли выпьем?',
                            '(Андрей)…',
                            '(Сан саныч)Давай не ломайся. Тебе щас надо расслабиться. Со всеми новичками бывает.'
                        ],
                        sprite_first: [
                            null, null, null, null, null, null, null, null, null, null, null,
                            'not',
                            ['san/san-sprite.png', 0, 0],
                            null, null, null
                        ],
                        sprite_second: [null, null, null, null, null, null, null, null, null, null, null, 'not', null, null, null, null,],
                        sprite_third: [
                            null, null, null, null, null, null, null, null, null, null, null,
                            'not', 
                            ['andrew/andrew.png', 0, 0],
                            null, null, null, null,
                        ],
                        background_img: [
                            null, null, null, null, null, null, null, null, null, null, null,
                            'backgrounds/street.png',
                            'backgrounds/smoking_room.png',
                            null, null, null, null
                        ],
                        choice: null,
                        next_scene: 4,
                        next_chapter: null,
                    },
                    //4
                    {
                        text: [
                            /*рюмочка снаружи*/'Сан-Саныч притащил меня в однозначно питейное заведение, которое гордо называл «рюмоШной».',
                            'Это было одно из тех мест, которые рекламировала криминальная хроника.',
                            /*рюмочка внутри, справа андрюха, слева саныч*/'Мы решили взять пиво. Но поскольку ни одно название не звучало знакомо, или хотя бы пристойно, я попросил местного знатока - Саныча сделать выбор.',
                            '(Сан-Саныч)Ну Андрей, за окончание учёбы твоей',
                            '(Андрей)Стажировки.',
                            '(Сан-Саныч)Не ругайся.',
                            'Звон кружек. После нескольких глотков я одобрительно киваю. Пиво смогло превзойти мои низкие ожидания.',
                            '(Сан-Саныч)Ну, давай, рви душу.',
                            '(Андрей)Чего?',
                            '(Сан-Саныч)Рассказывай, как до нас докатился!',
                            '(Андрей)Стремительно и печально. Отучился на незаменимую профессию социолога. Тут же отслужил в нашей незаменимой армии. А там оказалось, что незаменимость сильно преувеличили. Удалось выкопать бумажную должность в одной шаражке. Там на месте меня научили, как бумаги работают, а юрист в курилке - почему они работают.',
                            '(Сан-Саныч)И почему же?',
                            '(Андрей)Потому что люди – идиоты, а идиотизм, написанный казёным языком – уже предписание.',
                            '(Сан Саныч)Это да.',
                            '(Андрей)Потом шарашка, в которой я работал развалилась, мой бывший начальник отправился за границу, бухгалтер в тюрьму, мне же, хуже спида,  на биржу труда. ',
                            'Больше всего меня поражало то, от поиска работы выматываешься куда сильнее чем, от самой работы.',
                            'Так бы Белкой в колесе и мотался по всему городу на собеседования, где работодателей не устраивали то возраст, то образование, а то и вовсе половая принадлежность, пока не увидел ваше объявление.',
                            '(Сан-Саныч)Вот это что ли? ',
                            'Саныч лениво извлёк из рюкзака бумажку с отрывной бахромой одинаковых мобильных телефонов',
                            '(Андрей)Она самая. А ты чё их с собой носишь?',
                            '(Сан- Саныч)Да начальница запрягла расклеивать, человека что ли нанимать? Вон, говорит: раз по улицам шляетесь заодно чем-нибудь полезным займётесь.',
                            '(Андрей)За свой счёт небось ещё печатали?',
                            '(Сан-Саныч)Нет, мы только расклеивали. Печатала Галя – администраторша. За свой счет.',
                            'Кружки беспощадно пустели, а желание пить наоборот.',
                            '(Сан-Саныч)Мож по водочке бахнем?',
                            'Питья конечно хотелось, но доверия к местному пойлу, у меня не больше чем к стеклоочистителю.',
                            'select',
                        ],
                        sprite_first: [
                            'not', 'not', 
                            ['san/san-sprite.png', 0, 0], 
                            null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null,
                        ],
                        sprite_second: [
                            null, null, null, null, null, null, null, null, null,  
                            null, null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null, null,
                        ],
                        sprite_third: [
                            'not', 'not', 
                            ['andrew/andrew.png', 0, 0],
                            null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null,
                        ],
                        background_img: [
                            'backgrounds/restoran.png', 
                            null, 
                            'backgrounds/restoran_inside.png',
                            null, null, null, null
                        ],
                        choice: [1],
                        next_scene: null,
                        next_chapter: null,
                    },
                    //5 после выбора ветки 4 ПИВО
                    {
                        text: [
                            '(Андрей)Я ещё пиво буду.',
                            '(Сан-Саныч)Эх молодняк. А я вот хлопну.',
                            '(Андрей)Кстати, Сан-Саныч, а как в конторе-то? Я ж кроме отдела кадров, тебя и пары оперативников никого не видел. Как у вас вообще на постоянке работается? ',
                            '(Сан-Саныч)Как в морге, только шумно, хех. Тут главное в коллектив влиться, да к сердцу всё близко не воспринимать. Как говорил ещё мой учитель - Петрович. Не бери людской печали, да дари покой.',
                            '(Андрей)Звучит как тост.',
                            'Я протянул кружку',
                            '(Сан-Саныч)Не чокаясь. 3 года назад тому оформили.',
                            '(Сан-Саныч)А работяги наши народ хороший. Плохих оформляем. Хе-хе. Шучу. Сами уходят. Тут понимаешь воля нужна, и нервы крепкие.',
                            'Сан-саныч выпивает ещё одну рюмку',
                            '(Сан-Саныч)И бухать иногда. С мужиками я думаю общий язык со временем найдёшь. А пока со мной будешь на участки ходить.',
                            'Пивная тара снова показала дно.',
                            '(Сан-Саныч) – Слушай, так разговорились. Давай ещё возьмём.',
                            'select',
                        ],
                        sprite_first: [
                            null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, 
                        ],
                        sprite_second: [
                            null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, 
                        ],
                        sprite_third: [
                            null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, 
                        ],
                        background_img: [
                            null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, 
                        ],
                        choice: [2],
                        next_scene: null,
                        next_chapter: null,
                    },
                    //6 после выбора ветки 4 ВОДКА
                    {
                        text: [
                            '(Андрей)Да, давай водку чего уж там. ',
                            '(Сан-Саныч)Вот это по-нашему. По-мужски.',
                            'Мы резко опрокинули на грудь. Саныч тут же занюхал рукавом, а я понял что закуску надо взять.',
                            'Я сходил до прилавка и взял банку маринованных огурчиков. Они жутко пахли уксусом, но лучше, чем остальное заведение. Меня вскружила хмельная лёгкость разума и тела.',
                            '(Андрей)Слушай Сан-Саныч а ты то как в канторе оказался?',
                            '(Сан-Саныч)Да времена такие, понимаешь были. Работы не было, а я искал. Сперва в родном городе в такую кантору устроился, выучился, потом сюда перебрался.',
                            '(Андрей)Тут платят больше? ',
                            'Сан-Саныч задумчиво покрутил стопку в руках.',
                            '(Сан-Саныч)Да не только…',
                            '(Андрей)А что ещ…',
                            'Сан-Саныч неестественно резко вернулся в прежнее расположение духа, и парировал мои расспросы. ',
                            '(Сан-Саныч)Тебе, то как наша кантора? Нравится? ',
                            '(Андрей)Что-то среднее между ментовкой, поликлиникой и похоронным бюро.',
                            '(Сан-Саныч)Кстати, наши главные поставщики клиентов.',
                            'select',
                        ],
                        sprite_first: [
                            null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null,
                        ],
                        sprite_second: [
                            null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null,
                        ],
                        sprite_third: [
                            null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null,
                        ],
                        background_img: [
                            null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null,
                        ],
                        choice: [3],
                        next_scene: null,
                        next_chapter: null,
                    },
                    //7 после выбора ветки 5 ПИВО
                    {
                        text: [
                            'Я сходил на стойку и взял себе ещё пенного. Оказалось, что искать у этого напитка недостатки, с каждым глотком сложнее. Пиво начало растапливать меня изнутри и плавить словарные цепи. Сан-Саныч явно засветился пуще обычного.',
                            '(Андрей)Начальство то не сильно дерёт?',
                            '(Сан-Саныч)Начальница к слову та ещё коза. Она русских ненавидит. Понимаешь? Всё узкоглазыми этими своими нас тычит.',
                            '(Андрей)Китайцами?',
                            '(Сан-Саныч)Да не, которые Япошки. Мол всё у них как у людей, а у нас совок до сих пор не развалился. Тьфу. Ни людей не уважает, ни людское, ни даже родину.',
                            '…',
                            '(Сан-Саныч) – А вот другие бабы – мировые. Что Галка – администратор. Что Машка из «посмертной ассимиляции». Твоя ровесница кстати. Смотри у меня, не обижай девочку. А то оформлю, хе-хе.',
                            'Весь остаток вечера Сан-Саныч задорно рассказывал о внутренних делах конторы, и о тонкостях работы на участке. Когда кружка опустела, Саныч закончил рассказывать очередную байку про показательных клиентов, мы попрощались. Я приподнятый пошёл до дома в поддатом настроении, чтобы проснуться в обычном.'
                        ],
                        sprite_first: [
                            null, null, null, null, null, null, null, null,
                        ],
                        sprite_second: [
                            null, null, null, null, null, null, null, null,
                        ],
                        sprite_third: [
                            null, null, null, null, null, null, null, null,
                        ],
                        background_img: [
                            null, null, null, null, null, null, null, null,
                        ],
                        choice: null ,
                        next_scene: null,
                        next_chapter: 1,
                    },
                    //8 после выбора ветки 5  ВОДКА (нет пока)
                    {
                        text: [
                            '',
                        ],
                        sprite_first: [
                            null, null, null, null, null, null, null, null,
                        ],
                        sprite_second: [
                            null, null, null, null, null, null, null, null,
                        ],
                        sprite_third: [
                            null, null, null, null, null, null, null, null,
                        ],
                        background_img: [
                            null, null, null, null, null, null, null, null,
                        ],
                        choice: null,
                        next_scene: null,
                        next_chapter: 1,
                    },
                    //9 после выбора ветки 6 ПИВО
                    {
                        text: [
                            'Спустя некоторое время я ощутил, как вои внутренности стали скручиваться в спираль.',
                            '(Андрей)Сас…Сасыч чет мне хуже… чем обычно.',
                            'Экран Смерти',
                        ],
                        sprite_first: [
                            null, null, null,
                        ],
                        sprite_second: [
                            null, null, null,
                        ],
                        sprite_third: [
                            null, null, null,
                        ],
                        background_img: [
                            null, null, null,
                        ],
                        choice: null,
                        next_scene: null,
                        next_chapter: 1,
                    },
                    //9 после выбора ветки 6 ВОДКА
                    {
                        text: [
                            'Саныч начал как травить байку за байкой, и меня начало клонить в сон. Голову заполнил тяжёлый свинцовый туман. В котором я и добрался до дома. ',
                        ],
                        sprite_first: [
                            null,
                        ],
                        sprite_second: [
                            null,
                        ],
                        sprite_third: [
                            null,
                        ],
                        background_img: [
                            null,
                        ],
                        choice: null,
                        next_scene: null,
                        next_chapter: 1,
                    },
                ]
            },
            //1
            {
                scenes: 
                [
                    //0
                    {
                        text: ['Конец'],
                        sprite_first: [
                            'not',
                        ],
                        sprite_second: [
                            'not',
                        ],
                        sprite_third: [
                            'not',
                        ],
                        background_img: [
                            null,
                        ],
                        choice: null,
                        next_scene: null,
                        next_chapter: null,
                    }
                ],
            }
        ]
    },
    CHOICE: {
        choices: [
        //0
        {
            text: ['Возможно, попробуйте - понимающе говорю я, - так будет лучше.',
                   'Нет. Он вас не услышит. Давайте не тратить время.'],
            choice: [
                {
                    scene: 2,
                }, 
                {
                    scene: 3,
                }
            ],
        },
        //1
        {
            text: ['Пиво',
                   'Водка'],
            choice: [
                {
                    scene: 5,
                }, 
                {
                    scene: 6,
                }
            ],
        },
        //2
        {
            text: ['Пиво',
                   'Водка'],
            choice: [
                {
                    scene: 7,
                }, 
                {
                    scene: 8,
                }
            ],
        },
        //3
        {
            text: ['Пиво',
                   'Водка'],
            choice: [
                {
                    scene: 9,
                }, 
                {
                    scene: 10,
                }
            ],
        }
    ]
    }
}