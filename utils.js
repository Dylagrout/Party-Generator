function selectRandomSkills(skills, count) {
    const shuffled = skills.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
function selectMultipleRandomItems(array, count, exclusions = []) {
    const filteredArray = array.filter(item => !exclusions.includes(item));
    const selectedItems = [];
    while (selectedItems.length < count && filteredArray.length > 0) {
        const item = selectRandomItem(filteredArray);
        selectedItems.push(item);
        // Remove item and its contradictions from the array
        const contradictions = tagContradictions[item] || [];
        exclusions.push(item, ...contradictions);
        filteredArray.splice(filteredArray.indexOf(item), 1);
        contradictions.forEach(contradiction => {
            const index = filteredArray.indexOf(contradiction);
            if (index > -1) {
                filteredArray.splice(index, 1);
            }
        });
    }
    return selectedItems;
}

function selectRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
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

function selectRandomFeats(currentFeats) {
    const availableFeats = feats.filter(feat => !currentFeats.includes(feat.name));
    const selectedFeats = selectRandomItems(availableFeats, 1).map(feat => feat.name);
    return selectedFeats;
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