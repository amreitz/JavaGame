export const Kitchen = {
    lowerSrc: "/images/maps/KitchenLower.png",
    upperSrc: "/images/maps/KitchenUpper.png",
    configObjects: {
        npcA: {
            type: "Character",
            x: 9,
            y: 8,
            src: "images/characters/people/npc1.png",
        },
        npcB: {
            type: "Character",
            x: 4,
            y: 9,
            src: "images/characters/people/npc2.png",
        },
        hero: {
            type: "Character",
            x: 3,
            y: 5,
            isPlayerControlled: true,
        },
    }
}