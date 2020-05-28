const classes = require('../CharacterFiles/classes')
const races = require('../CharacterFiles/races')
var sentRace = ''
var sentSubRace = ''
var sentClass = ''
var sentSubClass = ''
var sentGender = ''
var sentBackground =''
var sentStatMods = ''

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

async function makeCharacter(req, res){
    
    const {race, charClass, background, gender} = req.body
    
    getClass(charClass)
    getRace(race)
    getGender(gender)
    
    res.status(200).json({
        sentClass,
        sentSubClass,
        sentRace,
        sentSubRace,
        sentStatMods,
        sentGender
    })
}

module.exports = {
    makeCharacter
}