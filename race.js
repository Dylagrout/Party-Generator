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
function getRandomGender() {
    const genders = ['male', 'female'];
    return genders[Math.floor(Math.random() * genders.length)];
}

function getRandomSexuality() {
    const sexualities = ['straight', 'gay', 'bisexual', 'asexual', 'pansexual'];
    return sexualities[Math.floor(Math.random() * sexualities.length)];
}
function generateLevelProgression(maxLevel, primaryClass, classData, stats) {
    const progression = [];
    let currentLevel = 1;
    let currentStats = { ...stats };
    let currentHitPoints = calculateHitPoints(classData.hitDie, currentLevel, currentStats.Constitution);

    let currentCantrips = [];
    let currentSpells = {};
    let currentFeats = [];

    while (currentLevel <= maxLevel) {
        // Determine if there are any ASI/feats at this level
        let asiOrFeats = [];
        if (currentLevel % classData.featsEvery === 0) {
            asiOrFeats = selectRandomFeats(currentFeats);
            currentFeats = currentFeats.concat(asiOrFeats);
        }

        // Determine the subclass at level 3
        let subclass = null;
        if (currentLevel === 3) {
            subclass = determineSubclass(primaryClass);
        }

        // Set the spells and cantrips
        const newCantrips = spellLists[primaryClass] && spellLists[primaryClass].cantrips ? selectUniqueItems(spellLists[primaryClass].cantrips, classData.cantripsByLevel[currentLevel - 1], currentCantrips) : [];
        currentCantrips = currentCantrips.concat(newCantrips);

        const newSpells = spellLists[primaryClass] && spellLists[primaryClass].spells ? generateSpellsForLevel(spellLists[primaryClass], classData.spellSlotsByLevel[currentLevel - 1], primaryClass === 'Warlock', currentLevel, currentSpells) : {};
        for (const level in newSpells) {
            if (currentSpells[level]) {
                currentSpells[level] = currentSpells[level].concat(newSpells[level]);
            } else {
                currentSpells[level] = newSpells[level];
            }
        }
        // Store the progression for this level
        progression.push({
            level: currentLevel,
            stats: { ...currentStats },
            hitPoints: currentHitPoints,
            subclass,
            asiOrFeats,
            cantrips: currentCantrips.slice(), // Copy the current cantrips
            spells: JSON.parse(JSON.stringify(currentSpells))
        });

        // Increase level and hit points
        currentLevel++;
        currentHitPoints = calculateHitPoints(classData.hitDie, currentLevel, currentStats.Constitution);
    }

    return progression;
}
function generateDescription(raceName) {
    const appearances = selectMultipleRandomItems(raceDescriptors[raceName] || ['of unknown appearance'], 3);
    const personalities = selectMultipleRandomItems(globalDescriptors.personality, 2);
    const flaw = selectRandomItem(globalDescriptors.flaw);
    const otherTrait = selectRandomItem(globalDescriptors.otherTraits);

    return `${appearances.join(', ')}, and ${appearances[2]}. They are ${personalities.join(', ')}, ${flaw}, and ${otherTrait}.`;
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