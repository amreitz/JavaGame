export const DemoRoom = {
    lowerSrc: "/images/maps/DemoLower.png",
    upperSrc: "/images/maps/DemoUpper.png",
    configObjects: {
        hero: {
            type: "Character",
            x: 5,
            y: 6,
            isPlayerControlled: true,
        },
        npc1: {
            type: "GameObject",
            x: 7,
            y: 9,
            src: "images/characters/people/npc1.png",
        },
        toy: {
            type: "Item",
            x: 5,
            y: 8,
            src: "images/characters/box.png",
        }
    }}