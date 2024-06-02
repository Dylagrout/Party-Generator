function addEventListeners() {
    const generateButton = document.getElementById('generate-button');
    if (generateButton) {
        generateButton.addEventListener('click', generateParty);  // For non-touch devices
        generateButton.addEventListener('touchstart', generateParty);  // For touch devices
    }
}
function generateParty() {
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

    for (let i = 0; i < partySize; i++) {
        let character = generateCharacter(level);
        if (character) {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'character-box';
            memberDiv.innerHTML = renderCharacter(character);
            partyMembersDiv.appendChild(memberDiv);
        } else {
            console.error('Failed to generate character.');
        }
    }
}