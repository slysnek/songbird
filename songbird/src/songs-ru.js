const songsData = [
  [
    {
      id: 1,
      game: 'Battlefield 3',
      genre: 'Экшен от первого лица',
      description: 'Battlefield 3 (с англ. — «Поле битвы 3») — компьютерная игра в жанре шутера от первого лица, разработанная студией EA Digital Illusions CE и изданная компанией Electronic Arts; одиннадцатая в серии Battlefield. Релиз игры для платформ ПК (ОС Windows Vista и Windows 7), PlayStation 3 и Xbox 360 состоялся в октябре 2011 года.',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/69/Battlefield_3_Game_Cover.jpg',
      audio: './assets/music/action/battlefield3.mp3'
    },
    {
      id: 2,
      game: 'Doom 2016',
      genre: 'Экшен от первого лица',
      description: 'Doom (стилизованное написание — DOOM) — мультиплатформенная компьютерная игра в жанре шутера от первого лица. Разработана компанией id Software совместно со студией Certain Affinity и издана Bethesda Softworks. Игра вышла на Windows, Xbox One и PlayStation 4 13 мая 2016 года. ',
      image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Doom_Cover.jpg',
      audio: './assets/music/action/doom2016.mp3'
    },
    {
      id: 3,
      game: 'Left 4 Dead 2',
      genre: 'Экшен от первого лица',
      description: 'Left 4 Dead 2 — компьютерная игра в жанре кооперативного шутера от первого лица с элементами survival horror, разработанная и изданная американской компанией Valve Corporation. Является сиквелом игры Left 4 Dead. Была выпущена для Microsoft Windows и Xbox 360 17 ноября 2009 года в США и 20 ноября в Евросоюзе и Великобритании. Мировая премьера состоялась в 2009 году на всемирной игровой выставке E3.',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Left4Dead2.jpg',
      audio: './assets/music/action/left4dead2.mp3'
    },
    {
      id: 4,
      game: 'Borderlands 2',
      genre: 'Экшен от первого лица',
      description: 'Borderlands 2 — компьютерная игра в жанре шутера от первого лица с элементами RPG, продолжение компьютерной игры Borderlands (2009). Отличается от своей предшественницы улучшенной системой модинга оружия и более продуманным сюжетом. Разработана Gearbox Software и выпущена 2K Games для Linux, Microsoft Windows, PlayStation 3, Mac OS X и Xbox 360, в 2014 году 6 мая в Америке и 28 мая в Европе вышла версия для PlayStation Vita.',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Borderlands_2_cover_art.png',
      audio: './assets/music/action/borderlands2.mp3'
    },
    {
      id: 5,
      game: 'Wolfenstein: The New Order',
      genre: 'Экшен от первого лица',
      description: 'Wolfenstein: The New Order — компьютерная игра в жанре шутера от первого лица, разработанная шведской компанией MachineGames и изданная Bethesda Softworks в 2014 году на платформах Windows, PlayStation 3, PlayStation 4, Xbox 360 и Xbox One. Часть серии компьютерных игр Wolfenstein.',
      image: 'https://upload.wikimedia.org/wikipedia/en/9/95/Wolfenstein_The_New_Order_cover.jpg',
      audio: './assets/music/action/wolfenstein-theneworder.mp3'
    },
    {
      id: 6,
      game: 'Team Fortress 2',
      genre: 'Экшен от первого лица',
      description: 'Team Fortress 2, дословно с англ. — «Командная крепость 2») — компьютерная игра в жанре многопользовательского шутера от первого лица, разработанная и впервые изданная компанией Valve Corporation в 2007 году в составе сборника The Orange Box для Windows и Xbox 360; позднее в этом же году состоялся релиз игры в варианте для PlayStation 3; релиз самостоятельной версии игры для Windows состоялся в 2008 году.',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Tf2_standalonebox.jpg',
      audio: './assets/music/action/tf2.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'Chip and Dale',
      genre: 'Платформер',
      description: 'Disney’s Chip ’n Dale Rescue Rangers (Миссия Чипа и Дэйла) — видеоигра по мотивам мультсериала «Чип и Дейл спешат на помощь», выпущенная Capcom для консоли NES/Famicom в 1990 году, 8 июня в США и Японии, а 12 декабря в Европе. Игра имела коммерческий успех и разошлась тиражом в 1,2 миллиона копий по всему миру, став четвёртой самой продаваемой игрой компании Capcom для NES.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Chip_%27n_Dale_Rescue_Rangers_NES_Cover.png',
      audio: './assets/music/platformers/chipanddale.mp3'
    },
    {
      id: 2,
      game: 'Super Meat Boy',
      genre: 'Платформер',
      description: 'Super Meat Boy — компьютерная инди-игра в жанре платформера, разработанная командой Team Meat, состоящей из Эдмунда МакМиллена и Томми Рефенеса. Выпущена 20 октября 2010 года для Xbox Live Arcade, 30 октября для Windows через Steam и 2 декабря через Direct2Drive.',
      image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/SuperMeatBoy_cover.png',
      audio: './assets/music/platformers/meatboy.mp3'
    },
    {
      id: 3,
      game: 'Mario',
      genre: 'Платформер',
      description: 'Super Mario Bros. (Супербратья Марио) — видеоигра в жанре платформера, разработанная и выпущенная в 1985 году японской компанией Nintendo для платформы Famicom. Занесена в «Книгу рекордов Гиннесса» как самая продаваемая игра в истории.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
      audio: './assets/music/platformers/mario.mp3'
    },
    {
      id: 4,
      game: 'Sonic',
      genre: 'Платформер',
      description: 'Sonic the Hedgehog — серия видеоигр, созданная студией Sonic Team, а также торговая марка, основанная на этой серии и принадлежащая японской компании Sega.  Первая часть серии была создана командой из семи человек, которые позже стали сотрудниками подразделения Sega Sonic Team. Изданный в 1991 году продукт оказался весьма успешным и привёл к появлению множества продолжений. ',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg',
      audio: './assets/music/platformers/sonic.mp3'
    },
    {
      id: 5,
      game: 'Castlevania 2',
      genre: 'Платформер',
      description: 'Castlevania II Simon’s Quest (яп. ドラキュラII 呪いの封印 доракюра цу: норои но фу:ин, Дракула 2: Печать проклятия) — платформер, продолжение игры Castlevania.',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/36/Castlevania_2_cover.png',
      audio: './assets/music/platformers/castlevania2.mp3'
    },
    {
      id: 6,
      game: 'Darkwing Duck',
      genre: 'Платформер',
      description: 'Darkwing Duck — компьютерная игра в жанре платформера, разработанная компанией Capcom по мотивам одноимённого мультсериала, и выпущенная в 1992 году. Главный герой — селезень с прозвищем Чёрный Плащ — должен спасти свой родной город Сен-Канар от семи злодеев. Нужно пройти все уровни и одолеть главного врага — Стального Клюва.',
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Darkwing_Duck_NES_Cover.png',
      audio: './assets/music/platformers/darkwing.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'FlatOut 2',
      genre: 'Гонки',
      description: 'FlatOut 2 — это гоночная видеоигра, разработанная компанией Bugbear Entertainment и изданная Empire Interactive в Европе и Vivendi Universal Games в Северной Америке. Она является продолжением игры FlatOut 2004 года.',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/40/Flatout2pc.jpg',
      audio: './assets/music/racing/flatout2.mp3'
    },
    {
      id: 2,
      game: 'NFS Most Wanted',
      genre: 'Гонки',
      description: 'Need for Speed: Most Wanted (рус. Жажда скорости: Самый разыскиваемый; сокр. NFSMW) — компьютерная игра серии Need for Speed в жанре аркадной автогонки, разработанная студией EA Canada и изданная компанией Electronic Arts для консолей, персональных компьютеров и мобильных телефонов в 2005 году.',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg',
      audio: './assets/music/racing/mostwanted.mp3'
    },
    {
      id: 3,
      game: 'Carmageddon',
      genre: 'Гонки',
      description: 'Carmageddon (Кармагеддон) — компьютерная игра в жанре аркадные гонки на выживание, разработанная компанией Stainless Games и изданная для персональных компьютеров в 1997 году. Позднее игра была портирована на различные платформы, и были изданы её продолжения',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/16/Carmageddon_box.jpg',
      audio: './assets/music/racing/carmageddon.mp3'
    },
    {
      id: 4,
      game: 'NFS Underground 2',
      genre: 'Гонки',
      description: 'Need for Speed: Underground 2 (сокр. NFSU2) — компьютерная игра серии Need for Speed в жанре аркадных автогонок, разработанная студией EA Black Box и изданная компанией Electronic Arts для игровых приставок, персональных компьютеров и мобильных телефонов в 2004 году. Игра является сиквелом Need for Speed: Underground.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/10/Nfsu2-win-cover.jpg',
      audio: './assets/music/racing/underground2.mp3'
    },
    {
      id: 5,
      game: 'Mario Kart 8',
      genre: 'Гонки',
      description: 'Mario Kart 8 — компьютерная игра в жанре аркады с элементами автосимулятора, восьмая в серии Mario Kart. Выход игры состоялся 29 мая 2014 года в Японии, 30 мая 2014 года в Европе и Северной Америке и 31 мая 2014 года в Австралии эксклюзивно для Wii U.',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg',
      audio: './assets/music/racing/mariokart8.mp3'
    },
    {
      id: 6,
      game: 'Rocket League',
      genre: 'Гонки',
      description: 'Rocket League — аркадная гоночная игра в жанре футбола, разработанная и изданная компанией Psyonix для Windows, PlayStation 4. Выход игры состоялся 7 июля 2015 года для платформ Windows и PlayStation 4. В 2016 году игра выпускается для Xbox One[2] и для Linux и macOS, но поддержка последних была прекращена в 2020 году. В 2017 выпускается версия для Nintendo Switch.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/330px-Rocket_League_coverart.jpg',
      audio: './assets/music/racing/rocketleague.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'Skyrim',
      genre: 'Ролевая игра',
      description: 'The Elder Scrolls V: Skyrim (дословно с англ. — «Древние свитки 5: Скайрим») — мультиплатформенная компьютерная ролевая игра с открытым миром, разработанная студией Bethesda Game Studios и выпущенная компанией Bethesda Softworks. Это пятая часть в серии The Elder Scrolls. Игра была выпущена 11 ноября 2011 года для Windows, PlayStation 3 и Xbox 360. Для игры были выпущены три загружаемых дополнения под названиями Dawnguard, Hearthfire и Dragonborn, позже объединённых в издании The Elder Scrolls V: Skyrim — Legendary Edition.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
      audio: './assets/music/rpg/skyrim.mp3'
    },
    {
      id: 2,
      game: 'Oblivion',
      genre: 'Ролевая игра',
      description: 'The Elder Scrolls IV: Oblivion — компьютерная ролевая игра в жанре action/RPG с открытым миром, разработанная американской компанией Bethesda Game Studios и выпущенная компаниями Bethesda Softworks и 2K Games для Microsoft Windows и Xbox 360 в 2006 году и для PlayStation 3 в 2007 году.',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Elder_Scrolls_IV_Oblivion_cover.png',
      audio: './assets/music/rpg/oblivion.mp3'
    },
    {
      id: 3,
      game: 'Fallout 2',
      genre: 'Ролевая игра',
      description: 'Fallout 2 — компьютерная ролевая игра с открытым миром, разработанная Black Isle Studios и изданная Interplay Entertainment в 1998 году. В странах СНГ игра была локализована и выпущена в 2006 году компанией 1С.',
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/PC_Game_Fallout_2.jpg',
      audio: './assets/music/rpg/fallout2.mp3'
    },
    {
      id: 4,
      game: 'Arcanum',
      genre: 'Ролевая игра',
      description: 'Arcanum: Of Steamworks and Magick Obscura — компьютерная игра в жанре RPG, выпущенная компанией Troika Games в 2001 годуПерейти к разделу «#Выпуск». Игра создавалась выходцами из Black Isle Studios (компания-разработчик игры Fallout): Тимом Кейном, Леонардом Боярским и Джейсоном Андерсоном; и во многом продолжает традиции Fallout.',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/57/Arcanum_cover_copy.jpg',
      audio: './assets/music/rpg/arcanum.mp3'
    },
    {
      id: 5,
      game: 'Dragon Age 2',
      genre: 'Ролевая игра',
      description: 'Dragon Age II (рус. Драконий век 2) — компьютерная видеоигра в жанре Action RPG, разработана канадской студией BioWare. Издателем выступила американская компания Electronic Arts. Продолжение ролевой игры Dragon Age: Origins, которая вышла 3 ноября 2009 года и получила множество наград и высоких оценок от критиков и игровых изданий. ',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/61/Dragon_Age_2_cover.jpg',
      audio: './assets/music/rpg/dragonage2.mp3'
    },
    {
      id: 6,
      game: 'The Witcher 3',
      genre: 'Ролевая игра',
      description: '«Ведьма́к 3: Дикая Охота» — компьютерная игра в жанре action/RPG, разработанная польской студией CD Projekt RED. Выпущенная 19 мая 2015 года на Windows, PlayStation 4 и Xbox One, затем 15 октября 2019 года на Nintendo Switch, она является повествованием, продолжающим игры «Ведьмак» (2007) и «Ведьмак 2: Убийцы королей» (2011). Это третья игра, действие которой происходит в литературной вселенной книжной серии «Ведьмак», созданной польским писателем Анджеем Сапковским.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
      audio: './assets/music/rpg/witcher3.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'Mortal Kombat',
      genre: 'Файтинг',
      description: 'Mortal Kombat (с англ. — «Смертельная битва») — мультиплатформенная компьютерная игра в жанре файтинг. Изначально разрабатывалась компанией Midway для аркадных автоматов и была издана в 1992 году[1][2]. Оригинальная игра была портирована на домашние игровые консоли и персональный компьютер. Эта игра стала первой в одноимённой серии.',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/33/Mortal_Kombat_cover.JPG',
      audio: './assets/music/fighting/mortalkombat.mp3'
    },
    {
      id: 2,
      game: 'Street Fighter 2',
      genre: 'Файтинг',
      description: 'Street Fighter II, также известная под подзаголовком The World Warrior — мультиплатформенная компьютерная игра в жанре файтинга, созданная в 1991 году японской компанией Capcom и первоначально существовавшая в виде игры для аркадных автоматов; вторая игра во франшизе Street Fighter, следующая за Street Fighter.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1d/SF2_JPN_flyer.jpg',
      audio: './assets/music/fighting/streetfighter2.mp3'
    },
    {
      id: 3,
      game: 'Skullgirls',
      genre: 'Файтинг',
      description: 'Skullgirls — мультиплатформенная компьютерная игра в жанре двухмерного файтинга, разработанная независимой студией Reverge Labs и изданная компаниями Autumn Games (англ.) и Konami. Игра была выпущена через сервисы PlayStation Network и Xbox Live Arcade в Северной Америке, Европе и Австралии в апреле—мае 2012 года и позже была издана в Японии компанией CyberFront (яп.) в сервисе PlayStation Network в феврале 2013 года.',
      image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Skullgirls_cover.png',
      audio: './assets/music/fighting/skullgirls.mp3'
    },
    {
      id: 4,
      game: 'Dead or Alive 6',
      genre: 'Файтинг',
      description: 'Dead or Alive 6 (яп. デッドオアアライブ 6) — компьютерная игра в жанре файтинг, разработчик студия Team Ninja, издатель компания Koei Tecmo. Игра вышла 1 марта 2019 года на платформах PlayStation 4, Xbox One и Пк. При переходе на новый движок восьмого поколения был добавлен эффект ран и крови при использовании ульты.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Dead_or_Alive_6_decalless.jpg',
      audio: './assets/music/fighting/deadoralive6.mp3'
    },
    {
      id: 5,
      game: 'Tekken 7',
      genre: 'Файтинг',
      description: 'Tekken 7 (яп. 鉄拳7 Тэккэн 7, «Железный Кулак 7») — игра в жанре файтинга, разработанная Bandai Namco Entertainment. Это девятая игра в серии Tekken и первая игра, которая работает на движке Unreal Engine 4. Изначально Tekken 7 вышел на аркадных автоматах в марте 2015 года в Японии.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Official_Tekken_7_Logo.jpg',
      audio: './assets/music/fighting/tekken7.mp3'
    },
    {
      id: 6,
      game: 'Soulcalibur 3',
      genre: 'Файтинг',
      description: 'Soulcalibur III (яп. ソウルキャリバーIII соуру кяриба: сури:) — компьютерная игра, продолжение популярного файтинга Soulcalibur II, является четвёртой в серии. Разработчик и издатель — Namco, релиз состоялся в 2005 году. Игра была выпущена только для Playstation 2, в отличие от предшественника, который также вышел на GameCube и Xbox, с одним уникальным персонажем для каждой версии.',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/51/ScIIIbox.jpg',
      audio: './assets/music/fighting/soulcalibur3.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'Minecraft',
      genre: 'Песочница',
      description: 'Minecraft (от англ. mine — «шахта; добывать» + craft — «ремесло; создавать») — компьютерная инди-игра в жанре песочницы, созданная шведским программистом Маркусом Перссоном и выпущенная его компанией Mojang AB. Перссон опубликовал начальную версию игры в 2009 году; в конце 2011 года была выпущена стабильная версия для ПК Microsoft Windows, распространявшаяся через официальный сайт. В последующие годы Minecraft была портирована на Linux и macOS для персональных компьютеров; на Android, iOS и Windows Phone для мобильных устройств; на игровые приставки PlayStation 4, Vita, VR, Xbox One, Nintendo 3DS, Switch и Wii U.',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
      audio: './assets/music/sandbox/minecraft.mp3'
    },
    {
      id: 2,
      game: 'Terraria',
      genre: 'Песочница',
      description: 'Terraria — компьютерная игра в жанре приключенческой песочницы, разработанная американской студией Re-Logic. Была выпущена в 2011 году для компьютеров Microsoft Windows с распространением через систему цифровой дистрибуции Steam. После выхода Terraria была портирована на другие операционные системы для персональных компьютеров и мобильных устройств, а также на игровые приставки.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg',
      audio: './assets/music/sandbox/terraria.mp3'
    },
    {
      id: 3,
      game: 'Rimworld',
      genre: 'Песочница',
      description: 'RimWorld — научно-фантастическая компьютерная игра в жанре симулятора строительства и управления, разработанная и изданная независимой канадской студией Ludeon Studios. Игра находилась в раннем доступе с 2013 года, а выпуск состоялся 17 октября 2018 года.',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Rimworld_logo.png/330px-Rimworld_logo.png',
      audio: './assets/music/sandbox/rimworld.mp3'
    },
    {
      id: 4,
      game: 'Starbound',
      genre: 'Песочница',
      description: 'Starbound — компьютерная игра, разработанная независимой британской игровой студией Chucklefish. Игра представляет собой двухмерную приключенческую песочницу. Игроку в ней предлагается исследовать обширный, процедурно генерируемый мир со множеством планет; Starbound предлагает в том числе искать или создавать оружие и другие предметы, добывать ресурсы, строить здания на поверхности планет и тому подобное.',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Starbound_Logo.png/330px-Starbound_Logo.png',
      audio: './assets/music/sandbox/starbound.mp3'
    },
    {
      id: 5,
      game: 'Stardew Valley',
      genre: 'Песочница',
      description: 'Stardew Valley — компьютерная игра в жанре симулятора жизни фермера с элементами ролевой игры, разработанная игровым дизайнером Эриком Бароном и изданная Chucklefish Games для Microsoft Windows в 2016 году. Позже игра была портирована на платформы macOS, Linux, PlayStation 4, Xbox One, Nintendo Switch, iOS и Android.',
      image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png',
      audio: './assets/music/sandbox/stardewvalley.mp3'
    },
    {
      id: 6,
      game: 'Factorio',
      genre: 'Песочница',
      description: 'Factorio — компьютерная игра в жанре симулятора строительства и управления, разрабатываемая независимой чешской студией Wube Software. Выход альфа-версии игры состоялся 25 февраля 2016 года в Steam в раннем доступе. 14 августа 2020 года игра вышла из раннего доступа с версией 1.0',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Factorio_cover.png',
      audio: './assets/music/sandbox/factorio.mp3'
    }
  ]
];

export default songsData;