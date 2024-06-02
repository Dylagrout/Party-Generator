function addEventListeners() {
    const generateButton = document.getElementById('generate-button');
    if (generateButton) {
        generateButton.addEventListener('click', generateParty);  // For all devices
    } else {
        console.error('Generate button not found.');
    }
}
document.addEventListener('DOMContentLoaded', addEventListeners);

function generateParty() {
    console.log("Generate Party called");
    const partySizeInput = document.getElementById('party-size');
    const levelInput = document.getElementById('party-level');
    const partyMembersDiv = document.getElementById('party-members');

    if (!partySizeInput || !levelInput || !partyMembersDiv) {
        console.error('One or more required DOM elements are missing.');
        return;
    }

    const partySize = parseInt(partySizeInput.value, 10);
    const level = parseInt(levelInput.value, 10);
    partyMembersDiv.innerHTML = '';

    console.log(`Generating party of size: ${partySize}, level: ${level}`);  // Debugging log

    for (let i = 0; i < partySize; i++) {
        let character = generateCharacter(level);
        if (character) {
            console.log(`Character ${i + 1}:`, character);  // Debugging log
            const memberDiv = document.createElement('div');
            memberDiv.className = 'character-box';
            memberDiv.innerHTML = renderCharacter(character);
            partyMembersDiv.appendChild(memberDiv);
        } else {
            console.error('Failed to generate character.');
        }
    }
}