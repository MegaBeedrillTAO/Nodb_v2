const classes = require('../CharacterFiles/classes')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


async function makeCharacter(req, res){
    var sentRace = ''
    var sentSubRace = ''
    var sentClass = ''
    var sentSubClass = ''
    var sentGender = ''
    const {race, charClass, gender} = req.body
    if (charClass == ''){
        let classNum = getRandomInt(classes.classes.length)
        let subClassArray = [...classes.classes[classNum]["subclass"]]
        let subClassNum = getRandomInt(subClassArray.length + 1)
        sentClass = classes.classes[classNum].name
        sentSubClass = subClassArray[subClassNum]
    }
}

module.exports = {
    makeCharacter
}