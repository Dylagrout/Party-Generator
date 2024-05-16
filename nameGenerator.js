const raceBaseNames = {
    'Aarakocra': {
        neutral:{
            firstNames: ['humming', 'avocet', 'bittern', 'duck', 'dipper', 'plover', 'kestrel', 'pipit', 'redstart', 'woodpecker', 'pelican', 'wigeon', 'cockatrice', 'eagle', 'sparrow', 'anhiga', 'oriole', 'pigeon', 'owl', 'swallow', 'thraser', 'finch', 'skimmer', 'swift', 'tern', 'vulture', 'cardinal', 'bluejay', 'cuckoo', 'magpie', 'jay', 'heron', 'gull', 'chickadee', 'hawk', 'falcon', 'crane', 'ibis', 'loon', 'goose', 'raven', 'grouse', 'crow', 'warbler', 'vireo', 'mallard', 'quail', 'penguin', 'feather', 'beak', 'aerodynamic', 'wing', 'peregrine', 'swoop', 'soar', 'apex', 'sky', 'cloud', 'height', 'fly', 'talon'],
        }
    },
    'Aasimar': {
        male: {
            firstNames: ['joshua', 'simon', 'noah', 'samuel', 'nehemiah', 'ezra', 'job', 'david', 'solomon', 'saul', 'isaiah', 'jeremiah', 'ezekiel', 'daniel', 'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah', 'nahum', 'habakkuk', 'zephaniah', 'haggai', 'zechariah', 'malachi', 'titus', 'philemon', 'michael', 'gabriel', 'jacob', 'isaac'],
            lastNames: ['seraphim', 'lucifer', 'cherub', 'angel', 'heaven', 'saint', 'archangel', 'deity', 'divine', 'baptist', 'celestial', 'spirit', 'halo', 'holy', 'dominion', 'virtue', 'power', 'principality', 'throne']
        },
        female: {
            firstNames: ['galatia', 'colossi',' roma', 'ephesus', 'ruth', 'mary', 'magdalene', 'esther', 'ezra', 'sarah', 'rebekah', 'rachel', 'leah', 'miriam', 'deborah', 'abigail', 'rahab', 'tamar', 'hagar', 'hannah', 'naomi', 'eve'],
            lastNames: ['seraphim', 'lucifer', 'cherub', 'angel', 'heaven', 'saint', 'archangel', 'deity', 'divine', 'baptist', 'celestial', 'spirit', 'halo', 'holy', 'dominion', 'virtue', 'power', 'principality', 'throne']
        },
        neutral: {
            firstNames: ['genesis', 'exodus', 'levicticus', 'deuteronomy', 'number', 'herod', 'bartholomew', 'pilate', 'caesar', 'dante', 'virgil', 'angel', 'divine', 'wing', 'radiance'],
            lastNames: ['seraphim', 'lucifer', 'cherub', 'angel', 'heaven', 'saint', 'archangel', 'deity', 'divine', 'baptist', 'celestial', 'spirit', 'halo', 'holy', 'dominion', 'virtue', 'power', 'principality', 'throne']
        }
    },
    'Bugbear': {
        male: {
            firstNames: ['maul', 'wreck', 'bum', 'vermin', 'gut', 'blood', 'stink', 'club', 'gore', 'fang', 'spike', 'smash', 'big', 'strong', 'buff', 'loud', 'smelly', 'junk', 'grunt', 'roar', 'scum', 'rabble', 'beast'],
            lastNames: ['monster', 'yell', 'blurg', 'goblin', 'bug', 'dump', 'vile', 'ruin', 'bear', 'tall', 'giant', 'beast']
        },
        female: {
            firstNames: ['residue', 'waste', 'refuse', 'urine', 'feces', 'bile', 'debris', 'rubbish', 'filth', 'scrap', 'offal', 'dreg', 'cave', 'litter', 'muck', 'roar', 'scream', 'wail'],
            lastNames: ['monster', 'yell', 'blurg', 'goblin', 'bug', 'dump', 'vile', 'ruin', 'bear', 'tall', 'giant', 'beast']
        },
        neutral: {
            firstNames: ['clutter', 'trash', 'waster', 'junk', 'bag', 'toss', 'bugbear', 'dumpy', 'hurt', 'fart', 'bile'],
            lastNames: ['monster', 'yell', 'blurg', 'goblin', 'bug', 'dump', 'vile', 'ruin', 'bear', 'tall', 'giant', 'beast']
        }
    },
    'Changeling': {
        neutral: {
            firstNames: ['disguise', 'theft', 'thief', 'con', 'artist', 'scammer', 'hack', 'cheat', 'liar', 'dishonest', 'criminal', 'hiding', 'costume', 'counterfeit', 'refugee', 'runaway', 'secret', 'alone', 'hush', 'different', 'unique'],
            lastNames: ['raceless', 'nobody', 'identity', 'missing', 'lost', 'forgery', 'steal', 'fraudulent', 'notorious', 'pretend', 'trick', 'face', 'shifter']
        },
    },
    'Centaur': {
        male: {
            firstNames: ['abas', 'agrius', 'amphithemis', 'antimachus', 'apheidas', 'argeius', 'arktos', 'asbolus', 'cacus', 'chiron', 'chthonius', 'cyllarus', 'dictys', 'hodites', 'hylonome', 'medon', 'melaneus', 'nessus', 'orneus', 'perimedes', 'pholus', 'sagittarius', 'teleboas', 'thaumas'],
            lastNames: ['leaf', 'green', 'autumn', 'forest', 'rider', 'equestrian', 'horse', 'stable', 'hoof', 'prance', 'run', 'saddle', 'sylvana']
        },
        female: {
            firstNames: ['rhoecus', 'bienor','peisenor', 'eurybius', 'nomus', 'tion', 'tyus', 'apheidas', 'daphne', 'hera', 'sylvana'],
            lastNames: ['leaf', 'green', 'autumn', 'forest', 'rider', 'equestrian', 'horse', 'stable', 'hoof', 'prance', 'run', 'saddle', 'sylvana']
        },
        neutral: {
            firstNames: ['rhoecus', 'bienor','peisenor', 'eurybius', 'nomus', 'tion', 'tyus', 'apheidas', 'daphne', 'hera', 'sylvana', 'abas', 'agrius', 'amphithemis', 'antimachus', 'apheidas', 'argeius', 'arktos', 'asbolus', 'cacus', 'chiron', 'chthonius', 'cyllarus', 'dictys', 'hodites', 'hylonome', 'medon', 'melaneus', 'nessus', 'orneus', 'perimedes', 'pholus', 'sagittarius', 'teleboas', 'thaumas'],
            lastNames: ['leaf', 'green', 'autumn', 'forest', 'rider', 'equestrian', 'horse', 'stable', 'hoof', 'prance', 'run', 'saddle', 'sylvana']
        }
    },
    'Dragonborn': {
        male: {
            firstNames: ['grigori', 'ord', 'zak', 'maur', 'smaug', 'spyro', 'kazul', 'eragon', 'shenron', 'ramoth', 'igneel', 'draco', 'horntail', 'vermithrax', 'ghidorah', 'godzilla', 'ancalagon', 'glaurung', 'rhaegal', 'drogon', 'villentretenmerth', 'errour', 'fafnir', 'bahamut', 'mushu', 'yinglong', 'zhulong', 'falkor'],
            lastNames: ['hellfire', 'blaze', 'dragon', 'heat', 'inferno', 'treasure', 'hoard', 'talon', 'claw', 'fang', 'targaeryn', 'tanyn', 'kalameet', 'nest', 'ashes', 'ember', 'smoke', 'scale', 'winged', 'ancient']
        },
        female: {
            firstNames: ['sisu', 'saphira', 'syrktis', 'zyttra', 'zera', 'tiamat', 'vrtra', 'cordelia', 'haku',  'caraxes', 'chrysophylax', 'dagurashibanipal', 'faranth', 'firnen', 'glaedr', 'brisingr', 'igjarjuk', 'katla', 'meleys', 'meraxes', 'mnementh', 'selendrile', 'shurakai', 'syrax', 'temeraire', 'eldrax', 'vhagar'],
            lastNames: ['hellfire', 'blaze', 'dragon', 'heat', 'inferno', 'treasure', 'hoard', 'talon', 'claw', 'fang', 'targaeryn', 'tanyn', 'kalameet', 'nest', 'ashes', 'ember', 'smoke', 'scale', 'winged', 'ancient']
        },
        neutral: {
            firstNames: ['albion', 'chibisuke', 'balerion', 'viserion', 'deva', 'ddraig', 'finfangfoom', 'grandeeney', 'genryu', 'errol', 'kaido', 'llewellyn', 'metalicana', 'ming', 'nidhogg', 'porunga', 'dagahra', 'drake', 'keizer', 'siveth', 'aithusa', 'kilgharrah',  ],
            lastNames: ['hellfire', 'blaze', 'dragon', 'heat', 'inferno', 'treasure', 'hoard', 'talon', 'claw', 'fang', 'targaeryn', 'tanyn', 'kalameet', 'nest', 'ashes', 'ember', 'smoke', 'scale', 'winged', 'ancient']
        }
    },
    'Dwarf': {
        male: {
            firstNames: ['flint', 'thorin', 'tom', 'doc', 'tyrion', 'balin', 'dwalin', 'fili', 'kili', 'gloin' , 'nori', 'dori', 'ori', 'oin', 'bifur', 'bofur','bombur','bruenor', 'puck', 'fret', 'dopey', 'gwildor', 'warwick', 'thibbledorf', 'wicket', 'brannigan', 'gilius', 'magni', 'zakk', 'gimli', 'tippet', 'emp', 'thargas', 'alberich', 'khal', 'harsk', 'bantam' ],
            lastNames: ['pwent', 'rockbreaker', 'ironforge', 'thundermaul', 'lightninghead', 'coalheart', 'bronzebeard', 'anvilmar', 'khalundurrin', 'bonecloak', 'bludgeon', 'danthelon', 'derryck', 'luthrinn']
        },
        female: {
            firstNames: ['willow', 'golinda', 'derryth', 'eldra', 'enya', 'kree', 'nettie', 'torgga', 'efrin', 'belinda', 'edowyn', 'grimelda', ''],
            lastNames: ['pwent', 'rockbreaker', 'ironforge', 'thundermaul', 'lightninghead', 'coalheart', 'bronzebeard', 'anvilmar', 'khalundurrin', 'bonecloak', 'bludgeon', 'danthelon', 'derryck', 'luthrinn']
        },
        neutral: {
            firstNames: ['finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['pwent', 'rockbreaker', 'ironforge', 'thundermaul', 'lightninghead', 'coalheart', 'bronzebeard', 'anvilmar', 'khalundurrin', 'bonecloak', 'bludgeon', 'danthelon', 'derryck', 'luthrinn']
        }
    },
    'Eladrin': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Elf': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Shadar-Kai': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Fairy': {
        male: {
            firstNames: ['oberon', 'puck', 'cosmo', ''],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Firbolg': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },

    'Genasi': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Githyanki': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Githzerai': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Gnome': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Goblin': {
        male: {
            firstNames: ['wicket', 'teebo',],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Goliath': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Half-Elf': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Half-Orc': {
        male: {
            firstNames: ['elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Halfling': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Harengon': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Hobgoblin': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Human': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Kenku': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Kobold': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Lizardfolk': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Minotaur': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Orc': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Satyr': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Shifter': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Tabaxi': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Tiefling': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Tortle': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Triton': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
    'Yuan-Ti': {
        male: {
            firstNames: ['Elrond', 'legolas', 'thranduil', 'celeborn', 'haldir'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'Ecthelion', 'glorfindel'],
            lastNames: ['leafwalker', 'greenleaf', 'lightbringer', 'silvershadow', 'starfire']
        }
    },
};

    // define base names for other races...

    function extractSyllables(names) {
        const syllables = [];
        names.forEach(name => {
            const parts = name.match(/[^aeiou]*[aeiou]+(?:[^aeiou]*)/gi); // Improved vowel-based syllable splitting
            if (parts) {
                syllables.push(...parts);
            }
        });
        return syllables;
    }
    function generateName(syllables, minSyllables = 1, maxSyllables = 4) {
        const nameLength = Math.floor(Math.random() * (maxSyllables - minSyllables + 1)) + minSyllables;
        let name = '';
        for (let i = 0; i < nameLength; i++) {
            name += syllables[Math.floor(Math.random() * syllables.length)];
        }
        return capitalizeFirstLetter(name);
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function generateCompoundName(parts) {
        return parts[Math.floor(Math.random() * parts.length)] + parts[Math.floor(Math.random() * parts.length)];
    }
    
    
    