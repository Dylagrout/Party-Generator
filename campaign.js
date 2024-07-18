function generateCampaignDetails(campaignStages) {
    return campaignStages.map(stage => ({
        level: stage.level,
        events: generateEvents(stage.events)
    }));
}

function generateEvents(eventCount) {
    const events = [];
    for (let i = 0; i < eventCount; i++) {
        const eventType = selectRandomItem(Object.keys(eventTypes));
        const eventName = selectRandomItem(eventTypes[eventType]);
        events.push({ type: eventType, name: eventName });
    }
    return events;
}

const eventTypes = {
    combat: ['Bandit Ambush', 'Monster Attack', 'Rescue Mission'],
    social: ['Noble Gathering', 'Village Festival', 'Political Intrigue'],
    exploration: ['Ancient Ruins', 'Hidden Cave', 'Lost Temple'],
    puzzle: ['Riddle Challenge', 'Arcane Puzzle', 'Mechanical Trap']
};
