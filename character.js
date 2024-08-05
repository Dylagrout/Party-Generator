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


    // Step 5: Determine if multiclassing and allocate levels
    const [primaryLevel, secondaryLevel] = allocateLevels(level);
    // Step 6: Select secondary class if multiclassing
    let secondaryClass = null;
    let secondaryClassData = null;
    let secondarySubclass = null;
    if (secondaryLevel > 0) {
        secondaryClass = selectAdditionalClasses(primaryClass, stats);
        if (secondaryClass && classes[secondaryClass]) {
            secondaryClassData = classes[secondaryClass];
            secondarySubclass = (secondaryLevel >= 3) ? determineSubclass(secondaryClass) : null;
        } else {
            console.error('Secondary class not defined:', secondaryClass);
            return null;
        }
    }
    console.log(primaryClass + primaryLevel);
    console.log(secondaryClass + secondaryLevel);
    // Step 7: Apply subclass if applicable
    const subclass = (primaryLevel >= 3) ? determineSubclass(primaryClass) : null;

    const gender = getRandomGender();
    const sexuality = getRandomSexuality();
    // Step 8: Generate other character details
    const nameSource = raceBaseNames[raceName][gender] || raceBaseNames[raceName].neutral;
    const firstNameSyllables = extractSyllables(nameSource.firstNames);
    const firstName = generateName(firstNameSyllables, race.firstNameMinSyllables, race.firstNameMaxSyllables);

    let lastName = '';
    if (nameSource.lastNames) {
        const lastNameSyllables = extractSyllables(nameSource.lastNames);
        lastName = generateName(lastNameSyllables, race.lastNameMinSyllables, race.lastNameMaxSyllables);
    } else if (nameSource.compoundParts) {
        lastName = generateCompoundName(nameSource.compoundParts);
    }

    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    const description = generateDescription(raceName);

    const archetype = selectRandomItem(archetypes);
    const characterTags = selectMultipleRandomItems(tags, 2);

    const cantrips = spellLists[primaryClass] && spellLists[primaryClass].cantrips ? selectRandomSpells(spellLists[primaryClass].cantrips, classData.cantripsByLevel[primaryLevel - 1]) : [];
    const spells = spellLists[primaryClass] && spellLists[primaryClass].spells ? generateSpellsForLevel(spellLists[primaryClass], classData.spellSlotsByLevel[primaryLevel - 1], primaryClass === 'Warlock', primaryLevel) : {};
    const equipment = selectEquipment(classData);
    const hitPoints = calculateHitPoints(classData.hitDie, primaryLevel, stats.Constitution);

    // Generate languages
    let languages = ['Common'];
    const racialLanguages = getRacialLanguages(raceName);
    if (racialLanguages.length > 0) {
        languages = languages.concat(racialLanguages);
    }
    if (raceName === 'Aarakocra') {
        const additionalLanguage = selectUniqueItems(languagesList, 1, languages);
        languages = languages.concat(additionalLanguage);
    }
    const additionalLanguages = selectUniqueItems(languagesList, background.languagesCount || 0, languages);
    languages = languages.concat(additionalLanguages);

    // Handle secondary class details if multiclassing
    let secondaryClassDetails = null;
    if (secondaryClass && secondaryClassData) {
        const secondaryCantrips = spellLists[secondaryClass] && spellLists[secondaryClass].cantrips ? selectRandomSpells(spellLists[secondaryClass].cantrips, secondaryClassData.cantripsByLevel[secondaryLevel - 1]) : [];
        const secondarySpells = spellLists[secondaryClass] && spellLists[secondaryClass].spells ? generateSpellsForLevel(spellLists[secondaryClass], secondaryClassData.spellSlotsByLevel[secondaryLevel - 1], secondaryClass === 'Warlock', secondaryLevel) : {};
        secondaryClassDetails = {
            class: secondaryClass,
            level: secondaryLevel,
            subclass: secondarySubclass,
            cantrips: secondaryCantrips,
            spells: secondarySpells
        };
    }

    return {
        name: fullName,
        gender,
        sexuality,
        race: raceName,
        subrace: subraceName,
        class: primaryClass,
        subclass,
        description,
        level: primaryLevel + secondaryLevel,
        primaryLevel,
        secondaryLevel,
        secondaryClassDetails,
        stats,
        hitPoints,
        skills,
        background: backgroundKey,
        spells,
        cantrips,
        equipment,
        features: generateCharacterFeatures(classData, primaryLevel),
        bonusApplied, // Include bonusApplied in the returned character object
        feats: [], // Initialize feats as an empty array
        languages, // Include generated languages
        tools: [], // Initialize tools as an empty array
        archetype,
        tags: characterTags
    };
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




