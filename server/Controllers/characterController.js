const classes = require('../CharacterFiles/classes')
const races = require('../CharacterFiles/races')
const backgrounds = require('../CharacterFiles/backgrounds')
var sentRace = ''
var sentSubRace = ''
var sentClass = ''
var sentSubClass = ''
var sentGender = ''
var sentBackground =''
var sentStatMods = ''
var sentStats = {
    Str: 0,
    Dex: 0,
    Con: 0,
    Int: 0,
    Wis: 0,
    Cha: 0
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getClass(charClass){
    if (charClass == ''){
        let classNum = getRandomInt(classes.classes.length)
        let subClassArray = [...classes.classes[classNum]["subclass"]]
        let subClassNum = getRandomInt(subClassArray.length)
        sentClass = classes.classes[classNum].name
        sentSubClass = subClassArray[subClassNum]
    }
    else {
        sentClass = charClass
        let subClassArray =[]
        for (let i = 0; i < classes.classes.length; i++){
            if (classes.classes[i].name == sentClass){
                subClassArray = [...classes.classes[i].subclass]
            }
        }
        let subClassNum = getRandomInt(subClassArray.length)
        sentSubClass = subClassArray[subClassNum]
    }
}

function getRace(race){
    if (race == ''){
        let raceNum = getRandomInt(races.races.length)
        let subRaceArray = [...races.races[raceNum].subrace]
        let subRaceNum = getRandomInt(subRaceArray.length)
        sentRace = races.races[raceNum].name
        sentSubRace = subRaceArray[subRaceNum].subName
        sentStatMods = subRaceArray[subRaceNum].stats
    }
    else {
        sentRace = race
        let subRaceArray = []
        for (let i = 0; i < races.races.length; i++){
            if (races.races[i].name == sentRace){
                subRaceArray = [...races.races[i].subrace]
            }
        }
        let subRaceNum = getRandomInt(subRaceArray.length)
        sentSubRace = subRaceArray[subRaceNum].subName
        sentStatMods = subRaceArray[subRaceNum].stats
    }
}

function getGender(gender){
    let genderNum = 0
    if (gender == ''){
         genderNum = getRandomInt(2)

    }
    if (genderNum == 0){
        sentGender = 'Male'
    }
    else if (genderNum == 1){
        sentGender = "Female"
    }
    else {
        sentGender = "A mistake was made"
    }
}

function getStatNumber(statOption){
    let arr = [
        getRandomInt(6) + 1, 
        getRandomInt(6) + 1, 
        getRandomInt(6) + 1, 
        getRandomInt(6) + 1
    ]
    if (statOption == "4d6 drop lowest"){
        let arr2 = arr.sort()
        arr2.shift()
        let stat = arr2.reduce((a, b) => a + b)
        return stat 
    }
    else if (statOption == "4d6 drop lowest reroll 1s"){
        while(arr.includes(1)){
            for(let i = 0; i < arr.length; i++){
                if (arr[i] == 1){
                    arr[i] = getRandomInt(6) + 1
                }
            }
        }
        let arr2 = arr.sort()
        arr2.shift()
        let stat = arr2.reduce((a, b) => a + b)
        return stat
    }
    
}

function getStats(statOption){
    switch(statOption){
        case "3d6":
            {
                sentStats = {
                    Str: getRandomInt(6) + getRandomInt(6) + getRandomInt(6) + 3,
                    Dex: getRandomInt(6) + getRandomInt(6) + getRandomInt(6) + 3,
                    Con: getRandomInt(6) + getRandomInt(6) + getRandomInt(6) + 3,
                    Int: getRandomInt(6) + getRandomInt(6) + getRandomInt(6) + 3,
                    Wis: getRandomInt(6) + getRandomInt(6) + getRandomInt(6) + 3,
                    Cha: getRandomInt(6) + getRandomInt(6) + getRandomInt(6) + 3
                }
            }
            break;
        case "4d6 drop lowest":
            {
                sentStats = {
                    Str: getStatNumber(statOption),
                    Dex: getStatNumber(statOption),
                    Con: getStatNumber(statOption),
                    Int: getStatNumber(statOption),
                    Wis: getStatNumber(statOption),
                    Cha: getStatNumber(statOption)
                }
            }
            break;
        case "4d6 drop lowest reroll 1s":
            {
                sentStats = {
                    Str: getStatNumber(statOption),
                    Dex: getStatNumber(statOption),
                    Con: getStatNumber(statOption),
                    Int: getStatNumber(statOption),
                    Wis: getStatNumber(statOption),
                    Cha: getStatNumber(statOption)
                }
            }
            break;
        case "2d6 + 6":
            {
                sentStats = {
                    Str: getRandomInt(6) + getRandomInt(6) + 8,
                    Dex: getRandomInt(6) + getRandomInt(6) + 8,
                    Con: getRandomInt(6) + getRandomInt(6) + 8,
                    Int: getRandomInt(6) + getRandomInt(6) + 8,
                    Wis: getRandomInt(6) + getRandomInt(6) + 8,
                    Cha: getRandomInt(6) + getRandomInt(6) + 8
                }
            }
            break;
        default:
            sentStats = 'Something went wrong'
    }
}

function getBackground(background){
    if (background == ''){
        sentBackground = backgrounds.backgrounds[getRandomInt(backgrounds.backgrounds.length)]
    }
    else {
        sentBackground = background
    }
}

async function makeCharacter(req, res){
    
    const {race, charClass, background, gender, statOption} = req.body
    
    getClass(charClass)
    getRace(race)
    getGender(gender)
    getBackground(background)
    getStats(statOption)
    
    res.status(200).json({
        sentClass,
        sentSubClass,
        sentRace,
        sentSubRace,
        sentStatMods,
        sentGender,
        sentBackground,
        sentStats
    })
}

module.exports = {
    makeCharacter
}