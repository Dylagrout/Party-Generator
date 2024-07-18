const rarityPercentages = {
    common: 60,
    uncommon: 25,
    rare: 12,
    exotic: 3
};
function selectRandomRace() {
    const rarityThresholds = calculateRarityThresholds(rarityPercentages);
    const selectedRarity = selectRarity(rarityThresholds);
    const racesByRarity = Object.keys(races).filter(race => races[race].rarity === selectedRarity);
    return racesByRarity[Math.floor(Math.random() * racesByRarity.length)];
}

function calculateRarityThresholds(rarityPercentages) {
    const thresholds = {};
    let cumulativePercentage = 0;
    for (const rarity in rarityPercentages) {
        cumulativePercentage += rarityPercentages[rarity];
        thresholds[rarity] = cumulativePercentage;
    }
    return thresholds;
}

function selectRarity(rarityThresholds) {
    const randomPercentage = Math.random() * 100;
    for (const rarity in rarityThresholds) {
        if (randomPercentage < rarityThresholds[rarity]) {
            return rarity;
        }
    }
    return 'common'; // Default to 'common' if none matched, for safety
}

function generateFlexibleBonus(bonusConfig) {
    const bonus = {};
    const stats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

    if (Array.isArray(bonusConfig)) {
        // Handle multiple bonus options
        const selectedOption = bonusConfig[Math.floor(Math.random() * bonusConfig.length)];
        applyBonusOption(bonus, selectedOption, stats);
    } else if (bonusConfig.any) {
        // Handle specific bonuses
        applyBonusOption(bonus, bonusConfig, stats);
    } else {
        // Handle single bonus option
        applyBonusOption(bonus, bonusConfig, stats);
    }

    return bonus;
}

function applyBonusOption(bonus, option, stats) {
    if (option.choose) {
        for (let i = 0; i < option.choose; i++) {
            const stat = stats[Math.floor(Math.random() * stats.length)];
            bonus[stat] = (bonus[stat] || 0) + option.amount;
        }
        if (option.chooseOther) {
            for (let i = 0; i < option.chooseOther.choose; i++) {
                const stat = stats[Math.floor(Math.random() * stats.length)];
                bonus[stat] = (bonus[stat] || 0) + option.chooseOther.amount;
            }
        }
    } else if (option.any) {
        option.any.forEach((amt) => {
            const stat = stats[Math.floor(Math.random() * stats.length)];
            bonus[stat] = (bonus[stat] || 0) + amt;
        });
    } else {
        for (const stat in option) {
            if (option.hasOwnProperty(stat) && stats.includes(stat)) {
                bonus[stat] = (bonus[stat] || 0) + option[stat];
            }
        }
    }
}
function generateRace(race) {
    let subraceName = null;
    let bonuses = {};
    if (race.subraces) {
        const subraceKeys = Object.keys(race.subraces);
        subraceName = subraceKeys[Math.floor(Math.random() * subraceKeys.length)];
        bonuses = race.subraces[subraceName];
    } else if (race.bonus) {
        bonuses = generateFlexibleBonus(race.bonus);
    } else if (race.Constitution || race.Dexterity || race.Strength || race.Intelligence || race.Wisdom || race.Charisma) {
        bonuses = {
            'Constitution': race.Constitution || 0,
            'Dexterity': race.Dexterity || 0,
            'Strength': race.Strength || 0,
            'Intelligence': race.Intelligence || 0,
            'Wisdom': race.Wisdom || 0,
            'Charisma': race.Charisma || 0
        };
    }
    return { subraceName, bonuses };
}

function generateBackground() {
    const keys = Object.keys(backgrounds);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return randomKey;
}

function assignStats(stats) {
    // This function should ideally allow the user to assign stats, here it's done randomly
    return stats.sort(() => Math.random() - 0.5);
}

function applyRaceBonuses(stats, bonuses) {
    const newStats = { ...stats };
    for (const stat in bonuses) {
        if (newStats.hasOwnProperty(stat)) {
            newStats[stat] += bonuses[stat];
        }
    }
    return newStats;
}
function modifierFromStat(stat) {
    return Math.floor((stat - 10) / 2);
}
function generateCharacterFeatures(classData, level) {
    let features = {};
    for (const feature in classData.features) {
        for (const lvl in classData.features[feature]) {
            if (level >= parseInt(lvl)) {
                features[feature] = classData.features[feature][lvl];
            }
        }
    }
    return features;
}
function getRandomGender() {
    const genders = ['male', 'female', 'non-binary'];
    return genders[Math.floor(Math.random() * genders.length)];
}

function getRandomSexuality() {
    const sexualities = ['straight', 'gay', 'bisexual', 'asexual', 'pansexual'];
    return sexualities[Math.floor(Math.random() * sexualities.length)];
}

function generateCharacter(level) {

    let stats = rollStats();

    const raceName = selectRandomRace();
    const race = races[raceName];
    const { subraceName, bonuses } = generateRace(race);
    console.log(raceName);
    stats = applyRaceBonuses(stats, bonuses);

    const bonusApplied = {};
    for (const stat in bonuses) {
        if (bonuses.hasOwnProperty(stat)) {
            bonusApplied[stat] = true;
        }
    }

    const backgroundKey = generateBackground();
    const background = backgrounds[backgroundKey];

    const skills = selectUniqueItems([...background.skills], background.skills.length, []);

    const primaryClass = determineClass(stats);
    if (!primaryClass || !classes[primaryClass]) {
        console.error('Class not defined:', primaryClass);
        return null;
    }

    const classData = classes[primaryClass];
    const archetype = selectRandomItem(archetypes);
    const characterTags = selectMultipleRandomItems(tags, 2);

    // Generate level by level progression
    const progression = generateLevelProgression(level, primaryClass, classData, stats);

    // Generate initial character details
    const character = {
        name: generateName(raceName),
        gender: getRandomGender(),
        sexuality: getRandomSexuality(),
        race: raceName,
        subrace: subraceName,
        class: primaryClass,
        subclass: (level >= 3) ? determineSubclass(primaryClass) : null,
        description: generateDescription(raceName),
        level,
        stats,
        hitPoints: calculateHitPoints(classData.hitDie, level, stats.Constitution),
        skills,
        background: backgroundKey,
        spells: [],
        cantrips: [],
        equipment: selectEquipment(classData),
        features: generateCharacterFeatures(classData, level),
        bonusApplied,
        feats: [],
        languages: [],
        tools: [],
        archetype,
        tags: characterTags,
        progression
    };

    // Set the initial spells and cantrips
    character.cantrips = spellLists[primaryClass] && spellLists[primaryClass].cantrips ? selectRandomSpells(spellLists[primaryClass].cantrips, classData.cantripsByLevel[level - 1]) : [];
    character.spells = spellLists[primaryClass] && spellLists[primaryClass].spells ? generateSpellsForLevel(spellLists[primaryClass], classData.spellSlotsByLevel[level - 1], primaryClass === 'Warlock', level) : {};

    return character;
}
function generateLevelProgression(maxLevel, primaryClass, classData, stats) {
    const progression = [];
    let currentLevel = 1;
    let currentStats = { ...stats };
    let currentHitPoints = calculateHitPoints(classData.hitDie, currentLevel, currentStats.Constitution);

    while (currentLevel <= maxLevel) {
        // Determine if there are any ASI/feats at this level
        let asiOrFeats = [];
        if (currentLevel % classData.featsEvery === 0) {
            asiOrFeats = generateFeats(primaryClass, currentLevel);
        }

        // Determine the subclass at level 3
        let subclass = null;
        if (currentLevel === 3) {
            subclass = determineSubclass(primaryClass);
        }

        // Set the spells and cantrips
        const cantrips = spellLists[primaryClass] && spellLists[primaryClass].cantrips ? selectRandomSpells(spellLists[primaryClass].cantrips, classData.cantripsByLevel[currentLevel - 1]) : [];
        const spells = spellLists[primaryClass] && spellLists[primaryClass].spells ? generateSpellsForLevel(spellLists[primaryClass], classData.spellSlotsByLevel[currentLevel - 1], primaryClass === 'Warlock', currentLevel) : {};

        // Store the progression for this level
        progression.push({
            level: currentLevel,
            stats: { ...currentStats },
            hitPoints: currentHitPoints,
            subclass,
            asiOrFeats,
            cantrips,
            spells
        });

        // Increase level and hit points
        currentLevel++;
        currentHitPoints = calculateHitPoints(classData.hitDie, currentLevel, currentStats.Constitution);
    }

    return progression;
}
function generateFeats(charClass, level) {
    if (!classes[charClass]) {
        console.error('Class not defined for feats:', charClass);
        return [];
    }
    const feats = [];
    const levels = Math.floor(level / classes[charClass].featsEvery);
    for (let i = 0; i < levels; i++) {
        feats.push("Feat " + (i + 1));  // Placeholder for actual feat generation logic
    }
    return feats;
}
function generateDescription(raceName) {
    const appearances = selectMultipleRandomItems(raceDescriptors[raceName] || ['of unknown appearance'], 3);
    const personalities = selectMultipleRandomItems(globalDescriptors.personality, 2);
    const flaw = selectRandomItem(globalDescriptors.flaw);
    const otherTrait = selectRandomItem(globalDescriptors.otherTraits);

    return `${appearances.join(', ')}, and ${appearances[2]}. They are ${personalities.join(', ')}, ${flaw}, and ${otherTrait}.`;
}

function selectMultipleRandomItems(items, count) {
    const shuffled = items.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function selectRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function getRacialLanguages(raceName) {
    const racialLanguages = {
        'Aarakocra': ['Auran'],
        'Aasimar': ['Celestial'],
        'Bugbear': ['Goblin'],
        'Centaur': ['Sylvan'],
        'Changeling': [],
        'Dragonborn': ['Draconic'],
        'Dwarf': ['Dwarvish'],
        'Eladrin': ['Elvish'],
        'Elf': ['Elvish'],
        'Shadar-Kai': ['Elvish'],
        'Fairy': [],
        'Firbolg': ['Elvish', 'Giant'],
        'Genasi': [],
        'Githyanki': ['Gith'],
        'Githzerai': ['Gith'],
        'Gnome': ['Gnomish'],
        'Goblin': ['Goblin'],
        'Goliath': ['Goliath'],
        'Half-Elf': ['Elvish'],
        'Half-Orc': ['Orc'],
        'Halfling': ['Halfling'],
        'Harengon': [],
        'Hobgoblin': ['Goblin'],
        'Human': [],
        'Kenku': ['Auran'],
        'Kobold': ['Draconic'],
        'Lizardfolk': ['Draconic'],
        'Minotaur':[],
        'Orc': ['Orc'],
        'Satyr': [],
        'Shifter': [],
        'Tabaxi': [],
        'Tiefling': ['Infernal'],
        'Tortle':[],
        'Triton': ['Primordial'],
        'Yuan-Ti': ['Abyssal', 'Draconic']
        // Add other races and their languages here
    };
    if (racialLanguages[raceName] === undefined) {
        racialLanguages[raceName] = [];
    }
    return racialLanguages[raceName];
}
function rollStats() {
    function roll4d6DropLowest() {
        let rolls = [];
        // Roll 4 dice
        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1); // Generate random numbers between 1 and 6
        }
        // Sort rolls to easily find the lowest
        rolls.sort((a, b) => a - b);
        // Drop the lowest roll and sum the rest
        return rolls.slice(1).reduce((acc, current) => acc + current, 0);
    }

    let stats = [];
    // Generate six stats
    for (let i = 0; i < 6; i++) {
        stats.push(roll4d6DropLowest());
    }
    return {
        Strength: stats[0],
        Dexterity: stats[1],
        Constitution: stats[2],
        Intelligence: stats[3],
        Wisdom: stats[4],
        Charisma: stats[5]
    };
}
function multiclassProbability(level) {
    // Example probability function: 10% base chance, +2.5% per level
    return Math.min(10 + (level * 2.5), 100);
}
function determineClass(stats) {
    const classGroups = {
    'Strength': ['Barbarian', 'Fighter', 'Paladin'],
    'Dexterity': ['Ranger', 'Rogue', 'Monk', 'Fighter'],
    'Constitution': ['Artificer', 'Barbarian', 'Cleric', 'Fighter', 'Paladin'], // Add any classes that primarily use Constitution if needed
    'Intelligence': ['Wizard', 'Artificer'],
    'Wisdom': ['Cleric', 'Druid', 'Monk', 'Ranger'],
    'Charisma': ['Bard', 'Sorcerer', 'Warlock', 'Paladin']
    };
    const highestStat = Object.keys(stats).reduce((a, b) => stats[a] > stats[b] ? a : b);
    
    // Get the corresponding class group
    const possibleClasses = classGroups[highestStat];
    
    // Randomly select a class from the group
    if (possibleClasses.length > 0) {
        return possibleClasses[Math.floor(Math.random() * possibleClasses.length)];
    } else {
        console.error('No classes defined for the highest stat:', highestStat);
        return null; // Handle this scenario appropriately
    }
}
function selectAdditionalClasses(primaryClass, stats) {
    const classGroups = {
        'Strength': ['Barbarian', 'Fighter', 'Paladin'],
        'Dexterity': ['Ranger', 'Rogue', 'Monk', 'Fighter'],
        'Constitution': ['Artificer', 'Barbarian', 'Cleric', 'Fighter', 'Paladin'], // Add any classes that primarily use Constitution if needed
        'Intelligence': ['Wizard', 'Artificer'],
        'Wisdom': ['Cleric', 'Druid', 'Monk', 'Ranger'],
        'Charisma': ['Bard', 'Sorcerer', 'Warlock', 'Paladin']
    };

    // Determine the highest stat, excluding the primary class' main stat
    const primaryStat = classes[primaryClass].mainStat;
    const highestStat = Object.keys(stats).reduce((a, b) => (a !== primaryStat && stats[a] > stats[b]) ? a : b);

    // Get the corresponding class group
    const possibleClasses = classGroups[highestStat].filter(cls => cls !== primaryClass);
    
    // Randomly select a class from the group
    if (possibleClasses.length > 0) {
        return possibleClasses[Math.floor(Math.random() * possibleClasses.length)];
    } else {
        return null; // No additional class found
    }
}
function allocateLevels(level) {
    if (Math.random() * 100 < multiclassProbability(level)) {
        const primaryLevel = Math.floor(Math.random() * (level - 1)) + 1;
        const secondaryLevel = level - primaryLevel;
        return [primaryLevel, secondaryLevel];
    }
    return [level, 0]; // No multiclassing
}

function determineSubclass(className) {
    if (!subclasses[className]) {
        console.error('No subclasses defined for class:', className);
        return null; // Return null if no subclasses are defined
    }
    return subclasses[className][Math.floor(Math.random() * subclasses[className].length)];
}
function calculateHitPoints(hitDie, level, constitution) {
    const conModifier = Math.floor((constitution - 10) / 2);
    let totalHitPoints = hitDie + conModifier;
    for (let i = 1; i < level; i++) {
        totalHitPoints += Math.floor(Math.random() * hitDie) + 1 + conModifier;
    }
    return totalHitPoints;
}

function generateFeats(charClass, level) {
    if (!classes[charClass]) {
        console.error('Class not defined for feats:', charClass);
        return [];
    }
    const feats = [];
    const levels = Math.floor(level / classes[charClass].featsEvery);
    for (let i = 0; i < levels; i++) {
        feats.push("Feat " + (i + 1));  // Placeholder for actual feat generation logic
    }
    return feats;
}
function selectRandomSpells(spells, count) {
    if (!Array.isArray(spells)) {
        console.error('selectRandomSpells called with non-array:', spells);
        return [];
    }
    const shuffled = spells.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateSpellsForLevel(spellList, slots, isWarlock = false, warlockLevel = 1) {
    let spells = {};

    if (isWarlock) {
        // Warlocks use Pact Magic, slots are always of the highest level they can cast
        const warlockSlotLevel = classes['Warlock'].pactSlotLevels[warlockLevel - 1];
        const numSlots = slots[0] || 0; // Use 0 if slots[0] is undefined

        if (Array.isArray(spellList.spells[warlockSlotLevel])) {
            spells[warlockSlotLevel] = selectRandomSpells(spellList.spells[warlockSlotLevel], numSlots);
        } else {
            console.warn(`No spells found for Warlock level ${warlockSlotLevel} or invalid slot number.`);
        }
    } else {
        slots.forEach((num, index) => {
            const spellLevel = index + 1;
            if (num > 0 && Array.isArray(spellList.spells[spellLevel])) {
                spells[spellLevel] = selectRandomSpells(spellList.spells[spellLevel], num);
            } else {
                console.warn(`No spells found for level ${spellLevel} or invalid slot number:`, spellList.spells[spellLevel]);
            }
        });
    }

    return spells;
}

function selectUniqueItems(availableItems, count, exclusions = []) {
    let filteredItems = availableItems.filter(item => !exclusions.includes(item));
    return selectRandomItems(filteredItems, count);
}

function selectRandomItems(items, count) {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
function selectEquipment(classData) {
    const armorChoices = [];
    classData.armorProficiencies.forEach(type => {
        if (!equipmentCategories.Armor[type]) {
            console.error('Armor type not defined:', type);
        } else {
            armorChoices.push(...equipmentCategories.Armor[type]);
        }
    });

    const weaponChoices = [];
    classData.weaponProficiencies.forEach(type => {
        if (!equipmentCategories.Weapons[type]) {
            console.error('Weapon type not defined:', type);
        } else {
            weaponChoices.push(...equipmentCategories.Weapons[type]);
        }
    });

    return {
        armor: selectRandomItems(armorChoices, 1), // Select one piece of armor if needed
        weapons: selectRandomItems(weaponChoices, 2), // Select two weapons if typical
    };
}


