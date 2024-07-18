function generateCampaignNarrative(campaign, characters) {
    const resolvedCampaign = resolveEvents(campaign, characters);
    const narrative = compileNarrative(resolvedCampaign, characters);
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
        return character.stats[relevantStat] >= 15 || character.archetype === 'brave' || character.tags.includes('strong');
    });

    const narratives = generateNarrative(event, characters, success);
    return {
        ...event,
        outcome: success ? 'success' : 'failure',
        narrative: narratives
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

function generateNarrative(event, characters, success) {
    const outcome = success ? 'success' : 'failure';
    const outcomeText = selectRandomItem(outcomes[outcome]);
    
    const characterReactions = characters.map(character => {
        const archetypeReaction = getArchetypeReaction(character.archetype, event, success);
        const tagReactions = character.tags.map(tag => getTagReaction(tag, event, success)).join(' ');
        return `${character.name}: ${archetypeReaction} ${tagReactions}`;
    }).join(' ');

    return `${event.name}: ${outcomeText} ${characterReactions}`;
}
function getArchetypeReaction(archetype, event, success) {
    const reactions = {
        aggressive: success ? 'charges forward fearlessly.' : 'lashes out in frustration.',
        cautious: success ? 'carefully plans the next move.' : 'retreats to reconsider options.',
        friendly: success ? 'encourages the team.' : 'tries to console others.',
        curious: success ? 'examines everything with interest.' : 'is disappointed but still curious.',
        brave: success ? 'stands tall and confident.' : 'remains undeterred.',
        strategist: success ? 'analyzes the victory.' : 'rethinks the strategy.'
    };
    return reactions[archetype];
}

function getTagReaction(tag, event, success) {
    const reactions = {
        short: success ? 'uses their size to an advantage.' : 'struggles with their height.',
        tall: success ? 'reaches places others can’t.' : 'has trouble with tight spaces.',
        strong: success ? 'overpowers the obstacles.' : 'is exhausted but persistent.',
        weak: success ? 'finds clever ways around physical challenges.' : 'is physically overmatched.',
        quick: success ? 'dodges swiftly.' : 'is a bit too hasty.',
        slow: success ? 'moves methodically.' : 'lags behind.'
    };
    return reactions[tag];
}
const outcomes = {
    success: ['The heroes emerged victorious.', 'The party solved the puzzle.', 'The characters navigated the social intricacies skillfully.'],
    failure: ['The heroes were defeated.', 'The party failed to solve the puzzle.', 'The characters made a social blunder.']
};

function compileNarrative(resolvedCampaign, characters) {
    let narrative = resolvedCampaign.map(stage => {
        const stageNarrative = stage.events.map(event => event.narrative).join(' ');
        return `Level ${stage.level}:\n${stageNarrative}\n`;
    }).join('\n');

    narrative += '\nCharacter Progressions:\n';
    characters.forEach(character => {
        narrative += `\n${character.name}:\n`;
        character.progression.forEach(levelData => {
            narrative += `Level ${levelData.level}: `;
            narrative += `Stats: ${JSON.stringify(levelData.stats)}, `;
            narrative += `Hit Points: ${levelData.hitPoints}, `;
            if (levelData.subclass) {
                narrative += `Subclass: ${levelData.subclass}, `;
            }
            if (levelData.asiOrFeats.length > 0) {
                narrative += `ASI/Feats: ${levelData.asiOrFeats.join(', ')}, `;
            }
            narrative += `Cantrips: ${levelData.cantrips.join(', ')}, `;
            narrative += `Spells: ${JSON.stringify(levelData.spells)}\n`;
        });
    });

    return narrative;
}
