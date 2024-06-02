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
            firstNames: ['disguise', 'theft', 'thief', 'con', 'artist', 'scammer', 'hack', 'liar', 'dishonest', 'criminal', 'hiding', 'costume', 'counterfeit', 'refugee', 'runaway', 'secret', 'alone', 'hush', 'different', 'unique'],
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
            firstNames: ['sisu', 'saphira', 'syrktis', 'zyttra', 'zera', 'tiamat', 'vrtra', 'cordelia', 'haku',  'caraxes', 'chrys','ophylax', 'dagurashibanipal', 'faranth', 'firnen', 'glaedr', 'brisingr', 'igjarjuk', 'katla', 'meleys', 'meraxes', 'mnementh', 'selendrile', 'shurakai', 'syrax', 'temeraire', 'eldrax', 'vhagar'],
            lastNames: ['hellfire', 'blaze', 'dragon', 'heat', 'inferno', 'treasure', 'hoard', 'talon', 'claw', 'fang', 'targaeryn', 'tanyn', 'kalameet', 'nest', 'ashes', 'ember', 'smoke', 'scale', 'winged', 'ancient']
        },
        neutral: {
            firstNames: ['albion', 'chibisuke', 'balerion', 'viserion', 'deva', 'ddraig', 'finfangfoom', 'grandeeney', 'genryu', 'errol', 'kaido', 'llewellyn', 'metalicana', 'ming', 'nidhogg', 'porunga', 'dagahra', 'drake', 'keizer', 'siveth', 'aithusa', 'kilgharrah',  ],
            lastNames: ['hell', 'fire', 'blaze', 'dragon', 'heat', 'inferno', 'treasure', 'hoard', 'talon', 'claw', 'fang', 'targaeryn', 'tanyn', 'kalameet', 'nest', 'ashes', 'ember', 'smoke', 'scale', 'winged', 'ancient']
        }
    },
    'Dwarf': {
        male: {
            firstNames: ['flint', ,'duli', 'thorin', 'tom', 'doc', 'tyrion', 'balin', 'dwalin', 'fili', 'kili', 'gloin' , 'nori', 'dori', 'ori', 'oin', 'bifur', 'bofur','bombur','bruenor', 'dopey', 'gwildor', 'warwick', 'thibbledorf', 'wicket', 'brannigan', 'gilius', 'magni', 'zakk', 'gimli', 'tippet', 'emp', 'thargas', 'alberich', 'khal', 'harsk', 'bantam'],
            lastNames: ['pwent', 'rock', 'breaker', 'iron', 'forge', 'thunder','maul', 'lightning', 'head', 'coal', 'heart', 'bronze', 'beard', 'anvilmar', 'khalundurrin', 'bone','cloak', 'bludgeon', 'danthelon', 'derryck', 'luthrinn', 'norsturn']
        },
        female: {
            firstNames: ['willow', 'golinda', 'derryth', 'eldra', 'enya', 'kree', 'nettie', 'belinda', 'edowyn', 'grimelda', 'griselda', 'gaile', 'chise', 'helge', 'ferya', 'furga', 'krona', 'dis', 'danna', 'drarthina', 'genevieve'],
            lastNames: ['pwent', 'rock', 'breaker', 'iron', 'forge', 'thunder','maul', 'lightning', 'head', 'coal', 'heart', 'bronze', 'beard', 'anvilmar', 'khalundurrin', 'bone','cloak', 'bludgeon', 'danthelon', 'derryck', 'luthrinn', 'norsturn']
        },
        neutral: {
            firstNames: ['raniel', 'galvur', 'dodlia', 'rulira', 'girgna', 'gognir', 'durthola', 'torgga', 'efrin', 'dimin', 'imli', 'puck', 'fret'],
            lastNames: ['pwent', 'rock', 'breaker', 'iron', 'forge', 'thunder','maul', 'lightning', 'head', 'coal', 'heart', 'bronze', 'beard', 'anvilmar', 'khalundurrin', 'bone','cloak', 'bludgeon', 'danthelon', 'derryck', 'luthrinn', 'norsturn']
        }
    },
    'Eladrin': {
        neutral: {
            firstNames: ['arctic', 'blizzard', 'chill', 'cold', 'winter', 'ice', 'freeze', 'frozen', 'icicle', 'snow', 'bloom', 'flower', 'sun', 'hot', 'heat', 'green', 'grow', 'fall', 'orchard', 'easter', 'christmas', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'season'],
            lastNames: ['harvest', 'solstice', 'equinox', 'leaves', 'wind', 'water', 'lake', 'calendar', 'fall', 'autumn', 'spring', 'summer', 'winter', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
        },
    },
    'Elf': {
        male: {
            firstNames: ['kaldr', 'kalski', 'winslow', 'dantiel', 'liam', 'amdir', 'amras', 'waldemar', 'celeborn', 'celegorm', 'amroth', 'berenice', 'thaliodore', 'lorrence', 'daeron', 'denethor', 'hecate', 'edel', 'sylwien', 'berend', 'lucien', 'henri', 'pascalle', 'faenor', 'franco', 'valeris', 'kemuel', 'kalen', 'kodin', 'zhivel', 'solomus', 'ahsin', 'ruman', 'lirien', 'legolas', 'aegnor', '',],
            lastNames: ['genmyar', 'valwenys', 'helehorn', 'sarrora', 'nailo', 'pathyra', 'brydiel', 'perkas', 'greneiros', 'trislana', 'xilnala', 'keyren', 'adfina', 'aravyre']
        },
        female: {
            firstNames: ['galadriel', 'arwen', 'luthien', 'tauriel', 'idril', 'toriel', 'amarie', 'anaire', 'aredhel', 'zophiel', 'cyril', 'caranthir', 'celebrian', 'ameria', 'elythria', 'dasyra', 'makaela'],
            lastNames: ['genmyar', 'valwenys', 'helehorn', 'sarrora', 'nailo', 'pathyra', 'brydiel', 'perkas', 'greneiros', 'trislana', 'xilnala', 'keyren', 'adfina', 'aravyre']
        },
        neutral: {
            firstNames: ['Finrod', 'aredhel', 'maeglin', 'ecthelion', 'glorfindel', 'amras', 'amroth', 'angrod', 'cirdan', 'curufin', 'ruvyn', 'elred', 'elaith', 'merith', 'darunia', 'aithlin'],
            lastNames: ['genmyar', 'valwenys', 'helehorn', 'sarrora', 'nailo', 'pathyra', 'brydiel', 'perkas', 'greneiros', 'trislana', 'xilnala', 'keyren', 'adfina', 'aravyre']
        }
    },
    'Shadar-Kai': {
        male: {
            firstNames: ['zori', 'meeni', 'ethak', 'zizen', 'lenak', 'tronen', 'skedos', 'motich', 'cuwan', 'nuthon', 'thannas', 'leges', 'hawel', 'oshin', 'zumethil', 'skeerayel'],
        },
        female: {
            firstNames: ['yelnintha', 'intal', 'agvali', 'andalrin', 'agrarthass', 'thendedra', 'evleliss', 'irkelra', 'inmente', 'ridra', 'lerla', 'agna', 'lani', 'halke', 'ivrella'],
        },
        neutral: {
            firstNames: ['sevas', 'ureve', 'unich', 'virrilan', 'vure', 'senel', 'roga', 'crerras', 'erledi', 'arkinthil', 'celra', 'arventith', 'yemilli', 'igvi', 'valdal'],
        }
    },
    'Fairy': {
        male: {
            firstNames: ['oberon', 'puck', 'cosmo', 'bracken', 'mountain', 'persimmon', 'caraway', 'timber', 'rock', 'anthurium', 'daybreak', 'ginko', 'berry', 'oleander', 'cedar', 'spice', 'pine', 'nova', 'aphid', 'dewdrop'],
            lastNames: ['citrus', 'puff', 'thunder', 'forest', 'crystal', 'garden', 'fig', 'lily', 'toad', 'dust', 'sparkle', 'toes', 'misty', 'twill', 'wrinkle', 'nut', 'mossy', 'wing', 'cinnamon', 'bun', 'peach', 'thistle', 'lime', 'weather']
        },
        female: {
            firstNames: ['titania', 'wanda', 'meridian', 'wrassey', 'spark', 'hyacinth', 'mora', 'nimbus', 'lychee', 'silhouette', 'topaz', 'karma', 'ella', 'fern', 'heather', 'camille', 'pearl', 'nutmeg', 'snowflake', 'tessa', 'rosepetal'],
            lastNames: ['citrus', 'puff', 'thunder', 'forest', 'crystal', 'garden', 'fig', 'lily', 'toad', 'dust', 'sparkle', 'toes', 'misty', 'twill', 'wrinkle', 'nut', 'mossy', 'wing', 'cinnamon', 'bun', 'peach', 'thistle', 'lime', 'weather']
        },
        neutral: {
            firstNames: ['twilight', 'bumble', 'robin', 'grove', 'nebula', 'nightfall', 'briar', 'moon', 'storm', 'sundew', 'cadmi', 'pyro', 'nyphadora', 'magna', 'oregano', 'lemony', 'tadpole', 'barley', 'scorpia', 'saffron'],
            lastNames: ['citrus', 'puff', 'thunder', 'forest', 'crystal', 'garden', 'fig', 'lily', 'toad', 'dust', 'sparkle', 'toes', 'misty', 'twill', 'wrinkle', 'nut', 'mossy', 'wing', 'cinnamon', 'bun', 'peach', 'thistle', 'lime', 'weather']
        }
    },
    'Firbolg': {
        male: {
            firstNames: ['beiberos', 'fenxidor', 'sarquinal', 'vajeon', 'sylydark', 'heimyar', 'norxidor', 'genhorn', 'herceran', 'roxalim', 'naelar', 'sylcan', 'waessandoral', 'thewarin', 'leo','miracan', 'rohorn'],
            lastNames: ['star', 'mane', 'leaf', 'moon', 'sun', 'ember', 'spark', 'gleam', 'beech', 'shard', 'diamond', 'spirit', 'lunar', 'gift', 'gem', 'heel', 'far', 'moss', 'shine', 'light', 'poplar', 'beam', 'willow', 'hazel', 'ash', 'kind', 'heart']
        },
        female: {
            firstNames: ['chaemoira', 'arafina', 'syldove', 'iarzana', 'vennala', 'arastina', 'wynlee', 'phisatra', 'chaefina', 'daralei', 'ravaxina', 'yllalee', 'ravarya', 'bryrel',' trishana', 'biqirelle', 'keylana', 'presralei'],
            lastNames: ['star', 'mane', 'leaf', 'moon', 'sun', 'ember', 'spark', 'gleam', 'beech', 'shard', 'diamond', 'spirit', 'lunar', 'gift', 'gem', 'heel', 'far', 'moss', 'shine', 'light', 'poplar', 'beam', 'willow', 'hazel', 'ash', 'kind', 'heart']
        },
        neutral: {
            firstNames: ['bilynn', 'perfir', 'trakian', 'pazeiros', 'zumpetor', 'cranorin', 'theren', 'grelana', 'presvaris', 'wynfina', 'trisgella', 'magxina', 'miazana', 'enlynn', 'dorqen', 'virris'],
            lastNames: ['star', 'mane', 'leaf', 'moon', 'sun', 'ember', 'spark', 'gleam', 'beech', 'shard', 'diamond', 'spirit', 'lunar', 'gift', 'gem', 'heel', 'far', 'moss', 'shine', 'light', 'poplar', 'beam', 'willow', 'hazel', 'ash', 'kind', 'heart']
        }
    },

    'Genasi': {
        neutral: {
            firstNames: ['enkindle', 'pyre', 'pyro', 'douse', 'fountain', 'tsunami', 'block', 'turf', 'slab', 'soar', 'pipe', 'murmur', 'brand', 'conflagration', 'forge', 'rush', 'wet', 'ripple', 'cobble', 'fossil', 'stone', 'garnet', 'whistle', 'mistral', 'surge'],
        }
    },
    'Githyanki': {
        male: {
            firstNames: ['garis', 'les', 'vrepilath', 'vrepin', 'xa-an', 'inath', 'dos-in', 'k-aath', 'q-aan', 'gakaduc', 'ved-aas', 'qypath', 'xipas', 'jath', 'jodordath', 'xan', 'xa-anoth', 'vyna-ath', 'vrel-aac', 'rir-anais', 'voss'],
        },
        female: {
            firstNames: ['sidru', 'yitra', 'qatra', 'panu', 'yestrath', 'b-listreg', 'perrurag', 'b-nastrela', 'zen-la', 'vetrerlil', 'irsteth', 'yere', 'qinerz-il', 'jissu', 'yaarsta', 'jitral', 'lae-zel', 'far-re', 'yin-lang', 'zaistradryl', 'qer-ra', 'aarster'],
        },
        neutral: {
            firstNames: ['ra-as', 'xa-san', 'loras', 'galimuc', 'vrem-in', 'tric', 'akith', 'vrin', 'qa-amin', 'los-aan', 'gidon', 'sitrath', 'zenu', 'sastra', 'qaah-zeth', 'serstesyl', 'zair-ra','yeh-ze', 'errel', 'sirstunil', 'salu', 'v-namral'],
        }
    },
    'Githzerai': {
        male: {
            firstNames: ['unrzth', 'saram', 'rinmiak', 'urdh', 'brallak', 'hralla', 'nirkk', 'rarra', 'zarkk', 'grandahn', 'ferg', 'urazad', 'shagh', 'dadran', 'karlla', 'dorgh', 'hutar', 'brarzth',' dragahr', 'armag', 'onlian', 'granth', 'fezth', 'drokk'],
        },
        female: {
            firstNames: ['niarin', 'umnia', 'elzin', 'ashelya', 'erzhanith', 'kanina', 'meirnera', 'shundmira', 'lirel', 'nasheah', 'umines', 'miriren', 'urayah', 'magdayah', 'elal', 'rezena', 'grinelya', 'hanla', 'rezmira', 'uralla', 'nashal', 'marmeka'],
        },
        neutral: {
            firstNames: ['uwiren', 'immal', 'umane',' kharmanith', 'xalid', 'kalahr', 'rarzth', 'dud', 'granmir', 'orod', 'barkk', 'gramir', 'dagor', 'grukh', 'xamag', 'lezina', 'ezhelzal', 'silila', 'khazayis', 'janihn', 'immililias', 'marlian', 'gankar'],
        }
    },
    'Gnome': {
        male: {
            firstNames: ['quawin', 'xalwin', 'valyur', 'zilfiz', 'orugrim', 'horbis', 'worryb', 'ronros', 'lotor', 'farhik', ''],
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
    function generateName(syllables, minSyllables, maxSyllables) {
        const numSyllables = Math.floor(Math.random() * (maxSyllables - minSyllables + 1)) + minSyllables;
        let name = '';
        for (let i = 0; i < numSyllables; i++) {
            const randomSyllable = syllables[Math.floor(Math.random() * syllables.length)];
            name += randomSyllable;
        }
        return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter
    }
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function generateCompoundName(parts) {
        return parts[Math.floor(Math.random() * parts.length)] + parts[Math.floor(Math.random() * parts.length)];
    }
    
    
    