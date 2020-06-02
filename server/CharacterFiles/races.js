const races = [
    {
        name: "Human",
        subrace: [
            {
                subName: "",
                stats: "+1 to all stats"
            }
        ]
    },
    {
        name: "Dwarf",
        subrace: [
            {
                subName: "Hill",
                stats: "+2 to Con, +1 to Wis"
            },
            {
                subName: "Mountain",
                stats: "+2 to Con, +2 to Str"
            },
            {
                subName: "Duergar",
                stats: "+2 to Con, +1 to Str"
            }
        ]
    }
]

module.exports = {
    races
}