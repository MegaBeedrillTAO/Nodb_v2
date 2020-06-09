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
    },
    {
        name: "Elf",
        subrace: [
            {
                subName: "High Elf",
                stats: "+2 to Dex, +1 to Int"
            },
            {
                subName: "Wood Elf",
                stats: "+2 to Dex, +1 to Wis"
            },
            {
                subName: "Drow",
                stats: "+2 to Dex, +1 to Cha"
            },
            {
                subName: "Eladrin",
                stats: "+2 to Dex, +1 to Cha"
            },
            {
                subName: "Sea Elf",
                stats: "+2 to Dex, +1 to Con"
            },
            {
                subName: "Shadar-Kai",
                stats: "+2 to Dex, +1 to Con"
            },
            {
                subName: "Pallid Elf",
                stats: "+2 to Dex, +1 to Con"
            }
        ]
    },
    {
        name: "Halfling",
        subrace: [
            {
                subName: "Lightfoot",
                stats: "+2 to Dex, +1 to Cha"
            },
            {
                subName: "Stout",
                stats: "+2 to Dex, +1 to Con"
            },
            {
                subName: "Lotusden",
                stats: "+2 to Dex, +1 to Wis"
            }
        ]
    },
    {
        name: "Dragonborn",
        subrace: [
            {
                subName: "",
                stats: "+2 to Str, +1 to Cha"
            },
            {
                subName: "Draconblood",
                stats: "+2 to Int, +1 to Cha"
            },
            {
                subName: "Ravenite",
                stats: "+2 to Str, +1 to Con"
            }
        ]
    },
    {
        name: "Gnome",
        subrace: [
            {
                subName: "Forrest Gnome",
                stats: "+2 to Int, +1 to Dex"
            },
            {
                subName: "Rock Gnome",
                stats: "+2 to Int, +1 to Con"
            },
            {
                subName: "Deep Gnome",
                stats: "+2 to Int, +1 to Dex"
            }
        ]
    },
    {
        name: "Half-Elf",
        subrace: [
            {
                subName: "",
                stats: "+2 to Cha, +1 to any other two stats"
            }
        ]
    }
]

module.exports = {
    races
}