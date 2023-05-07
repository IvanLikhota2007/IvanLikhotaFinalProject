const swiper=new Swiper(".sw1",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),swipper=new Swiper(".sw2",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),gg=[{img:"./images/bg-image1.png",name:"Strategy",link:"./strategy.html"},{img:"./images/bg-image2.png",name:"FPS",link:"./fps.html"},{img:"./images/bg-image3.png",name:"RPG",link:"./rpg.html"},{img:"./images/bg-image4.png",name:"Puzzle",link:"./pzl.html"},{img:"./images/bg-image5.png",name:"Role Playing",link:"./role.html"},{img:"./images/bg-image6.png",name:"Sports",link:"./sports.html"}],bsg=[{img:"./images/best1.png",name:"Minecraft",cost:"Rp 260.000",button:"buy"},{img:"./images/best2.png",name:"Asphalt 9: Legends",cost:"Free Download",button:"buy"},{img:"./images/best3.png",name:"The Witcher 3",cost:"Rp 420.000",button:"buy"},{img:"./images/best4.png",name:"Surving Mars",cost:"Rp 440.000",button:"buy"}],pg1=[{img:"./images/popular1.png",name:"GTA V",cost:"Rp 354.000",button:"buy"},{img:"./images/popular2.png",name:"ROBLOX",cost:"Free Download",button:"buy"},{img:"./images/popular3.png",name:"NBA 2K22",cost:"Rp 297.000",button:"buy"},{img:"./images/popular4.png",name:"Dead by Daylight",cost:"Rp 214.500",button:"buy"}],pg2=[{img:"./images/popular5.png",name:"ARK: Survival Evolved",cost:"Rp 430.000",button:"buy"},{img:"./images/popular6.png",name:"Rocket League",cost:"Free Download",button:"buy"},{img:"./images/popular7.png",name:"Forza Horizon 5",cost:"Rp 356.000",button:"buy"},{img:"./images/popular8.png",name:"Cities: Skylines",cost:"Rp 590.000",button:"buy"}];function renderGameg(){let o=document.querySelector(".gameg__second");gg.forEach(e=>{var t=document.createElement("div"),a=(t.className="gameg__div",document.createElement("p")),a=(a.textContent=e.name,a.className="gameg__text_second",t.append(a),t.style.backgroundImage=`url(${e.img})`,document.createElement("a"));a.href=e.link,a.append(t),o.append(a)})}function renderBest(){let s=document.querySelector(".best__div");bsg.forEach(t=>{var e=document.createElement("div"),a=(e.className="best__nach",document.createElement("img")),a=(a.src=t.img,a.className="best__img",e.append(a),document.createElement("p")),a=(a.textContent=t.name,a.className="best__game",e.append(a),document.createElement("div")),o=(a.className="best__pdv",document.createElement("p")),o=(o.textContent=t.cost,o.className="best__cost",a.append(o),document.createElement("button"));o.addEventListener("click",()=>{var e=localStorage.getItem("shop-bascet");e?((e=JSON.parse(e)).push(t),localStorage.setItem("shop-bascet",JSON.stringify(e))):((e=[]).push(t),localStorage.setItem("shop-bascet",JSON.stringify(e)))}),o.textContent=t.button,o.className="best__button",a.append(o),e.append(a),s.append(e)})}function renderPopular1(){let s=document.querySelector(".popular__div1");pg1.forEach(e=>{var t=document.createElement("div"),a=(t.className="best__nach",document.createElement("img")),a=(a.src=e.img,a.className="best__img",t.append(a),document.createElement("p")),a=(a.textContent=e.name,a.className="best__game",t.append(a),document.createElement("div")),o=(a.className="best__pdv",document.createElement("p")),o=(o.textContent=e.cost,o.className="best__cost",a.append(o),document.createElement("button"));o.textContent=e.button,o.className="best__button",a.append(o),t.append(a),s.append(t)})}function renderPopular2(){let s=document.querySelector(".popular__div2");pg2.forEach(e=>{var t=document.createElement("div"),a=(t.className="best__nach",document.createElement("img")),a=(a.src=e.img,a.className="best__img",t.append(a),document.createElement("p")),a=(a.textContent=e.name,a.className="best__game",t.append(a),document.createElement("div")),o=(a.className="best__pdv",document.createElement("p")),o=(o.textContent=e.cost,o.className="best__cost",a.append(o),document.createElement("button"));o.textContent=e.button,o.className="best__button",a.append(o),t.append(a),s.append(t)})}renderGameg(),renderBest(),renderPopular1(),renderPopular2();const buttonbascet=document.querySelector(".header__button"),strategy=(buttonbascet.addEventListener("click",()=>{var e=JSON.parse(localStorage.getItem("shop-bascet"));let t="";e?(e.forEach(e=>{console.log(e),t+=`
      <div class='bascet-item'>
      <img src="${e.img}" class='bascet-image"/>
      <h1 class='bascet-title'>${e.name}</h1>
      <h2 class='bascet-price'>${e.cost}</h2>
      </div>
      `}),console.log(t),Swal.fire({title:"<strong>HTML <u>example</u></strong>",icon:"info",html:`<div class='bascet_wrapper'>
        ${t}
        </div>`,showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="fa fa-thumbs-up"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="fa fa-thumbs-down"></i>',cancelButtonAriaLabel:"Thumbs down"})):Swal.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="">Why do I have this issue?</a>'})}),[{img:"./images/strategy1.jpg",opus:"Описание",text:"Jurassic World Evolution 2 — долгожданное продолжение популярной игры Jurassic World Evolution от студии Frontier, которое открывает славную новую эру в истории франшизы и развивает новаторские идеи управленческого симулятора, вышедшего в 2018 году.Оригинальная история из Мира юрского периода  Пройдите захватывающий оригинальный сюжет из серии «Мир юрского периода», действие которого разворачивается после шокирующих событий фильма «Мир юрского периода 2». Компанию вам составят знаменитые персонажи фильмов — доктор Ян Малкольм (в русской версии — Илья Исаев, в английской — Джефф Голдблюм) и Клэр Диринг (в русской версии — Ирина Киреева, в английской — Брайс Даллас Ховард). Развлекайтесь с теорией хаоса Посмотрите, как могли бы развиваться события знаменитых серий «Мир юрского периода» и «Парк юрского периода», с помощью сценариев, которые охватывают времена и места из всех пяти фильмов. Проходите новые испытания, способные привести к непредсказуемому исходу.   Более реалистичные динозавры",cost:"48$",button:"buy"},{img:"./images/strategy21.jpg",opus:"Описание",text:"Создайте свою команду, установите свой управленческий стиль и создайте династию в Football Manager 2023. Приготовьтесь начать свой путь к футбольной славе.Чтобы стать элитой, менеджеры должны завоевать любовь и уважение болельщиков. В FM23 речь идет не только о выборе тактики или создании команды. Речь идет об установлении вашего стиля и создании титулованных династий. Превратите мечты болельщиков в реальность в этом сезоне, превзойдя их ожидания и доминируя над соперниками. Пришло время изменить игру. Как тебя запомнят? Описание игры  • Найдите клуб, который подходит именно вам. Оправдывайте ожидания совета директоров и побеждайте лучших на пути к главным футбольным призам. • Не просто подписывайте суперзвезд, а создавайте их. Нанимайте с умом с помощью своего закулисного персонала и предоставьте своим вундеркиндам пути к первой команде, чтобы создать команду мирового уровня. • Стиль игры вашей команды зависит от вас. Создайте уникальную стратегию на тактической доске, чтобы обеспечить большие победы и незабываемые игровые моменты. НОВИНКА ЭТОГО СЕЗОНА ЛУЧШЕЕ СОЗДАНИЕ СОСТАВА Усильте свою трансферную деятельность с помощью обновленных собраний по разведке и набору, более тесных отношений с агентами игроков и совершенно новых инструментов планирования составов. Реализуйте амбиции клуба, лучше наблюдая за своими будущими суперзвездами.",cost:"3$",button:"buy"},{img:"./images/strategy3.jpg",opus:"Описание",text:"Издание Complete Edition включает в себя дополнения Rusviet Revolution и Operation Eagle, а значит – вас ждут новые приключения в альтернативной дизельпанк-реальности 1920+. Iron Harvest — стратегия в реальном времени (RTS), действие которой происходит в альтернативной дизельпанк-реальности 1920+, сразу после окончания Первой мировой войны. Сочетающая в себе эпические одиночные и совместные кампании с напряженными сетевыми сражениями, Iron Harvest — настоящая классика жанра RTS, которую так давно ждали поклонники. Европа пытается оправиться от кровопролитных сражений Великой войны, а традиционный уклад жизни неохотно и болезненно сдает позиции под натиском научно-технического прогресса. Постепенно отстраиваются разрушенные города, а в сельской местности пришло время собирать «железную жатву». Посреди этого хаоса возникает новая угроза самому существованию Европы. Особенности игры: КЛАССИЧЕСКАЯ СТРАТЕГИЯ В РЕЖИМЕ РЕАЛЬНОГО ВРЕМЕНИ Ведите в бой десятки различных боевых единиц, грамотно используйте укрытия и разносите в щепки целые здания. Тщательно планируйте стратегию боя, применяя самые разнообразные тактики, включая",cost:"59.99$",button:"buy"}]),fps=[{img:"./images/fps1.jpg",opus:"Описание",text:"Участвуйте в крупнейшем военном конфликте в истории в Battlefield™ V. Серия возвращается к своим истокам и показывает Вторую мировую войну как никогда прежде. Сражайтесь в таких режимах, как Операции и Совместные бои, или переживите человеческие трагедии в Военных историях. Примите участие в самых непредсказуемых битвах и насладитесь самым увлекательным Battlefield в истории. Игра теперь также включает «Огненный шторм» — «королевскую битву» в стиле Battlefield. • «Огненный шторм» — это «королевская битва» в стиле Battlefield. Сражайтесь на самой большой карте в истории серии, используя эпическое оружие и технику. Добывайте припасы и сражайтесь в огненном кольце, чтобы стать последним выжившим отрядом. • Вторая мировая, какой вы её еще не видели - станьте свидетелем и участником неожиданных и при этом ключевых моментов войны. Battlefield возвращается к истокам. • Сетевые сражения на 64 игрока в хаосе войны - возглавьте свой отряд в напряженном многопользовательском сражении в Больших операциях, играйте в классические режимы, такие как Захват, или объединитесь с друзьями в Совместных боях. • Самая увлекательная игра в серии Battlefield маневрируйте на поле боя, пользуясь новыми возможностями бойцов по передвижению, укреплениями и мобильными средствами разрушения.",cost:"49.99$",button:"buy"},{img:"./images/fps2.jpg",opus:"Описание",text:"Bethesda Game Studios приглашает вас в мир Fallout 4 – своей самой грандиозной игры нового поколения с открытым миром, взявшей более 50 наград Игра года на D.I.C.E. award 2016. Вы – единственный выживший из Убежища 111, оказавшийся в мире, разрушенном ядерной войной. Именно от вас будет зависеть судьба Пустоши. Добро пожаловать домой.",cost:"19.99$",button:"buy"},{img:"./images/fps3.jpg",opus:"Описание",text:"На дворе 2034 год. Под руинами постапокалиптической Москвы в туннелях метро остатки человеческой расы сражаются со смертельными угрозами – внешними и внутренними. Мутанты крадутся по катакомбам под пустынной поверхностью и парят в отравленных небесах. Но вместо того, чтобы объединить усилия, города-станции погрязли в борьбе за абсолютную власть и устройство судного дня с армейских складов D6. Назревающая гражданская война может навсегда стереть человечество с лица Земли. В роли Артема, отягощенного виной, но движимого надеждой, вы владеете ключом к выживанию – лучом надежды в этот темный час... • Спуститесь в глубины московского метро – один из самых атмосферных миров за всю историю игр предстанет перед вами с потрясающей обновленной графикой следующего поколения и частотой обновления кадров 60FPS;",cost:"19.99$",button:"buy"}],rpg=[{img:"./images/rpg1.jpg",opus:"Описание",text:"ДОСТУПНО БЕСПЛАТНОЕ ОБНОВЛЕНИЕ ДЛЯ XBOX SERIES X|S! Cyberpunk 2077 — приключенческая ролевая игра с открытым миром, рассказывающая о киберпанке-наёмнике Ви и борьбе за жизнь в мегаполисе Найт-Сити. Мрачное будущее стало ещё более впечатляющим в улучшенной версии, в которую вошли новые дополнительные материалы. Создайте персонажа, выберите стиль игры и начните свой путь к высшей лиге, выполняя заказы, улучшая репутацию и оттачивая навыки. Ваши поступки влияют на происходящее и на весь город. В нём рождаются легенды. Какую сложат о вас? СОЗДАЙТЕ СВОЙ МИР КИБЕРПАНКА Станьте оснащённым имплантами преступником и сделайте себе имя на улицах Найт-Сити. ПОСЕЛИТЕСЬ В ГОРОДЕ БУДУЩЕГО В Найт-Сити всегда есть чем заняться, куда сходить и с кем поговорить. Место, время и способ передвижения выбираете только вы. СТАНЬТЕ ЛЕГЕНДОЙ Проворачивайте смелые аферы и заводите дружбу с харизматичными персонажами, на жизнь которых влияют ваши решения.",cost:"49.99$",button:"buy"},{img:"./images/rpg2.jpg",opus:"Описание",text:"В Deluxe-издание входит: • ELDEN RING (полная версия) • Цифровой артбук и оригинальный саундтрек Позволяет игрокам насладиться концепт-артом и музыкой из игры ELDEN RING, только в Deluxe-издании. НОВЫЙ РОЛЕВОЙ ЭКШЕН В ФЭНТЕЗИ-МИРЕ. Восстань, погасшая душа! Междуземье ждет своего повелителя. Пусть благодать приведет тебя к Кольцу Элден. • Огромный мир, полный чудес Вас ждут необъятные и удивительные земли, где захватывающие дух открытые пространства бесшовно соседствуют с запутанными подземельями. Путешествуйте по необозримым просторам этого мира, преодолевайте опасности и испытания, экспериментируйте и прокладывайте свой собственный путь к успеху. • Создайте собственного героя Настраивайте внешность и облик персонажа. Свободно комбинируйте оружие, броню и магические умения. Отправляйтесь к вершинам по собственному уникальному пути – в стремлении наращивать мышцы, чтобы стать великим воином, или постигая многие таинства магических искусств.",cost:"69.99$",button:"buy"},{img:"./images/rpg3.jpg",opus:"Описание",text:"САМАЯ ПРОСЛАВЛЕННАЯ ИГРА СВОЕГО ВРЕМЕНИ УСОВЕРШЕНСТВОВАНА ДЛЯ НОВОГО ПОКОЛЕНИЯ! ОБ ИГРЕ Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, в котором бушует война и на каждом шагу подстерегают чудовища. Вам предстоит выполнить заказ и найти Цири — Дитя Предназначения, живое оружие, способное изменить облик этого мира. Это обновленное издание включает новые предметы из сериала «Ведьмак» от Netflix (оружие, доспехи, костюмы) и многое другое! ОБНОВЛЁННАЯ ВЕРСИЯ ДЛЯ XBOX SERIES X|S Встречайте обновлённый мрачный фэнтезийный мир континента и многочисленные визуальные и технические улучшения в игре «Ведьмак 3: Дикая Охота» для Xbox Series X|S. Наслаждайтесь повышенной детализацией, ускоренной загрузкой, новыми модами, в разработке которых принимало участие игровое сообщество, трассировкой лучей в режиме реального времени и многими другими изменениями, разработанными с учётом безграничных возможностей Xbox Series X|S, включая встроенный фоторежим. ИГРАЙТЕ ЗА ПРОФЕССИОНАЛЬНОГО УБИЙЦУ ЧУДОВИЩ",cost:"49.99$",button:"buy"}],puzzle=[{img:"./images/pzl1.jpg",opus:"Описание",text:"Не зная о судьбе своей сестры, мальчик входит в LIMBO.",cost:"9.99$",button:"buy"},{img:"./images/pzl2.jpg",opus:"Описание",text:"*Для покупки It Takes Two, пожалуйста, выберите цифровую версию* В It Takes Two используется технология Smart Delivery — купите игру один раз и играйте в неё на Xbox One или Xbox Series X|S. Отправьтесь в самое безумное в жизни путешествие в игре It Takes Two, разножанровом приключении, созданном исключительно для совместного режима. Пригласите друга присоединиться бесплатно благодаря версии для друга*, радостно преодолевая многочисленные испытания. Играйте за расставшуюся пару, Коди и Мэй, двух людей, волшебством превращенных в кукол. Вместе они попадают в фантастичный мир, где за каждым углом их ждут нежданные засады, и им скрепя сердце приходится спасать свои разрушенные отношения. Улучшайте уникальные и взаимозависимые способности персонажей на каждом новом уровне. Помогайте друг другу справиться с неожиданными препятствиями и вызывающими громкий хохот моментами. Пинайте белок-бандитов в пушистые хвосты, летайте на труселях, станьте ди-джеем в шумном ночном клубе и неситесь на санках по волшебному снежному шару. Насладитесь душевным и уморительным сюжетом, в котором повествование и игровой процесс переплелись в уникально метафоричном развлечении.",cost:"бесплатно",button:"buy"},{img:"./images/pzl3.jpg",opus:"Описание",text:"“10/10” – Joystiq. “Вы просто обязаны поиграть в Brothers” – Giant Bomb Получившая признание критиков игра теперь включает: Прохождение с комментариями режиссера — почти час игрового видео с комментариями создателя игры, — Йозефа Фареса. Концепт-арты — более 20 иллюстраций и рисунков от руки с персонажами, головоломками и окружением. Саундтрек — полный саундтрек с 20 композициями из игры. Поделитесь незабываемым приключением двух братьев с друзьями благодаря уникальной системе управления, которая добавляет режим совместного прохождения в одиночную игру.",cost:"19.99$",button:"buy"}],role=[{img:"./images/role1.jpg",opus:"Описание",text:"…Затем появился огонь. Заново переживите события легендарной игры, с которой всё началось. Издание содержит основную игру и дополнение «Арториас из Бездны». Особенности: • Мрачная вселенная с богатой историей • Каждая смерть — это лишь новое начало • Разнообразие и богатство игровых возможностей • Залог успеха — обучаемость и мастерство • Уникальный сетевой режим (до 6 игроков и выделенные серверы)",cost:"39.99$",button:"buy"},{img:"./images/role2.jpg",opus:"Описание",text:"Мрачная фэнтезийная эпопея от создателей Mass Effect : Ты - Серый Страж, один из последних воинов древнего ордена хранителей. Древний враг человечества вернулся в мир, королевство охвачено гражданской войной, и судьба избрала тебя для того, чтобы объединить разрозненные земли и навсегда уничтожить архидемона. (1) Погружайся в раздробленный мир, который оказался на грани полного уничтожения. (2) Принимай сложные нравственные решения, которые повлияют на ход игры. (3) Создавай героя по своему образу и подобию или по прихоти своего воображения. (4) Вступай в яростные схватки с громадными и чудовищными тварями.",cost:"16.29$",button:"buy"},{img:"./images/role3.jpg",opus:"Описание",text:"Удостоенная более 200 наград «Игра года», Skyrim Special Edition оживляет эпический фэнтезийный мир. В это издание войдут основная игра и все дополнения, с обновленными характеристиками, такими как новый видеоряд, спецэффекты, динамическая глубина изображения и т.д. Skyrim Special Edition откроет возможности модификаций для на консолях. Новые задания, места действия, персонажи, диалоги, доспехи, оружие и многое другое – с модификациями ваши возможности в игре станут поистине безграничными. ВОЗРОЖДЕНИЕ ЭПИЧЕСКОГО ФЭНТЕЗИ Игра Skyrim предлагает совершенно новый и революционный подход к жанру эпического фэнтези. Вас ждет полноценный виртуальный мир, который вы можете исследовать так, как вам заблагорассудится. ДРУГАЯ ЖИЗНЬ В ДРУГОМ МИРЕ Будьте тем, кем вам хочется, и делайте то, к чему лежит ваша душа: свобода выбора, захватывающий сюжет и увлекательные приключения The Elder Scrolls не оставят вас равнодушными. ВЫ - ТО, ВО ЧТО ВЫ ИГРАЕТЕ Выбирайте любые из сотен видов оружия, заклинаний и способностей. Система развития персонажей позволяет играть так, как вам нравится. СРАЖАЙТЕСЬ С ДРАКОНАМИ",cost:"39.99$",button:"buy"}],sports=[{img:"./images/sports1.jpg",opus:"Описание",text:"Заряжено футболом. EA SPORTS™ FIFA 22 приближает игру к реальности с фундаментальными улучшениями игрового процесса и инновациями во всех режимах. Среди новых возможностей игрового процесса FIFA 22 — большая стабильность на последнем рубеже за счет изменения поведения вратарей, новые физические характеристики мяча, взрывные рывки, отдающие должное ускорению быстрейших футболистов мира, а также новые тактики нападения, позволяющие контролировать игру команды. Воплотите свои футбольные мечты в режиме карьеры — создайте футбольный клуб и ведите его к славе. VOLTA FOOTBALL вознаграждает вас за вашу филигранную технику с измененным игровым процессом и новыми способами играть и прогрессировать в каждом сезоне. Соберите состав в «Клубах профи» с расширенными возможностями персонализации команды и обновленным прогрессом, в котором вы полностью контролируете развитие вашего виртуального футболиста. Самые запомнившиеся футболисты вернутся в FIFA Ultimate Team™ в качестве новых Героев FUT, а благодаря новой структуре соревнований вам будет еще проще проверять свое мастерство в матчах с другими игроками. Как бы вы ни играли, вас ждет непревзойденная аутентичность — 17 000 игроков, более 700 команд и более 30 лиг, включая UEFA Champions League, CONMEBOL Libertadores и новую UEFA Europa Conference League, — только в FIFA 22. В игре предусмотрена возможность необязательных внутриигровых покупок и содержится виртуальная игровая валюта, за которую можно приобретать виртуальные внутриигровые предметы, в том числе их",cost:"59.99$",button:"buy"},{img:"./images/sports2.jpg",opus:"Описание",text:"Футбол нового уровня. Игровые возможности FIFA 21 для Xbox Series X|S дарят вам небывалые ощущения от главной игры мира: • Играйте на новом уровне с молниеносной загрузкой Производительность консолей нового поколения позволяет вам приступать к игре быстрее, чем когда бы то ни было. • Смотрите на новом уровне с камерой EA SPORTS GameCam. Новая камера, повторяющая ракурс трансляций футбольных матчей высшего уровня, позволяет наблюдать за событиями в каждом матче под новым углом. • Двигайтесь на новом уровне благодаря реализму нового уровня Благодаря улучшенному разрешению динамика лучших игроков мира выходит на новый уровень реализма. • Почувствуйте следующий уровень благодаря улучшенной физике. Расширенная система физического взаимодействия игроков на поле позволяет применять нашу технологию Real Player Motion (RPMT) в борьбе за мяч. В игре предусмотрена возможность необязательных внутриигровых покупок и содержится виртуальная игровая валюта, за которую можно приобретать случайные наборы виртуальных внутриигровых предметов. ПРИМЕНЯЮТСЯ УСЛОВИЯ И ОГРАНИЧЕНИЯ. ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ СМ.",cost:"59.29$",button:"buy"},{img:"./images/sports3.jpg",opus:"Описание",text:"EA SPORTS™ FIFA 20 на базе Frostbite™ для Xbox One воссоздает два разных аспекта главной игры мира — престиж профессионального футбола и азарт уличной игры в совершенно новом режиме EA SPORTS VOLTA. FIFA 20 — это инновации во всем: система ФУТБОЛЬНОГО ИНТЕЛЛЕКТА открывает небывалые возможности реалистичности игрового процесса, FIFA Ultimate Team™ дает еще больше способов создания команды мечты, а EA SPORTS VOLTA возвращает футбол на улицы в реалистичных матчах с минимумом игроков. ПРИМЕНЯЮТСЯ УСЛОВИЯ И ОГРАНИЧЕНИЯ. ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНЫХ СВЕДЕНИЙ СМ. https://www.ea.com/games/fifa/fifa-20/fifa-20-game-and-offer-disclaimers.",cost:"59.99$",button:"buy"}];