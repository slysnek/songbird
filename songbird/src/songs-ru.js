const songsData = [
  [       
    {
      id: 1,
      game: 'Battlefield 3',
      genre: 'Action FPS',
      description: 'Battlefield 3 is a 2011 first-person shooter video game developed by DICE and published by Electronic Arts for Microsoft Windows, PlayStation 3 and Xbox 360. It is a direct sequel to 2005\'s Battlefield 2.',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/69/Battlefield_3_Game_Cover.jpg',
      audio: './assets/music/action/battlefield3.mp3'
    },
    {
      id: 2,
      game: 'Doom 2016',
      genre: 'Action FPS',
      description: 'Doom is a 2016 first-person shooter game developed by id Software and published by Bethesda Softworks. It is the first major installment in the Doom series since 2004\'s Doom 3. Players take the role of an unnamed space marine, known as the "Doom Slayer", as he battles demonic forces from Hell that have been unleashed by the Union Aerospace Corporation within their energy-mining facility on Mars.',
      image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Doom_Cover.jpg',
      audio: './assets/music/action/doom2016.mp3'
    },
    {
      id: 3,
      game: 'Left 4 Dead 2',
      genre: 'Action FPS',
      description: 'Left 4 Dead 2 is a 2009 first-person shooter game developed and published by Valve. The sequel to Turtle Rock Studios\'s Left 4 Dead (2008) and the second game in the Left 4 Dead series',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Left4Dead2.jpg',
      audio: './assets/music/action/left4dead2.mp3'
    },
    {
      id: 4,
      game: 'Borderlands 2',
      genre: 'Action FPS',
      description: 'Borderlands 2 is a 2012 first-person shooter video game developed by Gearbox Software and published by 2K Games. Taking place five years following the events of Borderlands (2009), the game is again set on the planet of Pandora.',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Borderlands_2_cover_art.png',
      audio: './assets/music/action/borderlands2.mp3'
    },
    {
      id: 5,
      game: 'Wolfenstein: The New Order',
      genre: 'Action FPS',
      description: 'Wolfenstein: The New Order is a 2014 action-adventure first-person shooter video game developed by MachineGames and published by Bethesda Softworks. It was released on 20 May 2014 for PlayStation 3, PlayStation 4, Windows, Xbox 360, and Xbox One.',
      image: 'https://upload.wikimedia.org/wikipedia/en/9/95/Wolfenstein_The_New_Order_cover.jpg',
      audio: './assets/music/action/wolfenstein-theneworder.mp3'
    },
    {
      id: 6,
      game: 'Team Fortress 2',
      genre: 'Action FPS',
      description: 'Team Fortress 2 is a 2007 multiplayer first-person shooter game developed and published by Valve Corporation. It is the sequel to the 1996 Team Fortress mod for Quake and its 1999 remake, Team Fortress Classic.',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Tf2_standalonebox.jpg',
      audio: './assets/music/action/tf2.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'Chip and Dale',
      genre: 'Platformer',
      description: 'Chip \'n Dale Rescue Rangers is a platform game developed and published by Capcom based on the Disney animated series of the same name. Originally released for the Nintendo Entertainment System in Japan and North America in 1990, it came to Europe the next year',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Chip_%27n_Dale_Rescue_Rangers_NES_Cover.png',
      audio: './assets/music/platformers/chipanddale.mp3'
    },
    {
      id: 2,
      game: 'Super Meat Boy',
      genre: 'Platformer',
      description: 'Super Meat Boy is a 2010 platform game designed by Edmund McMillen and Tommy Refenes under the collective name of "Team Meat". It was self-published as the successor to Meat Boy, a 2008 flash game designed by McMillen and Jonathan McEntee.',
      image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/SuperMeatBoy_cover.png',
      audio: './assets/music/platformers/meatboy.mp3'
    },
    {
      id: 3,
      game: 'Mario',
      genre: 'Platformer',
      description: 'Super Mario Bros. is a platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). The successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series, it was first released in 1985 for the Famicom in Japan.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
      audio: './assets/music/platformers/mario.mp3'
    },
    {
      id: 4,
      game: 'Sonic',
      genre: 'Platformer',
      description: 'Sonic the Hedgehog is a platform game developed by Sonic Team and published by Sega for the Sega Genesis. The first game in the Sonic the Hedgehog franchise, it was released in North America in June 1991 and in PAL regions and Japan the following month. ',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg',
      audio: './assets/music/platformers/sonic.mp3'
    },
    {
      id: 5,
      game: 'Castlevania 2',
      genre: 'Platformer',
      description: 'Castlevania II: Simon\'s Quest is an action-adventure platform video game developed and published by Konami. It was originally released in Japan in 1987 for the Famicom Disk System, and in North America in 1988 for the Nintendo Entertainment System, respectively.',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/36/Castlevania_2_cover.png',
      audio: './assets/music/platformers/castlevania2.mp3'
    },
    {
      id: 6,
      game: 'Darkwing Duck',
      genre: 'Platformer',
      description: 'Darkwing Duck is a platform video game developed and published by Capcom for the Nintendo Entertainment System in 1992.[1] It was based on the Disney animated television series Darkwing Duck.',
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Darkwing_Duck_NES_Cover.png',
      audio: './assets/music/platformers/darkwing.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'FlatOut 2',
      genre: 'Racing',
      description: 'FlatOut 2 is an action racing video game developed by Bugbear Entertainment and published by Empire Interactive in Europe and Vivendi Universal Games in North America. It is the sequel to the 2004 game FlatOut.',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/40/Flatout2pc.jpg',
      audio: './assets/music/racing/flatout2.mp3'
    },
    {
      id: 2,
      game: 'NFS Most Wanted',
      genre: 'Racing',
      description: 'Need for Speed: Most Wanted is a 2005 open-world racing video game, and the ninth installment in the Need for Speed series. Developed by EA Canada and EA Black Box and published by Electronic Arts, it was released on November 11, 2005, for PlayStation 2, Xbox, GameCube, Nintendo DS, Microsoft Windows, Game Boy Advance and Xbox 360.',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg',
      audio: './assets/music/racing/mostwanted.mp3'
    },
    {
      id: 3,
      game: 'Carmageddon',
      genre: 'Racing',
      description: 'Carmageddon is a vehicular combat video game released for personal computers in 1997. It was produced by Stainless Games and published by Interplay Productions and Sales Curve Interactive. It was later ported to other platforms, and spawned a series.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/16/Carmageddon_box.jpg',
      audio: './assets/music/racing/carmageddon.mp3'
    },
    {
      id: 4,
      game: 'NFS Underground 2',
      genre: 'Racing',
      description: 'Need for Speed: Underground 2 is a 2004 racing video game developed by EA Black Box and published by Electronic Arts. It is the eighth installment in the Need for Speed series and the direct sequel to Need for Speed: Underground.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/10/Nfsu2-win-cover.jpg',
      audio: './assets/music/racing/underground2.mp3'
    },
    {
      id: 5,
      game: 'Mario Kart 8',
      genre: 'Racing',
      description: 'Mario Kart 8 is a kart racing video game developed and published by Nintendo for the Wii U in May 2014. It retains Mario Kart series game mechanics, where players control Mario franchise characters in kart racing, collecting a variety of items to hinder opponents or gain advantages in the race.',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg',
      audio: './assets/music/racing/mariokart8.mp3'
    },
    {
      id: 6,
      game: 'Rocket League',
      genre: 'Racing',
      description: 'Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Windows and PlayStation 4 in July 2015, with ports for Xbox One and Nintendo Switch being released later on.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/330px-Rocket_League_coverart.jpg',
      audio: './assets/music/racing/rocketleague.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'Skyrim',
      genre: 'RPG',
      description: 'The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following 2006\'s The Elder Scrolls IV: Oblivion, and was released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360 on November 11, 2011.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
      audio: './assets/music/rpg/skyrim.mp3'
    },
    {
      id: 2,
      game: 'Oblivion',
      genre: 'RPG',
      description: 'The Elder Scrolls IV: Oblivion is an open-world action role-playing video game developed by Bethesda Game Studios, and published by Bethesda Softworks and 2K Games. It is the fourth installment in the Elder Scrolls series, following 2002\'s The Elder Scrolls III: Morrowind, and was released for Microsoft Windows and Xbox 360 in 2006, followed by PlayStation 3 in 2007. ',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Elder_Scrolls_IV_Oblivion_cover.png',
      audio: './assets/music/rpg/oblivion.mp3'
    },
    {
      id: 3,
      game: 'Fallout 2',
      genre: 'RPG',
      description: 'Fallout 2 is a 1998 role-playing video game developed by Black Isle Studios and published by Interplay Productions. A sequel to Fallout, which had been released the previous year, it mostly uses similar graphics and game mechanics. Fallout 2 featured a considerably larger game world and a far more extensive storyline.',
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/PC_Game_Fallout_2.jpg',
      audio: './assets/music/rpg/fallout2.mp3'
    },
    {
      id: 4,
      game: 'Arcanum',
      genre: 'RPG',
      description: 'Arcanum: Of Steamworks and Magick Obscura is a 2001 role-playing video game developed by Troika Games and published by Sierra On-Line for Microsoft Windows. The game\'s story takes place within a fantasy setting currently undergoing a transformation from its own industrial revolution',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/57/Arcanum_cover_copy.jpg',
      audio: './assets/music/rpg/arcanum.mp3'
    },
    {
      id: 5,
      game: 'Dragon Age 2',
      genre: 'RPG',
      description: 'Dragon Age II is a 2011 action role-playing video game developed by BioWare and published by Electronic Arts (EA). It is the second major game in the Dragon Age series and the successor to Dragon Age: Origins (2009).',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/61/Dragon_Age_2_cover.jpg',
      audio: './assets/music/rpg/dragonage2.mp3'
    },
    {
      id: 6,
      game: 'The Witcher 3',
      genre: 'RPG',
      description: 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third game in The Witcher video game series, played in an open world with a third-person perspective.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
      audio: './assets/music/rpg/witcher3.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'Mortal Kombat',
      genre: 'Fighting',
      description: 'Mortal Kombat is an arcade fighting game developed and published by Midway in 1992. It is the first entry in the Mortal Kombat series and subsequently was released by Acclaim Entertainment for nearly every home platform of the time.',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/33/Mortal_Kombat_cover.JPG',
      audio: './assets/music/fighting/mortalkombat.mp3'
    },
    {
      id: 2,
      game: 'Street Fighter 2',
      genre: 'Fighting',
      description: 'Street Fighter II: The World Warrior[b] is a fighting game developed by Capcom and originally released for arcades in 1991. It is the second installment in the Street Fighter series and the sequel to 1987\'s Street Fighter.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1d/SF2_JPN_flyer.jpg',
      audio: './assets/music/fighting/streetfighter2.mp3'
    },
    {
      id: 3,
      game: 'Skullgirls',
      genre: 'Fighting',
      description: 'Skullgirls is a 2D fighting game developed by Reverge Labs and published by Autumn Games. In Skullgirls, players fight each other with teams of one, two, or three characters, attempting to knock out their opponents or have the most cumulative health when time runs out.',
      image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Skullgirls_cover.png',
      audio: './assets/music/fighting/skullgirls.mp3'
    },
    {
      id: 4,
      game: 'Dead or Alive 6',
      genre: 'Fighting',
      description: 'Dead or Alive 6 is a 2019 fighting game developed by Team Ninja and published by Koei Tecmo. It is the sixth main entry in the Dead or Alive fighting series.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Dead_or_Alive_6_decalless.jpg',
      audio: './assets/music/fighting/deadoralive6.mp3'
    },
    {
      id: 5,
      game: 'Tekken 7',
      genre: 'Fighting',
      description: 'Tekken 7 is a fighting game developed and published by Bandai Namco Entertainment. It is the seventh main and ninth overall installment in the Tekken series. Tekken 7 was released to arcades in March 2015.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Official_Tekken_7_Logo.jpg',
      audio: './assets/music/fighting/tekken7.mp3'
    },
    {
      id: 6,
      game: 'Soulcalibur 3',
      genre: 'Fighting',
      description: 'Soulcalibur III is a fighting video game produced by Namco as a sequel to Soulcalibur II and the fourth installment in the Soulcalibur series. It was originally released for the PlayStation 2 in 2005. An improved arcade version, Soulcalibur III: Arcade Edition, was released in 2006. It was the last Soulcalibur game to receive an arcade version, as IV onwards did not have an arcade release.',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/51/ScIIIbox.jpg',
      audio: './assets/music/fighting/soulcalibur3.mp3'
    }
  ],
  [
    {
      id: 1,
      game: 'Minecraft',
      genre: 'Sandbox',
      description: 'Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language.',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
      audio: './assets/music/sandbox/minecraft.mp3'
    },
    {
      id: 2,
      game: 'Terraria',
      genre: 'Sandbox',
      description: 'Terraria is an action-adventure sandbox game developed by Re-Logic. The game was first released for Windows on May 16, 2011, and has since been ported to several other platforms. The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world.',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg',
      audio: './assets/music/sandbox/terraria.mp3'
    },    
    {
      id: 3,
      game: 'Rimworld',
      genre: 'Sandbox',
      description: 'RimWorld is an indie top-down construction and management simulation video game by Montreal-based developer Ludeon Studios. Originally called Eclipse Colony, it was initially released as a Kickstarter crowdfunding project in early access for Microsoft Windows, macOS, and Linux in November 2013, and was officially released on October 17, 2018.',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Rimworld_logo.png/330px-Rimworld_logo.png',
      audio: './assets/music/sandbox/rimworld.mp3'
    },
    {
      id: 4,
      game: 'Starbound',
      genre: 'Sandbox',
      description: 'Starbound is an action-adventure video game developed and published by Chucklefish. Starbound takes place in a two-dimensional, procedurally generated universe which the player is able to explore in order to obtain new weapons, armor, and items, and to visit towns and villages inhabited by various intelligent lifeforms.',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Starbound_Logo.png/330px-Starbound_Logo.png',
      audio: './assets/music/sandbox/starbound.mp3'
    },
    {
      id: 5,
      game: 'Stardew Valley',
      genre: 'Sandbox',
      description: 'Stardew Valley is a simulation role-playing video game developed by Eric "ConcernedApe" Barone. Players take the role of a character who takes over their deceased grandfather\'s dilapidated farm in a place known as Stardew Valley.',
      image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png',
      audio: './assets/music/sandbox/stardewvalley.mp3'
    },
    {
      id: 6,
      game: 'Factorio',
      genre: 'Sandbox',
      description: 'Factorio is a construction and management simulation game developed by the Czech studio Wube Software. The game was announced via an Indiegogo crowdfunding campaign in 2013 and released for Windows, macOS, and Linux on 14 August 2020 following a four-year long early access phase.',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Factorio_cover.png',
      audio: './assets/music/sandbox/factorio.mp3'
    }
  ]
];

export default songsData;