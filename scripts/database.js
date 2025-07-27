export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "CircuitBreaker",
            power: "Destroys electronics"
        },
        {
            id: 2, 
            name: "Malware Maven",
            power: "Mind Control"
        }
    ]
}
export const getVillains = () => {
    return structuredClone(database.villains);
}