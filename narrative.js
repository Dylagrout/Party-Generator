function generateCampaignNarrative(campaign, characters) {
    const resolvedCampaign = resolveEvents(campaign, characters);
    const narrative = compileNarrative(resolvedCampaign);
    return narrative;
}

function resolveEvents(campaign, characters) {
    return campaign.map(stage => ({
        level: stage.level,
        events: stage.events.map(event => resolveEvent(event, characters))
    }));
}

function resolveEvent(event, characters) {
    const success = characters.some(character => {
        const relevantStat = getRelevantStatForEvent(event);
        return character.stats[relevantStat] >= 15;
    });

    return {
        ...event,
        outcome: success ? 'success' : 'failure',
        narrative: generateNarrative(event, success)
    };
}

function getRelevantStatForEvent(event) {
    switch (event.type) {
        case 'combat': return 'Strength';
        case 'social': return 'Charisma';
        case 'exploration': return 'Intelligence';
        case 'puzzle': return 'Wisdom';
        default: return 'Strength';
    }
}

function generateNarrative(event, success) {
    const outcome = success ? 'success' : 'failure';
    const outcomeText = selectRandomItem(outcomes[outcome]);
    return `${event.name}: ${outcomeText}`;
}

const outcomes = {
    success: ['The heroes emerged victorious.', 'The party solved the puzzle.', 'The characters navigated the social intricacies skillfully.'],
    failure: ['The heroes were defeated.', 'The party failed to solve the puzzle.', 'The characters made a social blunder.']
};

function compileNarrative(resolvedCampaign) {
    return resolvedCampaign.map(stage => {
        const stageNarrative = stage.events.map(event => event.narrative).join(' ');
        return `Level ${stage.level}:\n${stageNarrative}\n`;
    }).join('\n');
}
