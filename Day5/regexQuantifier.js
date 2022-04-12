let regex = /man/
regex = /^kh/ // ^ mean expression will match if string starts with
regex = /ing$/ // $ mean expression will match if string ends with
regex = /k*an/ // matched 0 or more characters
regex = /k.an/ // matched 1 characters
regex = /khd?ani?/ // ? after character mean it is optional character
regex = /k\*an/ // \? mean it is a question mark

let str = "khan is good man"
let result = regex.exec(str)
console.log("the result of exec is ", result)
if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`)
}
else
{
    console.log(`the string ${str} does not match the expression ${regex.source}`)
}
