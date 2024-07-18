document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            document.getElementById('character-modal').style.display = 'none';
        });
    }
});

function renderCharacter(character) {
    let html = `<h3>${character.name} - ${character.gender} ${character.race}${character.subrace ? ' (' + character.subrace + ')' : ''} - ${character.subclass ? character.subclass + ' ' : ''}${character.class} ${character.level}</h3>
                <p>${character.description}</p>
                <ul>`;
    const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    abilities.forEach((ability) => {
        html += `<li>${ability}: ${character.stats[ability]}${character.bonusApplied && character.bonusApplied.hasOwnProperty(ability) ? ' (+)' : ''}</li>`;
    });
    html += `<li>Background: ${character.background}</li>
             <li>Archetype: ${character.archetype}</li>
             <li>Tags: ${character.tags.join(', ')}</li>
             <li><button onclick="showCharacterDetails(${JSON.stringify(character).replace(/"/g, "&quot;")})">View More</button></li>
             </ul>`;
    return html;
}

function showCharacterDetails(character) {
    const modal = document.getElementById('character-modal');
    const detailsDiv = document.getElementById('character-details');

    const feats = character.feats || [];
    const languages = character.languages || [];
    const tools = character.tools || [];

    let spellDescriptions = [];
    for (const level in character.spells) {
        spellDescriptions.push(`Level ${level}: ` + character.spells[level].join(', '));
    }

    let progressionHtml = '<h3>Level Progression</h3><ul>';
    character.progression.forEach(levelData => {
        progressionHtml += `<li><strong>Level ${levelData.level}</strong>:<ul>`;
        for (const stat in levelData.stats) {
            progressionHtml += `<li>${stat}: ${levelData.stats[stat]}</li>`;
        }
        progressionHtml += `<li>Hit Points: ${levelData.hitPoints}</li>`;
        if (levelData.subclass) {
            progressionHtml += `<li>Subclass: ${levelData.subclass}</li>`;
        }
        if (levelData.asiOrFeats.length > 0) {
            progressionHtml += `<li>ASI/Feats: ${levelData.asiOrFeats.join(', ')}</li>`;
        }
        progressionHtml += `<li>Cantrips: ${levelData.cantrips.join(', ')}</li>`;
        progressionHtml += `<li>Spells:<ul>`;
        for (const spellLevel in levelData.spells) {
            progressionHtml += `<li>Level ${spellLevel}: ${levelData.spells[spellLevel].join(', ')}</li>`;
        }
        progressionHtml += `</ul></li></ul></li>`;
    });
    progressionHtml += '</ul>';

    detailsDiv.innerHTML = `
    <h2>${character.name} - ${character.race} ${character.subrace ? '(' + character.subrace + ') ' : ''}</h2>
    <p>${character.description}</p>
    <ul>
    <li>Personality:</li>
    <li>Ideals:</li>
    <li>Bonds:</li>
    <li>Flaws:</li>
    <li>Sexuality: ${character.sexuality}</li>    
    </ul>
    <ul>
    <li>Hit Points: ${character.hitPoints}</li>
    <li>Feats: ${feats.join(', ')}</li>
    <li>Equipment: Armor: ${character.equipment.armor.join(', ')}; Weapons: ${character.equipment.weapons.join(', ')}</li>
    <li>Languages: ${languages.join(', ')}</li>
    <li>Tools: ${tools.join(', ')}</li>
    <li>Skills: ${character.skills.join(', ')}</li>   
    </ul>
    <h3>${character.subclass ? character.subclass + ' ' : ''}${character.class} ${character.level}</h3>
    <ul>
        <li>Spells: ${spellDescriptions.join('; ')}</li> 
    </ul>
    ${progressionHtml}`;

    modal.style.display = 'block';
}
