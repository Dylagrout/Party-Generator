const spellLists = {
    'Artificer': {
        cantrips: ['Acid Splash', 'Dancing Lights', 'Fire Bolt', 'Guidance', 'Light', 'Mage Hand', 'Mending', 'Message', 'Poison Spray', 'Prestidigitation', 'Ray of Frost', 'Resistance', 'Shocking Grasp', 'Spare the Dying', 'Thorn Whip'],
        spells: {
            1: ['Alarm', 'Cure Wounds', 'Detect Magic', 'Expeditious Retreat', 'Faerie Fire', 'False Life', 'Feather Fall', 'Grease', 'Identify', 'Jump', 'Longstrider', 'Purify Food and Drink', 'Sanctuary'],
            2: ['Aid', 'Alter Self', 'Arcane Lock', 'Blur', 'Continual Flame', 'Darkvision', 'Enhance Ability', 'Enlarge/Reduce', 'Heat Metal', 'Invisibilty', 'Lesser Restoration', 'Levitate', 'Magic Mouth', 'Magic Weapon', 'Protection from Poison', 'Rope Trick', 'See Invisibility', 'Spider Climb', 'Web'],
            3: ['Blink', 'Create Food and Water', 'Dispel Magic', 'Elemental Weapon', 'Fly', 'Glyph of Warding', 'Haste', 'Protection from Energy', 'Revivify', 'Water Breathing', 'Water Walk'],
            4: ['Arcane Eye', 'Fabricate', 'Freedom of Movement', 'Leomunds Secret Chest', 'Mordenkainens Faithful Hound', 'Mordenkainens Private Sanctum', 'Otiluke Resilient Sphere', 'Stone Shape', 'Stoneskin'],
            5: ['Animate Objects', 'Bigbys Hand', 'Creation', 'Greater Restoration', 'Wall of Stone']
        }
    },
    'Bard': {
        cantrips: ['Blade Ward', 'Dancing Lights', 'Friends', 'Light', 'Mage Hand', 'Mending', 'Message', 'Minor Illusion', 'Prestidigitation', 'True Strike', 'Vicious Mockery'],
        spells: {
            1: ['Animal Friendship', 'Bane', 'Charm Person', 'Color Spray', 'Command', 'Comprehend Languages', 'Cure Wounds', 'Detect Magic', 'Disguise Self', 'Dissonant Whispers', 'Faerie Fire', 'Feather Fall', 'Healing Word', 'Heroism', 'Identify', 'Illusory Script', 'Longstrider', 'Silent Image', 'Sleep', 'Speak with Animals', 'Tashas Hideous Laughter'],
            2: ['Aid', 'Animal Messenger', 'Blindness/Deafness', 'Calm Emotions', 'Cloud of Daggers', 'Crown of Madness', 'Detect Thoughts', 'Enhance Ability', 'Enlarge/Reduce', 'Enthrall', 'Heat Metal', 'Hold Person', 'Invisibilty', 'Knock', 'Lesser Restoration', 'Locate Animals of Plants', 'Magic Mouth', 'Mirror Image', 'Phantasmal Force', 'See Invisibility', 'Shatter', 'Silence', 'Suggestion', 'Zone of Truth'],
            3: ['Bestow Curse', 'Clairvoyance', 'Dispel Magic', 'Fear', 'Feign Death', 'Glyph of Warding', 'Hypnotic Pattern', 'Leomunds Tiny Hut', 'Major Image', 'Mass Healing Word', 'Nondetection', 'Plant Growth', 'Sending', 'Slow', 'Speak with Dead', 'Speak with Plants', 'Stinking Cloud', 'Tongues'],
            4: ['Compulsion', 'Confusion', 'Dimension Door', 'Freedom of Movement', 'Greater Invisibility', 'Hallucinatory Terrain', 'Locate Creature', 'Phantasmal Killer', 'Polymorph'],
            5: ['Animate Objects', 'Awaken', 'Dominate Person', 'Dream', 'Geas', 'Greater Restoration', 'Hold Monster', 'Legend Lore', 'Mass Cure Wounds', 'Mislead', 'Modify Memory', 'Planar Binding', 'Raise Dead', 'Rarys Telepathic Bond', 'Scrying', 'Seeming', 'Teleportation Circle'],
            6: ['Eyebite', 'Find the Path', 'Guards and Wards', 'Heroes Feast', 'Mass Suggestion', 'Ottos Irresistable Dance', 'Programmed Illsion', 'True Seeing'],
            7: ['Etherealness', 'Forcecage', 'Mirage Arcane', 'Mordenkainens Magnificent Mansion', 'Mordenkainens Sword', 'Prismatic Spray', 'Project Image', 'Regenerate', 'Resurrection', 'Symbol', 'Teleport'],
            8: ['Antipathy/Sympathy', 'Dominate Monster','Feeblemind', 'Glibness', 'Mind Blank', 'Power Word Stun'],
            9: ['Foresight', 'Power Word Heal', 'Power Word Kill', 'Prismatic Wall', 'True Polymorph']
        }
    },
    'Cleric': {
        cantrips: ['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],
        spells: {
            1: ['Bane', 'Bless', 'Command', 'Create or Destroy Water', 'Cure Wounds', 'Detect Good and Evil', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 'Inflict Wounds', 'Protection from Good and Evil', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
            2: ['Aid', 'Augury', 'Blindness/Deafness', 'Calm Emotions', 'Continual Flame', 'Enhance Ability', 'Find Traps', 'Gentle Repose', 'Hold Person', 'Lesser Restoration', 'Locate Object', 'Prayer of Healing', 'Protection from Poison', 'Silence', 'Spiritual Weapon', 'Warding Bond', 'Zone of Truth'],
            3: ['Animate Dead', 'Aura of Vitality', 'Beacon of Hope', 'Bestow Curse', 'Clairvoyance', 'Create Food and Water', 'Daylight', 'Dispel Magic', 'Feign Death', 'Glyph of Warding', 'Magic Circle', ' Mass Healing Word', 'Meld into Stone', 'Protection from Energy', 'Remove Curse', 'Revivify', 'Sending', 'Speak with Dead', 'Spirit Guardians', 'Tongues', 'Water Walk'],
            4: ['Aura of Life', 'Aura of Purity', 'Banishment', 'Control Water', 'Death Ward', 'Divination', 'Freedom of Movement', 'Guardian of Faith', 'Locate Creature', 'Stone Shape'],
            5: ['Commune', 'Contagion', 'Dispel Evil and Good', 'Flame Strike', 'Geas', 'Greater Restoration', 'Hallow', 'Insect Plague', 'Legend Lore', 'Mass Cure Wounds', 'Planar Binding', 'Raise Dead', 'Scrying'],
            6: ['Blade Barrier', 'Create Undead', 'Find the Path', 'Forbiddance', 'Harm', 'Heal', 'Heroes Feast', 'Planar Ally', 'Sunbeam', 'True Seeing', 'Word of Recall'],
            7: ['Conjure Celestial', 'Divine Word', 'Etherealness', 'Fire Storm', 'Plane Shift', 'Regenerate', 'Resurrection', 'Symbol'],
            8: ['Antimagic Field', 'Control Weather', 'Earthquake', 'Holy Aura', 'Sunburst'],
            9: ['Astral Projection', 'Gate', 'Mass Heal', 'Power Word Heal', 'True Resurrection']
        }
    },
    'Druid': {
        cantrips: ['Druidcraft', 'Guidance', 'Mending', 'Poison Spray', 'Produce Flame', 'Resistance', 'Shillelagh', 'Thorn Whip'],
        spells: {
            1: ['Animal Friendship', 'Charm Person', 'Create or Destroy Water', 'Cure Wounds', 'Detect Magic', 'Detect Poison and Disease', 'Entangle', 'Faerie Fire', 'Fog Cloud', 'Goodberry', 'Healing Word', 'Jump', 'Longstrider', 'Protection from Good and Evil', 'Purify Food and Drink', 'Speak with Animals', 'Thunderwave'],
            2: ['Animal Messenger', 'Augury', 'Barkskin', 'Beast Sense', 'Continual Flame', 'Darkvision', 'Enhance Ability', 'Enlarge/Reduce', 'Find Traps', 'Flame Blade', 'Flaming Sphere', 'Gust of Wind', 'Heat Metal', 'Hold Person', 'Lesser Restoration', 'Locate Animals of Plants', 'Locate Object', 'Moonbean', 'Pass without Trace', 'Protection from Poison', 'Spike Growth'],
            3: ['Aura of Vitality', 'Call Lightning', 'Conjure Animals', 'Daylight', 'Dispel Magic', 'Elemental Weapon', 'Feign Death', 'Meld into Stone', 'Plant Growth', 'Protection from Energy', 'Revivify', 'Sleet Storm', 'Speak with Plants', 'Water Breathing', 'Water Walk', 'Wind Wall'],
            4: ['Blight', 'Confusion', 'Conjure Minor Elementals', 'Conjure Woodland Beings', 'Control Water', 'Divination', 'Dominate Beast', 'Fire Shield', 'Freedom of Movement', 'Giant Insect', 'Grasping Vine', 'Hallucinatory Terrain', 'Ice Storm', 'Locate Creature', 'Polymorph', 'Stone Shape', 'Stoneskin', 'Wall of Fire'],
            5: ['Antilife Shell', 'Awaken', 'Commune with Nature', 'Cone of Cold', 'Conjure Elemental', 'Contagion', 'Geas', 'Greater Restoration', 'Insect Plague', 'Mass Cure Wounds', 'Planar Binding', 'Reincarnate', 'Scrying', 'Tree Stride', 'Wall of Stone'],
            6: ['Conjure Fey', 'Find the Path', 'Flesh to Stone', 'Heal', 'Heroes Feast', 'Move Earth', 'Sunbeam', 'Transport via Plants', 'Wall of Thorns', 'Wind Walk'],
            7: ['Fire Storm', 'Mirage Arcane', 'Plane Shift', 'Regenerate', 'Reverse Gravity', 'Symbol'],
            8: ['Animal Shapes', 'Antipathy/Sympathy', 'Control Weather', 'Earthquake', 'Feeblemind', 'Incendiary Cloud', 'Sunburst', 'Tsunami'],
            9: ['Foresight', 'Shapechange', 'Storm of Vengeance', 'True Resurrection']
        }
    },
    'Paladin': {
        spells: {
            1: ['Bless', 'Command', 'Compelled Duel', 'Cure Wounds', 'Detect Good and Evil', 'Detect Magic', 'Detect Poison and Disease', 'Divine Favor', 'Heroism', 'Protection from Good and Evil', 'Purify Food and Drink', 'Searing Smite', 'Shield of Faith', 'Thunderous Smite', 'Wrathful Smite'],
            2: ['Aid', 'Branding Smite', 'Find Steed', 'Gentle Repose', 'Lesser Restoration', 'Locate Object', 'Magic Weapon', 'Prayer of Healing', 'Protection from Poison', 'Warding Bond', 'Zone of Truth'],
            3: ['Aura of Vitality', 'Blinding Smite', 'Create Food and Water', 'Crusaders Mantle', 'Daylight', 'Dispel Magic', 'Elemtal Weapon', 'Magic Circle', 'Remove Curse', 'Revivify'],
            4: ['Aura of Life', 'Aura of Purity', 'Banishment', 'Death Ward', 'Locate Creature', 'Staggering Smite'],
            5: ['Banishing Smite', 'Circle of Power', 'Destructive Wave', 'Dispel Evil and Good', 'Geas', 'Raise Dead']
        }
    },
    'Ranger': {
        spells: {
            1: ['Alarm', 'Animal Friendship', 'Cure Wounds', 'Detect Magic', 'Detect Poison and Disease', 'Ensnaring Strike', 'Entangle', 'Fog Cloud', 'Goodberry', 'Hail of Thorns', 'Hunters Mark', 'Jump', 'Longstrider', 'Searing Smite', 'Speak with Animals'],
            2: ['Aid', 'Animal Messenger', 'Barkskin', 'Beast Sense', 'Cordon of Arrows', 'Darkvision', 'Enhance Ability', 'Find Traps', 'Gust of Wind', 'Lesser Restoration', 'Locate Animals or Plants', 'Locate Object', 'Magic Weapon', 'Pass without Trace', 'Protection from Poison', 'Silence', 'Spike Growth'],
            3: ['Conjure Animals', 'Conjure Barrage', 'Daylight', 'Elemental Weapon', 'Lightning Arrow', 'Meld into Stone', 'Nondetection', 'Plant Growth', 'Protection from Energy', 'Revivify', 'Speak with Plants', 'Water Breathing', 'Water Walk', 'Wind Wall'],
            4: ['Conjure Woodland Beings', 'Dominate Beast', 'Freedom of Movement', 'Grasping Vine', 'Locate Creature', 'Stoneskin'],
            5: ['Commune with Nature', 'Conjure Volley', 'Greater Restoration', 'Swift Quiver', 'Tree Stride'],
        }
    },
    'Sorcerer': {
        cantrips: ['Acid Splash', 'Blade Ward', 'Chill Touch', 'Dancing Lights', 'Fire Bolt', 'Friends', 'Light', 'Mage Hand', 'Mending', 'Message', 'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Ray of Frost', 'Shocking Grasp', 'True Strike'],
        spells: {
            1: ['Burning Hands', 'Charm Person', 'Chromatic Orb', 'Color Spray', 'Comprehend Languages', 'Detect Magic', 'Disguise Self', 'Expeditious Retreat', 'False Life', 'Feather Fall', 'Fog Cloud', 'Grease', 'Jump', 'Mage Armor', 'Magic Missile', 'Ray of Sickness', 'Shield', 'Silent Image', 'Sleep', 'Thunderwave', 'Witch Bolt'],
            2: ['Alter Self', 'Blindness/Deafness', 'Blur', 'Cloud of Daggers', 'Crown of Madness', 'Darkness', 'Darkvision', 'Detect Thoughts', 'Enhance Ability', 'Enlarge/Reduce', 'Flame Blade', 'Flaming Sphere', 'Gust of Wind', 'Hold Person', 'Invisibilty', 'Knock', 'Levitate', 'Magic Weapon', 'Mirror Image', 'Misty Step', 'Phantasmal Force', 'Scorching Ray', 'See Invisibility', 'Shatter', 'Spider Climb', 'Suggestion', 'Web'],
            3: ['Blink', 'Clairvoyance', 'Counterspell', 'Daylight', 'Dispel Magic', 'Fear', 'Fireball', 'Fly', 'Gaseous Form', 'Haste', 'Hypnotic Pattern', 'Lightning Bolt', 'Major Image', 'Protection from Energy', 'Sleet Storm', 'Slow', 'Stinking Cloud', 'Tongues', 'Vampiric Touch', 'Water Breathing', 'Water Walk'],
            4: ['Banishment', 'Blight', 'Confusion', 'Dimension Door', 'Dominate Beast', 'Fire Shield', 'Greater Invisibility', 'Ice Storm', 'Polymorph', 'Stoneskin', 'Wall of Fire'],
            5: ['Animate Objects', 'Bigbys Hand', 'Cloudkill', 'Cone of Cold', 'Creation', 'Dominate Person', 'Hold Monster', 'Insect Plague', 'Seeming', 'Telekineses', 'Teleportation Circle', 'Wall of Stone'],
            6: ['Arcane Gate', 'Chain Lightning', 'Circle of Death', 'Disintegrate', 'Eyebite', 'Flesh to Stone', 'Globe of Invulnerability', 'Mass Suggestion', 'Move Earth', 'Otilukes Freezing Sphere', 'Sunbeam', 'True Seeing'],
            7: ['Delayed Blast Fireball', 'Etherealness', 'Finger of Death', 'Fire Storm', 'Plane Shift', 'Prismatic Spray', 'Reverse Gravity', 'Teleport'],
            8: ['Demiplane', 'Dominate Monster','Earthquake', 'Incendiary Cloud', 'Power Word Stun', 'Sunburst'],
            9: ['Gate', 'Meteor Swarm', 'Power Word Kill', 'Time Stop', 'Wish']
        }
    },
    'Warlock': {
        cantrips: ['Blade Ward', 'Chill Touch', 'Eldritch Blast', 'Friends', 'Mage Hand', 'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'True Strike'],
        spells: {
            1: ['Armor of Agathys', 'Arms of Hadar', 'Charm Person', 'Comprehend Languages', 'Expeditious Retreat', 'Hellish Rebuke', 'Hex', 'Illusory Script', 'Protection from Evil and Good', 'Unseen Servant', 'Witch Bolt'],
            2: ['Cloud of Daggers', 'Crown of Madness', 'Darkness', 'Enthrall', 'Hold Person', 'Invisibilty', 'Mirror Image', 'Misty Step', 'Ray of Enfeeblement', 'Shatter', 'Spider Climb', 'Suggestion'],
            3: ['Counterspell', 'Dispel Magic', 'Fear', 'Fly', 'Gaseous Form', 'Hunger of Hadar', 'Hypnotic Pattern', 'Magic Circle', 'Major Image', 'Remove Curse', 'Tongues', 'Vampiric Touch'],
            4: ['Banishment', 'Blight', 'Dimension Door', 'Hallucinatory Terrain'],
            5: ['Contact Other Plane', 'Dream', 'Hold Monster', 'Mislead', 'Planar Binding', 'Scrying', 'Teleportation Circle'],
            6: ['Arcane Gate', 'Circle of Death', 'Conjure Fey', 'Create Undead', 'Eyebite', 'Flesh to Stone', 'Mass Suggestion', 'True Seeing'],
            7: ['Etherealness', 'Finger of Death', 'Forcecage', 'Plane Shift'],
            8: ['Demiplane', 'Dominate Monster','Feeblemind', 'Glibness', 'Power Word Stun'],
            9: ['Astral Projection', 'Foresight', 'Gate', 'Imprisonment', 'Power Word Kill', 'True Polymorph', 'Weird']
        }
    },
    'Wizard': {
        cantrips: ['Acid Splash', 'Blade Ward', 'Chill Touch', 'Dancing Lights', 'Fire Bolt', 'Friends', 'Light', 'Mage Hand', 'Mending', 'Message', 'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Ray of Frost', 'Shocking Grasp', 'True Strike'],
        spells: {
            1: [ 'Alarm', 'Burning Hands', 'Charm Person', 'Chromatic Orb', 'Color Spray', 'Comprehend Languages', 'Detect Magic', 'Disguise Self', 'Expeditious Retreat', 'False Life', 'Feather Fall', 'Find Familiar', 'Fog Cloud', 'Grease', 'Identify', 'Illusory Scirpt', 'Jump', 'Longstrider', 'Mage Armor', 'Magic Missile', 'Protection from Evil and Good', 'Ray of Sickness', 'Shield', 'Silent Image', 'Sleep', 'Tashas Hideous Laughter', 'Tensors Floating Disk', 'Thunderwave', 'Unseen Servant', 'Witch Bolt'],
            2: ['Alter Self', 'Arcane Lock', 'Augury', 'Blindness/Deafness', 'Blur', 'Cloud of Daggers', 'Continual Flame', 'Crown of Madness', 'Darkness', 'Darkvision', 'Detect Thoughts', 'Enhance Ability', 'Enlarge/Reduce', 'Flaming Sphere', 'Gentle Repose', 'Gust of Wind', 'Hold Person', 'Invisibilty', 'Knock', 'Levitate', 'Locate Object', 'Magic Mouth', 'Magic Weapon', 'Melfs Acid Arrow', 'Mirror Image', 'Misty Step', 'Nystuls Magic Aura', 'Phantasmal Force', 'Ray of Enfeeblement', 'Rope Trick', 'Scorching Ray', 'See Invisibility', 'Shatter', 'Spider Climb', 'Suggestion', 'Web'],
            3: ['Animate Dead', 'Bestow Curse', 'Blink', 'Clairvoyance', 'Counterspell', 'Dispel Magic', 'Fear', 'Feign Death', 'Fireball', 'Fly', 'Gaseous Form', 'Glyph of Warding', 'Haste', 'Hypnotic Pattern', 'Leomunds Tiny Hut', 'Lightning Bolt', 'Magic Circle', 'Major Image', 'Nondetection', 'Phantom Steed', 'Protection from Energy', 'Remove Curse', 'Sleet Storm', 'Slow', 'Speak with Dead', 'Stinking Cloud', 'Tongues', 'Vampiric Touch', 'Water Breathing'],
            4: ['Arcane Eye', 'Banishment', 'Blight', 'Confusion', 'Conjure Minor Elementals', 'Control Water', 'Dimension Door', 'Divination', 'Evards Black Tentacles', 'Fabricate', 'Fire Shield', 'Greater Invisibility', 'Hallucinatory Terrain', 'Ice Storm', 'Leomunds Secret Chest', 'Locate Creature', 'Mordenkainens Faithful Hound', 'Mordenkainens Private Sanctum', 'Otilukes Resilient Sphere', 'Phantasmal Killer', 'Polymorph', 'Stone Shape', 'Stoneskin', 'Wall of Fire'],
            5: ['Animate Objects', 'Bigbys Hand', 'Cloudkill', 'Cone of Cold', 'Conjure Elemental', 'Contact Other Plane', 'Creation', 'Dominate Person', 'Dream', 'Geas', 'Hold Monster', 'Legend Lore', 'Mislead', 'Modify Memory', 'Passwall', 'Planar Binding', 'Rarys Telepathic Bond', 'Scrying', 'Seeming', 'Telekineses', 'Teleportation Circle', 'Wall of Force', 'Wall of Stone'],
            6: ['Arcane Gate', 'Chain Lightning', 'Circle of Death', 'Contingency', 'Create Undead', 'Disintegrate', 'Drawmijs Instant Summons', 'Eyebite', 'Flesh to Stone', 'Globe of Invulnerability', 'Guards and Wards', 'Magic Jar', 'Mass Suggestion', 'Move Earth', 'Otilukes Freezing Sphere', 'Ottos Irresistable Dance', 'Programmed Illusion', 'Sunbeam', 'True Seeing', 'Wall of Ice'],
            7: ['Delayed Blast Fireball', 'Etherealness', 'Finger of Death', 'Forcecage', 'Mirage Arcane', 'Mordenkainens Magnificent Mansion', 'Mordenkainens Sword', 'Plane Shift', 'Prismatic Spray', 'Project Image', 'Reverse Gravity', 'Sequester', 'Simulacrum', 'Symbol', 'Teleport'],
            8: ['Antimagic Field', 'Antipathy/Sympathy', 'Clone', 'Control Weather', 'Demiplane', 'Dominate Monster','Feeblemind', 'Incendiary Cloud', 'Maze', 'Mind Blank', 'Power Word Stun', 'Sunburst', 'Telepathy'],
            9: ['Astral Projection', 'Foresight', 'Gate', 'Imprisonment', 'Meteor Swarm', 'Power Word Kill', 'Prismatic Wall', 'Shapechange', 'Time Stop', 'True Polymorph', 'Weird', 'Wish']
        }
    },
    // Define other classes similarly
};

const classes = {
    'Artificer': {
        hitDie: 8,
        selectableSkills: ['Arcana', 'History', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Sleight of Hand'],
        skillCount: 2,
        cantripsByLevel: [2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],  // Example cantrips
        spellSlotsByLevel: [
            [2],                   // Level 1
            [2],                   // Level 2
            [3],                // Level 3
            [3],                // Level 4
            [4, 2],             // Level 5
            [4, 2],                   // Level 6
            [4, 3],                   // Level 7
            [4, 3],                // Level 8
            [4, 3, 2],                // Level 9
            [4, 3, 2],             // Level 10
            [4, 3, 3],                   // Level 11
            [4, 3, 3],                 // Level 12
            [4, 3, 3, 1],                 // Level 13
            [4, 3, 3, 1],                // Level 14
            [4, 3, 3, 2],             // Level 15
            [4, 3, 3, 2],                   // Level 16
            [4, 3, 3, 3, 1],                   // Level 17
            [4, 3, 3, 3, 1],                // Level 18
            [4, 3, 3, 3, 2],                // Level 19
            [4, 3, 3, 3, 2]              // Level 20
        ],
        savingThrows: ['Constitution', 'Intelligence'],
        armorProficiencies: ['LightArmor', 'MediumArmor', 'Shields'],
        weaponProficiencies: ['SimpleWeapons', 'Firearms'],
        toolProficiencies: ['Thieves Tools', 'Tinkers Tools', 'Artisans Tools'],
        featsEvery: 4,
        features: {
            'Infusions': { 2: '4', 6: '6', 10: '8', 14: '10', 18: '12'},
        },
    },
    'Barbarian': {
        hitDie: 12,
        selectableSkills: ['Animal Handling', 'Athletics', 'Intimidation', 'Medicine', 'Nature', 'Perception', 'Survival'],
        skillCount: 2,
        cantripsByLevel: [0],
        spellSlotsByLevel: [
            [0]            // Level 20
        ],
        savingThrows: ['Strength', 'Constitution'],
        armorProficiencies: ['LightArmor', 'MediumArmor', 'Shields'],
        weaponProficiencies: ['SimpleWeapons', 'MartialWeapons'],
        toolProficiencies: [''],
        featsEvery: 4,
        features: {
            'Rage': { 1: '2', 3: '3', 4:'3', 5: '3', 6: '4', 7: '4', 8: '4', 9: '4', 10: '4', 11: '4', 12: '5', 13: '5', 14: '5', 15: '5', 16: '5', 17: '6', 18: '6', 19: '6', 20: 'Unlimited' },
            'Unarmored Defense': { 1: true },
            'Danger Sense': { 2: true },
            'Reckless Attack': { 2: true },
            'Primal Path': { 3: true },
        },
    },
    'Bard': {
        hitDie: 8,
        selectableSkills: ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'],
        skillCount: 3,
        cantripsByLevel: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],  // Example cantrips
        spellSlotsByLevel: [
            [2],                   // Level 1
            [3],                   // Level 2
            [4, 2],                // Level 3
            [4, 3],                // Level 4
            [4, 3, 2],             // Level 5
            [4, 3, 3],                   // Level 6
            [4, 3, 3, 1],                   // Level 7
            [4, 3, 3, 2],                // Level 8
            [4, 3, 3, 3, 1],                // Level 9
            [4, 3, 3, 3, 2],             // Level 10
            [4, 3, 3, 3, 2, 1],                   // Level 11
            [4, 3, 3, 3, 2, 1],                 // Level 12
            [4, 3, 3, 3, 2, 1, 1],                 // Level 13
            [4, 3, 3, 3, 2, 1, 1],                // Level 14
            [4, 3, 3, 3, 2, 1, 1, 1],             // Level 15
            [4, 3, 3, 3, 2, 1, 1, 1],                   // Level 16
            [4, 3, 3, 3, 2, 1, 1, 1, 1],                   // Level 17
            [4, 3, 3, 3, 3, 1, 1, 1, 1],                // Level 18
            [4, 3, 3, 3, 3, 2, 1, 1, 1],                // Level 19
            [4, 3, 3, 3, 3, 2, 2, 1, 1]              // Level 20
        ],
        savingThrows: ['Dexterity', 'Charisma'],
        armorProficiencies: ['LightArmor'],
        weaponProficiencies: ['SimpleWeapons', "Hand Crossbows", "Longswords", "Rapiers", "Shortswords"],
        toolProficiencies: ['MusicalInstruments'],
        featsEvery: 4,
        features: {
            'Bardic Inspiration': { 1: 'd6', 5: 'd8', 10: 'd10', 15: 'd12' },
        },
    },
    'Cleric': {
        hitDie: 8,
        selectableSkills: ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion'],
        skillCount: 2,
        cantripsByLevel: [3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],  // Example cantrips
        spellSlotsByLevel: [
            [2],                   // Level 1
            [3],                   // Level 2
            [4, 2],                // Level 3
            [4, 3],                // Level 4
            [4, 3, 2],             // Level 5
            [4, 3, 3],                   // Level 6
            [4, 3, 3, 1],                   // Level 7
            [4, 3, 3, 2],                // Level 8
            [4, 3, 3, 3, 1],                // Level 9
            [4, 3, 3, 3, 2],             // Level 10
            [4, 3, 3, 3, 2, 1],                   // Level 11
            [4, 3, 3, 3, 2, 1],                 // Level 12
            [4, 3, 3, 3, 2, 1, 1],                 // Level 13
            [4, 3, 3, 3, 2, 1, 1],                // Level 14
            [4, 3, 3, 3, 2, 1, 1, 1],             // Level 15
            [4, 3, 3, 3, 2, 1, 1, 1],                   // Level 16
            [4, 3, 3, 3, 2, 1, 1, 1, 1],                   // Level 17
            [4, 3, 3, 3, 3, 1, 1, 1, 1],                // Level 18
            [4, 3, 3, 3, 3, 2, 1, 1, 1],                // Level 19
            [4, 3, 3, 3, 3, 2, 2, 1, 1]              // Level 20
        ],
        savingThrows: ['Wisdom', 'Charisma'],
        armorProficiencies: ['LightArmor', 'MediumArmor', 'Shields'],
        weaponProficiencies: ['SimpleWeapons'],
        toolProficiencies: [''],
        featsEvery: 4,
        features: {
            'Channel Divinity': {2: '1', 6: '2', 18: '3'},
            'Destroy Undead': {5: 'CR 1/2', 8: 'CR 1', 11: 'CR 2', 14: 'CR 3', 17: 'CR 4'}
        },  // Example placeholder
    },
    'Druid': {
        hitDie: 8,
        selectableSkills: ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival'],
        skillCount: 2,
        cantripsByLevel: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],  // Example cantrips
        spellSlotsByLevel: [
            [2],                   // Level 1
            [3],                   // Level 2
            [4, 2],                // Level 3
            [4, 3],                // Level 4
            [4, 3, 2],             // Level 5
            [4, 3, 3],                   // Level 6
            [4, 3, 3, 1],                   // Level 7
            [4, 3, 3, 2],                // Level 8
            [4, 3, 3, 3, 1],                // Level 9
            [4, 3, 3, 3, 2],             // Level 10
            [4, 3, 3, 3, 2, 1],                   // Level 11
            [4, 3, 3, 3, 2, 1],                 // Level 12
            [4, 3, 3, 3, 2, 1, 1],                 // Level 13
            [4, 3, 3, 3, 2, 1, 1],                // Level 14
            [4, 3, 3, 3, 2, 1, 1, 1],             // Level 15
            [4, 3, 3, 3, 2, 1, 1, 1],                   // Level 16
            [4, 3, 3, 3, 2, 1, 1, 1, 1],                   // Level 17
            [4, 3, 3, 3, 3, 1, 1, 1, 1],                // Level 18
            [4, 3, 3, 3, 3, 2, 1, 1, 1],                // Level 19
            [4, 3, 3, 3, 3, 2, 2, 1, 1]              // Level 20
        ],
        savingThrows: ['Intelligence', 'Wisdom'],
        armorProficiencies: ['LightArmor', 'MediumArmor', 'Shields'],
        weaponProficiencies: ['Clubs', 'Daggers', 'Darts', 'Javelins', 'Maces', 'Quarterstaffs', 'Scimitars', 'Sickles', 'Slings', 'Spears'],
        toolProficiencies: ['Herbalism Kit'],
        featsEvery: 4,
        features: {
            'Wild Shape': {2: 'CR 1/4', 4: 'CR 1/2', 8: 'CR 1'}
        }, 
    },
    'Fighter': {
        hitDie: 10,
        selectableSkills: ['Acrobatics', 'Animal Handling', 'Athletics', 'History', 'Insight', 'Intimidation', 'Perception', 'Survival'],
        skillCount: 2,
        cantripsByLevel: [0],
        spellSlotsByLevel: [
            [0]            // Level 20
        ],
        savingThrows: ['Strength', 'Constitution'],
        armorProficiencies: ['LightArmor', 'MediumArmor', 'HeavyArmor', 'Shields'],
        weaponProficiencies: ['SimpleWeapons', 'MartialWeapons'],
        toolProficiencies: [''],
        featsEvery: 4,
        features: {
            'Action Surge': {2: '1', 17: '2'}
        }, // Example placeholder
    },
    'Monk': {
        hitDie: 8,
        selectableSkills: ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth'],
        skillCount: 2,
        cantripsByLevel: [0],
        spellSlotsByLevel: [
            [0]            // Level 20
        ],
        savingThrows: ['Strength', 'Dexterity'],
        armorProficiencies: ['None'],
        weaponProficiencies: ['SimpleWeapons', 'Shortswords'],
        toolProficiencies: ['Artisans Tools', 'Musical Instrument'],
        featsEvery: 4,
        features: {
            'Ki Points': {2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7:'7', 8:'8', 9:'9', 10:'10', 11:'11', 12:'12', 13:'13', 14:'14', 15:'15', 16:'16', 17:'17', 18:'18', 19:'19', 20:'20'},
            'Martial Arts': {1: '1d4', 5: '1d6', 11: '1d8', 17: '1d10'}
        },  // Example placeholder
    },
    'Paladin': {
        hitDie: 10,
        selectableSkills: ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion'],
        skillCount: 2,
        cantripsByLevel: [0],  // Example cantrips
        spellSlotsByLevel: [
            [0],                   // Level 1
            [2],                   // Level 2
            [3],                // Level 3
            [3],                // Level 4
            [4, 2],             // Level 5
            [4, 2],                   // Level 6
            [4, 3],                   // Level 7
            [4, 3],                // Level 8
            [4, 3, 2],                // Level 9
            [4, 3, 2],             // Level 10
            [4, 3, 3],                   // Level 11
            [4, 3, 3],                 // Level 12
            [4, 3, 3, 1],                 // Level 13
            [4, 3, 3, 1],                // Level 14
            [4, 3, 3, 2],             // Level 15
            [4, 3, 3, 2],                   // Level 16
            [4, 3, 3, 3, 1],                   // Level 17
            [4, 3, 3, 3, 1],                // Level 18
            [4, 3, 3, 3, 2],                // Level 19
            [4, 3, 3, 3, 2]              // Level 20
        ],
        savingThrows: ['Wisdom', 'Charisma'],
        armorProficiencies: ['LightArmor', 'MediumArmor', 'HeavyArmor', 'Shields'],
        weaponProficiencies: ['SimpleWeapons', 'MartialWeapons'],
        toolProficiencies: [''],
        featsEvery: 4,
        features: {}  // Example placeholder
    },
    'Ranger': {
        hitDie: 10,
        selectableSkills: ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival'],
        skillCount: 3,
        cantripsByLevel: [0],  // Example cantrips
        spellSlotsByLevel: [
            [0],                   // Level 1
            [2],                   // Level 2
            [3],                // Level 3
            [3],                // Level 4
            [4, 2],             // Level 5
            [4, 2],                   // Level 6
            [4, 3],                   // Level 7
            [4, 3],                // Level 8
            [4, 3, 2],                // Level 9
            [4, 3, 2],             // Level 10
            [4, 3, 3],                   // Level 11
            [4, 3, 3],                 // Level 12
            [4, 3, 3, 1],                 // Level 13
            [4, 3, 3, 1],                // Level 14
            [4, 3, 3, 2],             // Level 15
            [4, 3, 3, 2],                   // Level 16
            [4, 3, 3, 3, 1],                   // Level 17
            [4, 3, 3, 3, 1],                // Level 18
            [4, 3, 3, 3, 2],                // Level 19
            [4, 3, 3, 3, 2]              // Level 20
        ],
        savingThrows: ['Strength', 'Dexterity'],
        armorProficiencies: ['LightArmor', 'MediumArmor', 'Shields'],
        weaponProficiencies: ['SimpleWeapons', 'MartialWeapons'],
        toolProficiencies: [''],
        featsEvery: 4,
        features: {
            'Favored Enemy': {1: '1', 6: '2', 14: '3'}
        },   // Example placeholder
    },
    'Rogue': {
        hitDie: 8,
        selectableSkills: ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth'],
        skillCount: 4,
        cantripsByLevel: [0],
        spellSlotsByLevel: [
            [0]            // Level 20
        ],
        savingThrows: ['Dexterity', 'Intelligence'],
        armorProficiencies: ['LightArmor'],
        weaponProficiencies: ['SimpleWeapons', 'Hand Crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
        toolProficiencies: ['Thieves Tools'],
        featsEvery: 4,
        features: {
            'Sneak Attack': {1: '1d6', 3: '2d6', 5: '3d6', 7: '4d6', 9:'5d6', 11: '6d6', 13: '7d6', 15: '8d6', 17: '9d6', 19: '10d6'}
        },  // Example placeholder
    },
    'Sorcerer': {
        hitDie: 6,
        selectableSkills: ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion'],
        skillCount: 2,
        cantripsByLevel: [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],  // Example cantrips
        spellSlotsByLevel: [
            [2],                   // Level 1
            [3],                   // Level 2
            [4, 2],                // Level 3
            [4, 3],                // Level 4
            [4, 3, 2],             // Level 5
            [4, 3, 3],                   // Level 6
            [4, 3, 3, 1],                   // Level 7
            [4, 3, 3, 2],                // Level 8
            [4, 3, 3, 3, 1],                // Level 9
            [4, 3, 3, 3, 2],             // Level 10
            [4, 3, 3, 3, 2, 1],                   // Level 11
            [4, 3, 3, 3, 2, 1],                 // Level 12
            [4, 3, 3, 3, 2, 1, 1],                 // Level 13
            [4, 3, 3, 3, 2, 1, 1],                // Level 14
            [4, 3, 3, 3, 2, 1, 1, 1],             // Level 15
            [4, 3, 3, 3, 2, 1, 1, 1],                   // Level 16
            [4, 3, 3, 3, 2, 1, 1, 1, 1],                   // Level 17
            [4, 3, 3, 3, 3, 1, 1, 1, 1],                // Level 18
            [4, 3, 3, 3, 3, 2, 1, 1, 1],                // Level 19
            [4, 3, 3, 3, 3, 2, 2, 1, 1]              // Level 20
        ],
        savingThrows: ['Constitution', 'Charisma'],
        armorProficiencies: ['None'],
        weaponProficiencies: ['Daggers', 'Darts', 'Quarterstaffs', 'Slings', 'Light Crossbows'],
        toolProficiencies: [''],
        featsEvery: 2,
        specialFeatures: {
            'Sorcery Points': {2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7:'7', 8:'8', 9:'9', 10:'10', 11:'11', 12:'12', 13:'13', 14:'14', 15:'15', 16:'16', 17:'17', 18:'18', 19:'19', 20:'20'}
        }  // Example placeholder
    },
    'Warlock': {
        hitDie: 8,
        selectableSkills: ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion'],
        skillCount: 2,
        cantripsByLevel: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        spellSlotsByLevel: [
            [1],                   // Level 1
            [2],                   // Level 2
            [2],                   // Level 3
            [2],                   // Level 4
            [2],                   // Level 5
            [2],                   // Level 6
            [2],                   // Level 7
            [2],                   // Level 8
            [2],                   // Level 9
            [2],                   // Level 10
            [3],                   // Level 11
            [3],                   // Level 12
            [3],                   // Level 13
            [3],                   // Level 14
            [3],                   // Level 15
            [3],                   // Level 16
            [4],                   // Level 17
            [4],                   // Level 18
            [4],                   // Level 19
            [4]                    // Level 20
        ],
        pactSlotLevels: [
            1,                     // Level 1
            1,                     // Level 2
            2,                     // Level 3
            2,                     // Level 4
            3,                     // Level 5
            3,                     // Level 6
            4,                     // Level 7
            4,                     // Level 8
            5,                     // Level 9
            5,                     // Level 10
            5,                     // Level 11
            5,                     // Level 12
            5,                     // Level 13
            5,                     // Level 14
            5,                     // Level 15
            5,                     // Level 16
            5,                     // Level 17
            5,                     // Level 18
            5,                     // Level 19
            5                      // Level 20
        ],
        savingThrows: ['Wisdom', 'Charisma'],
        armorProficiencies: ['LightArmor'],
        weaponProficiencies: ['SimpleWeapons'],
        toolProficiencies: [''],
        featsEvery: 4,
        features: {
            'Eldritch Invocations': { 2: '2', 5: '3', 7: '4', 9: '5', 12: '6', 15: '7', 18: '8' },
            'Pact Magic': { 1: '1 Slot (1st Level)', 2: '2 Slots (1st Level)', 3: '2 Slots (2nd Level)'},
        },
    },
    'Wizard': {
        hitDie: 6,
        selectableSkills: ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion'],
        skillCount: 2,
        cantripsByLevel: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],  // Example cantrips
        spellSlotsByLevel: [
            [2],                   // Level 1
            [3],                   // Level 2
            [4, 2],                // Level 3
            [4, 3],                // Level 4
            [4, 3, 2],             // Level 5
            [4, 3, 3],                   // Level 6
            [4, 3, 3, 1],                   // Level 7
            [4, 3, 3, 2],                // Level 8
            [4, 3, 3, 3, 1],                // Level 9
            [4, 3, 3, 3, 2],             // Level 10
            [4, 3, 3, 3, 2, 1],                   // Level 11
            [4, 3, 3, 3, 2, 1],                 // Level 12
            [4, 3, 3, 3, 2, 1, 1],                 // Level 13
            [4, 3, 3, 3, 2, 1, 1],                // Level 14
            [4, 3, 3, 3, 2, 1, 1, 1],             // Level 15
            [4, 3, 3, 3, 2, 1, 1, 1],                   // Level 16
            [4, 3, 3, 3, 2, 1, 1, 1, 1],                   // Level 17
            [4, 3, 3, 3, 3, 1, 1, 1, 1],                // Level 18
            [4, 3, 3, 3, 3, 2, 1, 1, 1],                // Level 19
            [4, 3, 3, 3, 3, 2, 2, 1, 1]              // Level 20
        ],
        savingThrows: ['Intelligence', 'Wisdom'],
        armorProficiencies: ['None'],
        weaponProficiencies: ['Daggers', 'Darts', 'Quarterstaffs', 'Slings', 'Light Crossbows'],
        toolProficiencies: [],
        featsEvery: 4,
        features: {
            'Arcane Recovery': {2: '1', 4: '2', 6: '3', 8: '4', 10: '5', 12: '6', 14: '7', 16:'8', 18: '9', 20:'10'}
        }  // Example placeholder
    }
};
const subclasses = {
    'Artificer': ['Alchemist', 'Armorer', 'Artillerist', 'Battle Smith', 'Maverick'],
    'Barbarian': ['Ancestral Guardian', 'Beast', 'Berserker', 'Giant', 'Juggernaut', 'Storm Herald', 'Totem Warrior', 'Wild Magic', 'Zealot'],
    'Bard': ['Creation', 'Eloquence', 'Glamour', 'Lore', 'Spirits', 'Swords', 'Tragedy', 'Valor', 'Whispers'],
    'Cleric': ['Arcana', 'Blood', 'Death', 'Forge', 'Grave', 'Knowledge', 'Life', 'Light', 'Moon', 'Nature', 'Order', 'Peace', 'Tempest', 'Trickery', 'Twilight', 'War'],
    'Druid': ['Blighted', 'Dreams', 'Land', 'Moon', 'Shepherd', 'Spores', 'Stars', 'Wildfire'],
    'Fighter': ['Arcane Archer', 'Battle Master', 'Cavalier', 'Champion', 'Echo Knight', 'Eldritch Knight', 'Psi Warrior', 'Banneret', 'Rune Knight', 'Samurai', 'Scofflaw'],
    'Monk': ['Ascendant Dragon', 'Astral Self', 'Drunken Master', 'Four Elements', 'Kensei', 'Long Death', 'Mercy', 'Open Hand', 'Shadow', 'Sun Soul'],
    'Paladin': ['Ancients', 'Conquest', 'Crown', 'Devotion', 'Glory', 'Oathbreaker', 'Open Sea', 'Redemption', 'Vengeance', 'Watchers'],
    'Ranger': ['Beast Master', 'Drakewarden', 'Fey Wanderer', 'Gloom Stalker', 'Horizon Walker', 'Hunter', 'Monster Slayer', 'Swarmkeeper'],
    'Rogue': ['Arcane Trickster', 'Assassin', 'Inquisitive', 'Mastermind', 'Phantom', 'Scout', 'Soulknife', 'Swashbuckler', 'Thief'],
    'Sorcerer': ['Aberrant Mind', 'Clockwork Soul', 'Divine Soul', 'Draconic Bloodline', 'Lunar', 'Runechild', 'Shadow', 'Storm', 'Wild Magic'],
    'Warlock': ['Archfey', 'Celestial', 'Fathomless', 'Fiend', 'Genie', 'Great Old One', 'Hexblade', 'Undead', 'Undying'],
    'Wizard': ['Abjuration', 'Bladesinging', 'Blood Magic', 'Chronurgy', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Graviturgy', 'Illusion', 'Necromancy', 'Scribes', 'Transmutation', 'War Magic'],
};
const languagesList = ['Common', 'Auran', 'Abyssal', 'Celestial', 'Deep Speech', 'Draconic', 'Dwarvish', 'Elvish', 'Giant', 'Gith', 'Gnoll', 'Gnomish', 'Goblin', 'Halfling', 'Infernal', 'Orc', 'Primordial', 'Slyvan', 'Thieves Cant', 'Undercommon'];
const equipmentCategories = {
    Armor: {
        None: [''],
        LightArmor: ['Leather', 'Padded', 'Studded Leather'],
        MediumArmor: ['Hide', 'Chain Shirt', 'Scale Mail', 'Half Plate', 'Breastplate'],
        HeavyArmor: ['Ring Mail', 'Chain Mail', 'Splint', 'Plate'],
        Shields: ['Shield']
    },
    Weapons: {
        None:[''],
        SimpleWeapons: ['Club', 'Dagger', 'Dart', 'Greatclub', 'Handaxe', 'Javelin', 'Light Crossbow', 'Light Hammer', 'Mace', 'Quarterstaff', 'Shortbow', 'Sickle', 'Sling', 'Spear', 'Staff', 'Wooden Staff'],
        MartialWeapons: ['Battleaxe', 'Blowgun', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Hand Crossbow', 'Heavy Crossbow', 'Lance', 'Longbow', 'Longsword', 'Maul', 'Morningstar', 'Net', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip']
    }
};
const tools = [];

const backgrounds = {
    'Acolyte': {
        skills: ['Insight', 'Religion'],
        tools: [],
        languagesCount: 2
        },
    'Charlatan': {
        skills: ['Decpetion', 'Sleight of Hand'],
        tools: ['Digsuise Kit', 'Forgery Kit'],
        languagesCount: 0
        },
    'Criminal': {
        skills: ['Decpetion', 'Stealth'],
        tools: ['Gaming Set', 'Thieves Tools'],
        languagesCount: 0
    },
    'Entertainer': {
        skills: ['Acrobatics', 'Performance'],
        tools: ['Disguise Kit', 'Musical Instrument'],
        languagesCount: 0
    },
    'Folk Hero': {
        skills: ['Animal Handling', 'Survival'],
        tools: ['Artisans Tools', 'Vehicles (land)'],
        languagesCount: 0
    },
    'Guild Artisan': {
        skills: ['Insight', 'Persuasion'],
        tools: ['Artisans Tools'],
        languagesCount: 1
    },
    'Hermit': {
        skills: ['Medicine', 'Religion'],
        tools: ['Herbalism Kit'],
        languagesCount: 1
    },
    'Noble': {
        skills: ['History', 'Persuasion'],
        tools: ['Gaming Set'],
        languagesCount: 1
    },
    'Outlander': {
        skills: ['Athletics', 'Survival'],
        tools: ['Musical Instrument'],
        languagesCount: 1
    },
    'Sage': {
        skills: ['Arcana', 'History'],
        tools: [''],
        languagesCount: 2
    },
    'Sailor': {
        skills: ['Athletics', 'Perception'],
        tools: ['Navigators Tools', 'vehicles (water)'],
        languagesCount: 0
    },
    'Soldier': {
        skills: ['Athletics', 'Intimidation'],
        tools: ['Gaming Set', 'Vehicles (land)'],
        languagesCount: 0
    },
    'Urchin': {
        skills: ['Sleight of Hand', 'Stealth'],
        tools: ['Disguise Kit', 'Thieves Tools'],
        languagesCount: 0
    },
};
const feats = [
    { name: 'Alert', description: 'Always on the lookout for danger. Gain +5 to initiative.' },
    { name: 'Athlete', description: 'Increase Strength or Dexterity by 1, to a maximum of 20.' },
    { name: 'Actor', description: 'Skilled at mimicry and dramatics. Gain advantage on deception and performance checks.' },
    // Add more feats as needed
];
const races = {
    'Aarakocra': {
        rarity: 'exotic',
        firstNameMinSyllables: 1,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 0,
        lastNameMaxSyllables: 0,
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Aasimar':{
        rarity: 'rare',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 4,
        subraces:{
        'Fallen': { 'Charisma': 2, 'Strength': 1},
        'Protector': { 'Charisma': 2, 'Wisdom': 1},
        'Scourge': { 'Charisma': 2, 'Constitution': 1},
        }
    },
    'Bugbear':{
        firstNameMinSyllables: 1,
        firstNameMaxSyllables: 2,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 3,
        rarity: 'exotic',
        bonus: {'Strength':2, 'Dexterity': 1},
    },
    'Centaur':{
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 4,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 3,
        rarity: 'exotic',
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Changeling':{
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 1,
        lastNameMaxSyllables: 3,
        rarity: 'rare',
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Dragonborn': {
        rarity: 'uncommon',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 4,
        subraces: {
            'Red': { 'Strength': 2, 'Charisma': 1 },
            'Blue': { 'Strength': 2, 'Charisma': 1 },
            'Black': { 'Strength': 2, 'Charisma': 1 },
            'White': { 'Strength': 2, 'Charisma': 1 },
            'Green': { 'Strength': 2, 'Charisma': 1 },
            'Silver': { 'Strength': 2, 'Charisma': 1 },
            'Gold': { 'Strength': 2, 'Charisma': 1 },
            'Brass': { 'Strength': 2, 'Charisma': 1 },
            'Bronze': { 'Strength': 2, 'Charisma': 1 },
            'Copper': { 'Strength': 2, 'Charisma': 1 },
        }
    },
    
    'Dwarf': {
        rarity: 'common',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 4,
        subraces:{
            'Hill': {'Constitution': 2, 'Wisdom': 1},
            'Mountain': {'Strength': 2, 'Constitution': 2},
            'Duergar':{
                bonus: [
                    { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
                    { any: [1, 1, 1] }  // Choose three different +1
                ]
            },
        }
    },
    'Eladrin':{
        rarity: 'exotic',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 3,
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Elf': {
        rarity: 'common',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 4,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 4,
        subraces: {
            'Drow': {'Dexterity': 2, 'Charisma': 1},
            'High Elf': { 'Intelligence': 1, 'Dexterity': 2 },
            'Wood Elf': { 'Wisdom': 1, 'Dexterity': 2 },
            'Pallid Elf': { 'Wisdom': 1, 'Dexterity': 2 },  
            'Sea Elf': { 'Constitution': 1, 'Dexterity': 2 },
        }
    },
    'Shadar-Kai':{
        rarity: 'rare',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 3,
        bonus:{ 'Constitution': 1, 'Dexterity': 2 },
    },      
    'Fairy':{
        rarity: 'exotic',
        firstNameMinSyllables: 1,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 3,
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Firbolg':{
        rarity: 'rare',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 3,
        bonus: {'Wisdom': 2, 'Strength': 1}
    },
    'Genasi':{
        rarity: 'rare',
        firstNameMinSyllables: 1,
        firstNameMaxSyllables: 2,
        subraces: {
            'Air Genasi':{
                bonus: [
                    { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
                    { any: [1, 1, 1] }  // Choose three different +1
                ]
            },
            'Earth Genasi':{
                bonus: [
                    { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
                    { any: [1, 1, 1] }  // Choose three different +1
                ]
            },
            'Fire Genasi':{
                bonus: [
                    { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
                    { any: [1, 1, 1] }  // Choose three different +1
                ]
            },
            'Water Genasi':{
                bonus: [
                    { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
                    { any: [1, 1, 1] }  // Choose three different +1
                ]
            }
        }
    },
    'Githyanki':{
        rarity: 'rare',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Githzerai':{
        rarity: 'rare',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Gnome':{
        rarity: 'uncommon',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 4,
        subraces: {
            'Svirfneblin':{
                bonus: [
                    { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
                    { any: [1, 1, 1] }  // Choose three different +1
                ]
            },
            'Forest':{'Intelligence': 2, 'Dexterity':1},
            'Rock':{'Intelligence': 2, 'Constitution':1}
        }
    },
    'Goblin':{
        rarity: 'rare',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        bonus: {'Dexterity': 2, 'Constitution': 1},
    },
    'Goliath':{
        rarity: 'rare',
        firstNameMinSyllables: 1,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 3,
        bonus: {'Strength': 2, 'Constitution': 1},
    },
    'Half-Elf':{
        rarity: 'common',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 3,
        bonus:{'Charisma': 2, any: [1,1]},
    },
    'Half-Orc':{
        rarity: 'common',
        firstNameMinSyllables: 2,
        firstNameMaxSyllables: 3,
        lastNameMinSyllables: 2,
        lastNameMaxSyllables: 3,
        bonus: {'Strength': 2, 'Constitution': 1},
    },
    'Halfling':{
        rarity: 'uncommon',
        subraces:{
            'Ghostwise':{'Dexterity': 2, 'Wisdom': 1},
            'Lightfoot':{'Dexterity': 2, 'Charisma': 1},
            'Stout':{'Dexterity': 2, 'Constitution': 1}
        }
    },
    'Harengon': {
        rarity:'exotic',
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Hobgoblin': {
        rarity:'exotic',
        bonus: {'Constitution': 2, 'Intelligence': 1},
    }, 
    'Human': {
        rarity: 'common',
        bonus: { choose: 2, amount: 1 }
    },
    'Kenku':{
        rarity: 'exotic',
        bonus: {'Dexterity': 2, 'Wisdom': 1},
    },
    'Kobold':{
        rarity: 'exotic',
        bonus: {'Dexterity': 2},
    },
    'Lizardfolk':{
        rarity: 'rare',
        bonus: {'Constitution': 2, 'Wisdom': 1},
    },
    'Minotaur': {
        rarity: 'exotic',
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Orc':{
        rarity: 'rare',
        bonus: {'Strength': 2, 'Constitution': 1},
    },
    'Satyr': {
        rarity: 'exotic',
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Shifter': {
        rarity: 'exotic',
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Tabaxi':{
        rarity: 'exotic',
        bonus: {'Dexterity': 2, 'Charisma': 1}
    },
    'Tiefling': {
        rarity: 'uncommon',
        subraces: {
            'Asmodeus': {'Charisma': 2, 'Intelligence': 1},
            'Baalzebul': {'Charisma': 2, 'Intelligence': 1},
            'Dispater': {'Charisma': 2, 'Dexterity': 1},
            'Fierna': {'Charisma': 2, 'Wisdom': 1},
            'Glasya': {'Charisma': 2, 'Dexterity': 1},
            'Levistus': {'Charisma': 2, 'Constitution': 1},
            'Mammon': {'Charisma': 2, 'Intelligence': 1},
            'Mephistopheles': {'Charisma': 2, 'Intelligence': 1},
            'Zariel': {'Charisma': 2, 'Strength': 1},
        }
    },

    'Tortle':{
        rarity: 'exotic',
        bonus: [
            { choose: 2, amount: 2, chooseOther: { choose: 1, amount: 1 } }, // Choose any +2; choose any other +1
            { any: [1, 1, 1] }  // Choose three different +1
        ]
    },
    'Triton': {
        rarity: 'rare',
        bonus: {'Strength': 1, 'Constitution': 1, 'Charisma': 1},
    },
    'Yuan-Ti': {
        rarity: 'exotic',
        bonus: {'Charisma': 2, 'Intelligence':1}
    }
};
const archetypes = [
    'aggressive',
    'cautious',
    'friendly',
    'curious',
    'brave',
    'strategist'
];

const tags = [
    'short',
    'tall',
    'strong',
    'weak',
    'quick',
    'slow'
];

// Other existing data...

