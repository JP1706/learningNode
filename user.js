// console.log("User File Called")
var userName = "Jeni"
var userAge = 21

const printUserData = () => {
    console.log("Print User Data function is called from user.js")
}

module.exports = {
    userName, userAge, printUserData
}