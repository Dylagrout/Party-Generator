document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            document.getElementById('character-modal').style.display = 'none';
        });
    }
    const generatePartyButton = document.getElementById('generate-party-button');
    const toCampaignGeneratorButton = document.getElementById('to-campaign-generator-button');
    const generateCampaignButton = document.getElementById('generate-campaign-button');
    const toNarrativeScreenButton = document.getElementById('to-narrative-screen-button');

    generatePartyButton.addEventListener('click', generateParty);
    toCampaignGeneratorButton.addEventListener('click', showCampaignGeneratorScreen);
    generateCampaignButton.addEventListener('click', generateCampaign);
    toNarrativeScreenButton.addEventListener('click', showNarrativeScreen);
});

function renderCharacter(character) {
    let html = `<h3>${character.name} - ${character.gender} ${character.race}${character.subrace ? ' (' + character.subrace + ')' : ''} - ${character.subclass ? character.subclass + ' ' : ''}${character.class} ${character.primaryLevel}`;
    if (character.secondaryClassDetails) {
        html += ` / ${character.secondaryClassDetails.subclass ? character.secondaryClassDetails.subclass + ' ' : ''}${character.secondaryClassDetails.class} ${character.secondaryClassDetails.level}`;
    }
    html += `</h3>
                <p>${character.description}</p>
                <ul>`;
    const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    abilities.forEach((ability) => {
        html += `<li>${ability}: ${character.stats[ability]}${character.bonusApplied && character.bonusApplied.hasOwnProperty(ability) ? ' (+)' : ''}</li>`;
    });
    html += `<li>Background: ${character.background}</li>
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

    // Handle secondary class details if multiclassing
    let secondaryClassDetailsHtml = '';
    if (character.secondaryClassDetails) {
        const secondarySpellDescriptions = [];
        for (const level in character.secondaryClassDetails.spells) {
            secondarySpellDescriptions.push(`Level ${level}: ` + character.secondaryClassDetails.spells[level].join(', '));
        }
        secondaryClassDetailsHtml = `
            <h3>${character.secondaryClassDetails.subclass ? character.secondaryClassDetails.subclass + ' ' : ''}${character.secondaryClassDetails.class} ${character.secondaryClassDetails.level}</h3>
            <ul>
                <li>Secondary Cantrips: ${character.secondaryClassDetails.cantrips.join(', ')}</li>
                <li>Secondary Spells: ${secondarySpellDescriptions.join('; ')}</li>
            </ul>`;
    }

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
        <h3>${character.subclass ? character.subclass + ' ' : ''}${character.class} ${character.primaryLevel}</h3>
        <ul>
            <li>Spells: ${spellDescriptions.join('; ')}</li> 
        </ul>
        ${secondaryClassDetailsHtml}`;
    
    modal.style.display = 'block';
}
function generateParty() {
    const partySize = parseInt(document.getElementById('party-size').value);
    const level = parseInt(document.getElementById('party-level').value);
    const partyMembersDiv = document.getElementById('party-members');

    partyMembersDiv.innerHTML = '';
    window.partyMembers = [];

    for (let i = 0; i < partySize; i++) {
        let character = generateCharacter(level);
        if (character) {
            window.partyMembers.push(character);
            const memberDiv = document.createElement('div');
            memberDiv.className = 'character-box';
            memberDiv.innerHTML = renderCharacter(character);
            partyMembersDiv.appendChild(memberDiv);
        }
    }

    document.getElementById('to-campaign-generator-button').style.display = 'block';
}

function showCampaignGeneratorScreen() {
    document.getElementById('party-generator-screen').style.display = 'none';
    document.getElementById('campaign-generator-screen').style.display = 'block';
}

function generateCampaign() {
    const endLevel = parseInt(document.getElementById('campaign-end-level').value);
    const startingLevel = window.partyMembers[0].level;

    const campaignStages = [];
    for (let level = startingLevel; level <= endLevel; level++) {
        campaignStages.push({ level, events: 3 });
    }

    window.campaign = generateCampaignDetails(campaignStages);
    const campaignDetailsDiv = document.getElementById('campaign-details');
    campaignDetailsDiv.innerHTML = 'Campaign generated!'; // Add more details as needed

    document.getElementById('to-narrative-screen-button').style.display = 'block';
}

function showNarrativeScreen() {
    document.getElementById('campaign-generator-screen').style.display = 'none';
    document.getElementById('narrative-screen').style.display = 'block';

    const narrativeLogDiv = document.getElementById('narrative-log');
    const narrative = generateCampaignNarrative(window.campaign, window.partyMembers);
    narrativeLogDiv.innerHTML = narrative.replace(/\n/g, '<br>');
}