function selectRandomSkills(skills, count) {
    const shuffled = skills.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
