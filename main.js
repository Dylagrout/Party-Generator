document.addEventListener('DOMContentLoaded', function () {
    const generatePartyButton = document.getElementById('generate-party-button');
    const toCampaignGeneratorButton = document.getElementById('to-campaign-generator-button');
    const generateCampaignButton = document.getElementById('generate-campaign-button');
    const toNarrativeScreenButton = document.getElementById('to-narrative-screen-button');

    generatePartyButton.addEventListener('click', generateParty);
    toCampaignGeneratorButton.addEventListener('click', showCampaignGeneratorScreen);
    generateCampaignButton.addEventListener('click', generateCampaign);
    toNarrativeScreenButton.addEventListener('click', showNarrativeScreen);
});

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